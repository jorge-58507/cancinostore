<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\cs_product;
use App\rel_measure_product;
// use App\cs_productupdate;
use App\cs_productcount;
use App\cs_articleproduct;
use App\cs_dataproductinput;
use App\cs_datarequisition;

class productController extends Controller
{
    public function getAll(){
        $rs = cs_product::orderby('tx_product_value')->get();
        return $rs;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rs_product = $this->getAll();
        return response()->json(['status'=>'success','data'=>['all'=>$rs_product]]);
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
        $cs_product = new cs_product;

        $check_value = cs_product::where('tx_product_value',$request->input('b'))->where('product_ai_productcategory_id',$request->input('a'))->count();
        if ($check_value > 0) {
            return response()->json(['status'=>'failed','message'=>'Producto duplicado.']);
        }
        $check_code = cs_product::where('tx_product_code',$request->input('d'))->count();
        if ($check_code) {
            return response()->json(['status'=>'failed','message'=>'Este codigo ya existe.']);
        }
        $user = $request->user();;
        $cs_product->product_ai_user_id = $user['id'];
        $cs_product->product_ai_productcategory_id = $request->input('a');
        $cs_product->tx_product_value = $request->input('b');
        $cs_product->tx_product_code = $request->input('d');
        $cs_product->tx_product_status = $request->input('i');
        $cs_product->tx_product_alarm = $request->input('j');
        $cs_product->tx_product_discountable = $request->input('k');
        $cs_product->tx_product_quantity = 0;
        $cs_product->tx_product_slug = time().str_replace(' ','', $request->input('d'));
        $cs_product->save();

        // GUARDAR MEDIDA
        $measureproductController = new measureproductController;
        $measureproductController->add($cs_product->ai_product_id,$request->input('l'),1);
      
        // ANSWER
        $rs_product = $this->getAll();
        return response()->json(['status'=>'success','message'=>'Creado Correctamente','data'=>['all'=>$rs_product]]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $rs_product = cs_product::where('tx_product_slug',$slug)->first();
        $rs_measure = cs_product::select('cs_measures.ai_measure_id','cs_products.tx_product_slug','cs_measures.tx_measure_value','rel_measure_products.tx_measure_product_relation','rel_measure_products.ai_measure_product_id')->join('rel_measure_products','rel_measure_products.measure_product_ai_product_id','=','cs_products.ai_product_id')
        ->join('cs_measures','rel_measure_products.measure_product_ai_measure_id','=','cs_measures.ai_measure_id')->where('tx_product_slug',$slug)->where('tx_measure_status',1)->get();

        return response()->json(['status'=>'success','data'=>['product'=>$rs_product, 'measure_list'=>$rs_measure ]]);
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
    public function update(Request $request, $slug)
    {
        $check_code = cs_product::where('tx_product_code',$request->input('d'))->where('tx_product_slug','!=',$slug); // verificar duplicad de codigo
        if ($check_code->count() > 0) {
            return response()->json(['status'=>'failed','message'=>'Ese c&oacute;digo ya existe.']);
        }
        $qry = cs_product::where('tx_product_slug',$slug);
        if ($qry->count() > 0) {
            $qry->update([
                'product_ai_productcategory_id' => $request->input('a'),
                'tx_product_value' => $request->input('b'),
                'tx_product_reference' => $request->input('c'),
                'tx_product_code' => $request->input('d'),
                'tx_product_taxrate' => $request->input('e'),
                'tx_product_minimum' => $request->input('f'),
                'tx_product_maximum' => $request->input('g'),
                'tx_product_discountrate' => $request->input('h'),
                'tx_product_status' => $request->input('i'),
                'tx_product_alarm' => $request->input('j'),
                'tx_product_discountable' => $request->input('k'),
            ]);
            $user = $request->user();
            $rs_product = $qry->first();
            // $cs_productupdate = new cs_productupdate;
            // $cs_productupdate->productupdate_ai_user_id = $user['id'];
            // $cs_productupdate->productupdate_ai_product_id = $rs_product['ai_product_id'];
            // $cs_productupdate->tx_productupdate_data = json_encode([
            //     'productcategory'=> $request->input('a'),
            //     'value'=> $request->input('b'),
            //     'reference'=> $request->input('c'),
            //     'code'=> $request->input('d'),
            //     'taxrate'=> $request->input('e'),
            //     'minimum'=> $request->input('f'),
            //     'maximum'=> $request->input('g'),
            //     'discountrate'=> $request->input('h'),
            //     'status'=> $request->input('i'),
            //     'alarm'=> $request->input('j'),
            //     'discountable'=> $request->input('k')
            // ]);
            // $cs_productupdate->save();
        }
        // ANSWER
        $rs_product = $this->getAll();
        return response()->json(['status'=>'success','message'=>'Informaci&oacute;n Actualizada','data'=>['all'=>$rs_product]]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($product_slug )
    {
        $qry = cs_product::where('tx_product_slug',$product_slug);
        if ($qry->count() < 1) {
            return response()->json(['status'=>'failed','message'=>'No existe.']);
        }
        $rs_product = $qry->first();
        $denied = 0;

        if ($denied === 0) {
            cs_product::where('ai_product_id',$rs_product['ai_product_id'])->delete();
            $message = 'Se elimin&oacute; correctamente.';
        }else{
            cs_product::where('ai_product_id',$rs_product['ai_product_id'])->update(['tx_product_status'=>0]);
            $message = 'Se desactiv&oacute; el producto.';
        }
        
        // ANSWER
        $rs_product = $this->getAll();
        return response()->json(['status'=>'success','message'=>$message,'data'=>['all'=>$rs_product]]);
    }


    public function show_quantity($product_slug){
        $rs_product = cs_product::where('tx_product_slug',$product_slug)->first();
        $rs = cs_productcount::where('productcount_ai_product_id',$rs_product['ai_product_id'])->limit(10)->get();
        return response()->json(['status'=>'success','message'=>'','data'=>['count_list'=>$rs]]);
    }
    public function update_quantity(Request $request, $product_slug){
        $qry = cs_product::where('tx_product_slug',$product_slug);
        $rs_product = $qry->first();
        $qry->update(['tx_product_quantity'=>$request->input('a')]);

        $model = new cs_productcount;
        $user = $request->user();
        $model->productcount_ai_user_id = $user['id'];
        $model->productcount_ai_product_id = $rs_product['ai_product_id'];
        $model->tx_productcount_before = $rs_product['tx_product_quantity'];
        $model->tx_productcount_after = $request->input('a');
        $model->save();

        $rs_product = cs_product::where('tx_product_slug',$product_slug)->first();
        return response()->json(['status'=>'success','message'=>'Conteo Actualizado.','data'=>['product'=>$rs_product]]);

    }
    public function minus_byArticle($article_list){
        foreach ($article_list as $a => $article) {
            foreach ($article['recipe'] as $ingredient) {
                foreach ($ingredient as $reduced) {
                    $raw_explode = explode(",",$reduced);
                    $rs_measureproduct = rel_measure_product::select('cs_products.tx_product_quantity','cs_products.tx_product_discountable','rel_measure_products.tx_measure_product_relation')
                    ->join('cs_products','cs_products.ai_product_id','rel_measure_products.measure_product_ai_product_id')
                    ->where('measure_product_ai_measure_id',$raw_explode[1])->where('measure_product_ai_product_id',$raw_explode[2])->first();
                    
                    if ($rs_measureproduct['tx_product_discountable'] == 1) {
                        $quantity = $rs_measureproduct['tx_product_quantity']-(($raw_explode[0]*$article['quantity'])*$rs_measureproduct['tx_measure_product_relation']);
                        $product = cs_product::where('ai_product_id',$raw_explode[2])->update(['tx_product_quantity' => $quantity]);
                    }
                }

            }
        }
    }
    public function plus_byArticle($article_list){
        foreach ($article_list as $a => $article) {
            $recipe = json_decode($article['recipe'],true);
            foreach ($recipe as $ingredient) {
                foreach ($ingredient as $reduced) {
                    $raw_explode = explode(",",$reduced);
                    $rs_measureproduct = rel_measure_product::select('cs_products.tx_product_quantity','cs_products.tx_product_discountable','rel_measure_products.tx_measure_product_relation')
                    ->join('cs_products','cs_products.ai_product_id','rel_measure_products.measure_product_ai_product_id')
                    ->where('measure_product_ai_measure_id',$raw_explode[1])->where('measure_product_ai_product_id',$raw_explode[2])->first();
                    
                    if ($rs_measureproduct['tx_product_discountable'] == 1) {
                        $quantity = $rs_measureproduct['tx_product_quantity']+(($raw_explode[0]*$article['quantity'])*$rs_measureproduct['tx_measure_product_relation']);
                        $product = cs_product::where('ai_product_id',$raw_explode[2])->update(['tx_product_quantity' => $quantity]);
                    }
                }

            }
        }
    }
    public function minus_byProduct($product_list){
        foreach ($product_list as $a => $product) {
            // $rs_product = cs_product::where('ai_product_id',$product['ai_product_id'])->get();
            if ($product['tx_product_discountable'] == 1) {
                $quantity = $product['tx_product_quantity']-$product['depletion_quantity'];
                cs_product::where('ai_product_id',$product['ai_product_id'])->update(['tx_product_quantity' => $quantity]);
            }
        }
    }

}
