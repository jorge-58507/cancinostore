<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\cs_article;
use App\cs_articleproduct;
use App\cs_price;

class articleproductController extends Controller
{
    public function store(Request $request){
        $raw_recipe = $request->input('a');
        $presentation_id = $request->input('c');

        $rs_article = cs_article::where('tx_article_slug',$request->input('b'))->first();

        cs_articleproduct::where('articleproduct_ai_article_id',$rs_article['ai_article_id'])->where('articleproduct_ai_presentation_id',$presentation_id)->delete();
        $articleproductController = new articleproductController;
        foreach ($raw_recipe as $recipe) {
            $articleproductController->save($rs_article['ai_article_id'],$presentation_id,$recipe);
        }

        // Answer
        $rs = cs_articleproduct::select('cs_articles.tx_article_slug','cs_presentations.tx_presentation_value','cs_articleproducts.created_at','cs_articleproducts.articleproduct_ai_presentation_id','cs_articleproducts.tx_articleproduct_ingredient')
        ->join('cs_presentations','cs_presentations.ai_presentation_id','=','cs_articleproducts.articleproduct_ai_presentation_id')
        ->join('cs_articles','cs_articles.ai_article_id','=','cs_articleproducts.articleproduct_ai_article_id')
        ->where('articleproduct_ai_article_id',$rs_article['ai_article_id'])
        ->orderby('articleproduct_ai_presentation_id','DESC')->get();

        return ['status' => 'success', 'message' => 'Producto Agregado.', 'data' => ['articleproduct'=>$rs]];

    }
    public function save($article_id,$presentation_id,$recipe){
        // BORRAR LAS RECETAS QUE COINCIDAN CON ARTICULO-PRESENTACIÓN
        $description = $recipe[0]['ingredient_title'];
        foreach ($recipe as $key => $value) {
            $recipe[$key] = array_splice($value,0,5);
        }

        $user = Auth()->user();
        $cs_articleproduct = new cs_articleproduct;
        $cs_articleproduct->articleproduct_ai_user_id       = $user['id'];
        $cs_articleproduct->tx_articleproduct_value    = $description;
        $cs_articleproduct->articleproduct_ai_article_id    = $article_id;
        $cs_articleproduct->articleproduct_ai_presentation_id      = $presentation_id;
        $cs_articleproduct->tx_articleproduct_ingredient    = json_encode($recipe);
        $cs_articleproduct->save();

    }
    public function delete(Request $request){
        $product_id = $request->input('a');
        $article_id = $request->input('b');

        $qry = cs_articleproduct::where('articleproduct_ai_article_id',$article_id)->where('articleproduct_ai_product_id',$product_id);
        if ($qry->count() > 0) {
            $qry->delete();
        }else{
            return ['status' => 'failed', 'message' => 'Producto no existe.'];
        }

        // Answer
        $rs_articleproduct = cs_articleproduct::select('cs_articleproducts.articleproduct_ai_product_id','cs_articleproducts.articleproduct_ai_article_id','cs_articleproducts.tx_articleproduct_quantity','cs_articleproducts.articleproduct_ai_measure_id','cs_products.tx_product_value','cs_measures.tx_measure_value')->join('cs_products','cs_products.ai_product_id','cs_articleproducts.articleproduct_ai_product_id')->join('cs_measures','cs_measures.ai_measure_id','cs_articleproducts.articleproduct_ai_measure_id')->where('articleproduct_ai_article_id',$article_id)->get();
        return ['status' => 'success', 'message' => 'Producto Eliminado.', 'data' => ['articleproduct'=>$rs_articleproduct]];
    }

    public function showByArticle ($article_slug){
        $rs_article = cs_article::where('tx_article_slug',$article_slug)->first();
        $rs = cs_articleproduct::select('cs_presentations.tx_presentation_value','cs_articleproducts.created_at','cs_articleproducts.articleproduct_ai_presentation_id','cs_articleproducts.articleproduct_ai_article_id','cs_articleproducts.tx_articleproduct_ingredient','cs_articles.tx_article_slug')
        ->join('cs_presentations','cs_presentations.ai_presentation_id','=','cs_articleproducts.articleproduct_ai_presentation_id')
        ->join('cs_articles','cs_articles.ai_article_id','cs_articleproducts.articleproduct_ai_article_id')
        ->where('articleproduct_ai_article_id',$rs_article['ai_article_id'])
        ->orderby('articleproduct_ai_presentation_id','DESC')->get();

        $rs_presentation = cs_price::join('cs_presentations','cs_presentations.ai_presentation_id','=','cs_prices.price_ai_presentation_id')
        ->where('price_ai_article_id',$rs_article['ai_article_id'])
        ->where('cs_prices.tx_price_status',1)
        ->orderby('tx_price_status','DESC')->orderby('tx_price_date')
        ->groupby('price_ai_presentation_id')->get();

        return response()->json(['status'=>'success','data'=>['articleproduct'=>$rs, 'presentation'=>$rs_presentation]]);
    }

    public function showRecipe ($presentation_id, $article_slug){
        $rs_article = cs_article::where('tx_article_slug',$article_slug)->first();
        $rs = cs_articleproduct::select('cs_articleproducts.tx_articleproduct_value','cs_presentations.tx_presentation_value','cs_articleproducts.created_at','cs_articleproducts.articleproduct_ai_presentation_id','cs_articleproducts.tx_articleproduct_ingredient')
        ->join('cs_presentations','cs_presentations.ai_presentation_id','=','cs_articleproducts.articleproduct_ai_presentation_id')
        ->where('articleproduct_ai_article_id',$rs_article['ai_article_id'])
        ->where('articleproduct_ai_presentation_id',$presentation_id)
        ->orderby('articleproduct_ai_presentation_id','DESC')->get();

        return response()->json(['status'=>'success','data'=>['recipe'=>$rs]]);
    }
}
