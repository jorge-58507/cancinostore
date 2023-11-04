<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\cs_request;
use App\cs_table;
use App\cs_commanddata;

class commandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $count = cs_request::count();
        $code = substr('000000000000'.$count,-10);

        $rs_table = $request->input('b');
        if (!empty($rs_table)) {
            $table_id = $rs_table['ai_table_id'];
        }else{
            $table_id = '';
        }

        $user = $request->user();
        if (empty($user)) {
            $user['id'] = 1; //SI EL USUARIO NO HA INICIADO SESION SE GUARDA EL PEDIDO COMO USUARIO_DEFAULT
        }
        $requestController = new requestController;
        $request_id = $requestController->save($user['id'],$table_id,$code,$request->input('d'),$request->input('g'),$request->input('e'),$request->input('c'),$request->input('f'));

        // INSERTAR LOS ARTICULOS DE LA COMANDA
        $article_list = $request->input('a');

        $this->save_commanddata($article_list, $user['id'], $request_id);

        // ANSWER
        $rs_request = cs_request::where('ai_request_id',$request_id)->first();
        $rs_command = $this->getByRequest($request_id);
        return response()->json(['status'=>'success','message'=>'','data'=>['command_procesed'=>$rs_command,'request'=>$rs_request]]);
    }
    public function save_commanddata ($article_list,$user_id,$request_id) {
        foreach ($article_list as $a => $article) {
            $option = (strlen($article['option']) > 1) ? $article['option'] : '';
            $recipe = json_encode($article['recipe']);
            $tax_rate = $article['tax_rate'];
            $cs_commanddata = new cs_commanddata;
            $cs_commanddata->commanddata_ai_user_id         = $user_id;
            $cs_commanddata->commanddata_ai_request_id      = $request_id;
            $cs_commanddata->commanddata_ai_presentation_id = $article['presentation_id'];
            $cs_commanddata->commanddata_ai_article_id      = $article['article_id'];
            $cs_commanddata->tx_commanddata_quantity        = $article['quantity'];
            $cs_commanddata->tx_commanddata_price           = $article['price'];
            $cs_commanddata->tx_commanddata_taxrate         = $tax_rate;
            $cs_commanddata->tx_commanddata_discountrate    = $article['discount_rate'];
            $cs_commanddata->tx_commanddata_description     = $article['article_description'];
            $cs_commanddata->tx_commanddata_modified        = 0;
            $cs_commanddata->tx_commanddata_option          = $option;
            $cs_commanddata->tx_commanddata_recipe          = $recipe;
            $cs_commanddata->save();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }



    
    public function getByRequest($request_id)
    {
        $rs_command = cs_request::join('cs_commanddatas','cs_commanddatas.commanddata_ai_request_id','cs_requests.ai_request_id')
        ->join('cs_articles','cs_articles.ai_article_id','cs_commanddatas.commanddata_ai_article_id')
        ->join('cs_presentations','cs_presentations.ai_presentation_id','cs_commanddatas.commanddata_ai_presentation_id')
        ->where('cs_requests.ai_request_id',$request_id)->orderby('tx_commanddata_status','DESC')->orderby('ai_request_id','ASC')->get();
        return $rs_command;
    }

    public function get_commanddata($id)
    {
        $rs_articlelastest = cs_request::select('cs_commanddatas.ai_commanddata_id', 'cs_commanddatas.tx_commanddata_quantity', 'cs_commanddatas.tx_commanddata_description', 'cs_commanddatas.tx_commanddata_price', 'cs_commanddatas.tx_commanddata_taxrate', 'cs_commanddatas.tx_commanddata_discountrate', 'cs_commanddatas.tx_commanddata_option', 'cs_commanddatas.tx_commanddata_recipe', 'cs_commanddatas.commanddata_ai_presentation_id','cs_presentations.tx_presentation_value', 'cs_articles.tx_article_thumbnail','cs_articles.tx_article_slug','cs_articles.tx_article_value','cs_articles.ai_article_id','cs_articles.tx_article_description')->join('cs_commanddatas','cs_commanddatas.commanddata_ai_request_id','cs_requests.ai_request_id')->join('cs_presentations','cs_presentations.ai_presentation_id','cs_commanddatas.commanddata_ai_presentation_id')->join('cs_articles','cs_articles.ai_article_id','cs_commanddatas.commanddata_ai_article_id')->where('ai_commanddata_id',$id)->first();
        
        return response()->json(['status' => 'success','data' => ['info' => $rs_articlelastest]]);
    }}
