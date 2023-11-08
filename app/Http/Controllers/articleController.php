<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\cs_article;
use App\cs_articleproduct;
use App\cs_commanddata;
use App\cs_price;
use App\User;

use Illuminate\Support\Facades\Validator;


class articleController extends Controller
{
    public function getAll(){
        $rs = cs_article::select('article_ai_user_id','article_ai_category_id','tx_article_code','tx_article_value','tx_article_promotion','tx_article_status','tx_article_slug','tx_article_taxrate','tx_article_discountrate','created_at','updated_at')->get();
        return $rs;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rs_article = $this->getAll();
        return response()->json(['status'=>'success','data'=>['all'=>$rs_article]]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $description = $request->input('a');
        $code = $request->input('b');
        $category = $request->input('c');
        $promotion = $request->input('d');
        $option = (!empty($request->input('e'))) ? $request->input('e') : [];
        $short_description = $request->input('j');

        $check_description = cs_article::where('tx_article_value',$description)->where('article_ai_category_id',$category)->count();
        if ($check_description > 0) {
            return response()->json(['status'=>'failed','message'=>'Art&iacute;culo duplicado.']);
        }
        $check_code = cs_article::where('tx_article_code',$code)->count();
        if ($check_code > 0) {
            return response()->json(['status'=>'failed','message'=>'C&oacute;digo ya existe.']);
        }

        $user = $request->user();
        $article = new cs_article;
        $article->article_ai_category_id = $category;
        $article->article_ai_user_id = $user['id'];
        $article->tx_article_value = $description;
        $article->tx_article_description = $short_description;
        $article->tx_article_code = $code;
        $article->tx_article_promotion = $promotion;
        $article->tx_article_taxrate = $request->input('h');
        $article->tx_article_discountrate = $request->input('i');
        $article->tx_article_option = json_encode($option); // opcion tiene que ser un json [{titulo: ['opcion1','opcion2','opcion3']}]
        $article->tx_article_thumbnail = '';
        $article->tx_article_slug = time().$code;
        $article->save();
        // status se guarda en cero, 
        
        // ANSWER
        $rs_article = $this->getAll();
        return response()->json(['status'=>'success','data'=>['all'=>$rs_article]]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($article_slug)
    {
        $qry = cs_article::where('tx_article_slug',$article_slug);
        if ($qry->count() < 1) {
            return response()->json(['status'=>'failed','message'=>'Articulo no existe.']);
        }
        $rs = $qry->first();

        $qry_price = cs_price::select('cs_presentations.tx_presentation_value','cs_presentations.ai_presentation_id','cs_prices.ai_price_id','cs_prices.tx_price_one','cs_prices.tx_price_two','cs_prices.tx_price_three','cs_prices.tx_price_date')->join('cs_presentations','cs_prices.price_ai_presentation_id','cs_presentations.ai_presentation_id')
        ->where('price_ai_article_id',$rs['ai_article_id'])->where('tx_price_status',1)->orderby('tx_price_date','DESC');
        $rs_price = $qry_price->get();

        if ($qry_price->count() === 0) {
            $articleproduct = ['lalala'];
        }else{
            $articleproduct = cs_articleproduct::where('articleproduct_ai_article_id',$rs['ai_article_id'])->where('articleproduct_ai_presentation_id',$rs_price[0]['ai_presentation_id'])->get();
        }
        return response()->json(['status'=>'success','data'=>['article'=>$rs, 'price' => $rs_price, 'articleproduct'=>$articleproduct]]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    public function encode_articleoption($article_option)
    {
        $option = [];
        if (!empty($article_option)) {
            $raw_articleoption = explode("\n",$article_option);
            foreach ($raw_articleoption as $key => $articleoption) {
                $splited_line = explode(':',$articleoption);
                $option_splited = explode(',',$splited_line[1]);
                $option_array = [];
                foreach ($option_splited as $value) {
                    $value = trim($value);
                    array_push($option_array,str_replace("\r","",$value));
                }
                array_push($option,[$splited_line[0] => $option_array]);
            }
        }
        return $option;
    }

    public function renovate(Request $request)
    {
        $article_id = $request->input('articleId');
        $short_description = $request->input('articleDescription');
        $description = $request->input('articleValue');
        $code = $request->input('articleCode');
        $category = $request->input('articleCategory');
        $promotion = ($request->input('articlePromotion') === 'on') ? 1 : 0;
        $option = $this->encode_articleoption($request->input('articleOption'));
        $status = ($request->input('articleStatus') === 'on') ? 1 : 0;
        $imagePlaceholder = $request->input('articleImagePlaceholder');

        $check_description = cs_article::where('tx_article_value',$description)->where('article_ai_category_id',$category)->where('ai_article_id','!=',$article_id)->count();
        if ($check_description > 0) {
            return response()->json(['status'=>'failed','message'=>'Art&iacute;culo duplicado.']);
        }
        $check_code = cs_article::where('tx_article_code',$code)->where('ai_article_id','!=',$article_id)->count();
        if ($check_code > 0) {
            return response()->json(['status'=>'failed','message'=>'C&oacute;digo ya existe.']);
        }

        // revisa si el articulo tiene precio, sino mantenerse desactivado
        $check_price = cs_price::where('price_ai_article_id',$article_id)->where('tx_price_status',1)->count();
        if ($check_price === 0) {
            $status = 0;
        }

        if ($request->hasFile('articleImage')) {
            $validator = Validator::make($request->all(),['articleImage' => 'mimes:jpg,png,jpeg,gif,svg|max:2048|dimensions:min_width=100,min_height=100,max_width=1000,max_height=1000']);
            if ($validator->fails()) {  return response()->json(['status'=>'failed', 'message'=>'La imagen no tiene el formato adecuado.']); }
            $avatar = $request->file('articleImage');
            $filename = time().$avatar->getClientOriginalName();      
            $avatar->move(public_path().'/attached/image/article/',$filename);
        }else{
            $filename = $imagePlaceholder;
        }

        $article = new cs_article;
        $qry = cs_article::where('ai_article_id',$article_id);
        if ($qry->count() > 0) {
            $qry->update([
                'article_ai_category_id' => $category,
                'tx_article_value' => $description,
                'tx_article_description' => $short_description,
                'tx_article_code' => $code,
                'tx_article_promotion' => $promotion,
                'tx_article_option' => json_encode($option), // opcion tiene que ser un json [{titulo: ['opcion1','opcion2','opcion3']}]
                'tx_article_status' => $status,
                'tx_article_taxrate' => $request->input('articleTaxrate'),
                'tx_article_discountrate' => $request->input('articleDiscountrate'),
                'tx_article_thumbnail' => $filename
            ]);
        }
        // if (sizeOf($product) > 0) {
        //     $articlepoductController = new articleproductController;
        //     $ans = $articlepoductController->save($product);
        // }
        
        // ANSWER
        $rs_article = $this->getAll();
        return response()->json(['status'=>'success','data'=>['all'=>$rs_article]]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($article_slug)
    {
        $qry = cs_article::where('tx_article_slug',$article_slug);
        if ($qry->count() < 1) {
            return response()->json(['status'=>'failed','message'=>'No existe.']);
        }
        $rs = $qry->first();
        $denied = 0;
        // VERIFICAR QUE NO TENGA commanddata_ai_article_id
        $check_commanddata = cs_commanddata::where('commanddata_ai_article_id',$rs['ai_article_id'])->count();
        if ($check_commanddata > 0) {
            $denied = 1;
        }


        if ($denied === 0) {
            cs_article::where('ai_article_id',$rs['ai_article_id'])->delete();
            cs_price::where('price_ai_article_id',$rs['ai_article_id'])->delete();
            cs_articleproduct::where('articleproduct_ai_article_id',$rs['ai_article_id'])->delete();
            $message = 'Se elimin&oacute; correctamente.';
        }else{
            cs_article::where('ai_article_id',$rs['ai_article_id'])->update(['tx_article_status'=>0]);
            $message = 'Se desactiv&oacute; el art&iacute;culo.';
        }
        
        // ANSWER
        $rs_product = $this->getAll();
        return response()->json(['status'=>'success','message'=>$message,'data'=>['all'=>$rs_product]]);
    }
}
