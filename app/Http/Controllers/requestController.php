<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\cs_article;
use App\cs_table;
use App\cs_request;

class requestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($table_slug = '')
    {
        $rs_article = cs_article::select('cs_articles.ai_article_id','cs_articles.tx_article_thumbnail','cs_articles.tx_article_code', 'cs_articles.tx_article_value', 'cs_articles.tx_article_description', 'cs_articles.tx_article_promotion','cs_articles.tx_article_slug','cs_categories.ai_category_id','cs_categories.tx_category_value')->join('cs_categories','cs_categories.ai_category_id','cs_articles.article_ai_category_id')->where('tx_article_status',1)->orderby('tx_article_promotion','DESC')->orderby('tx_article_value','ASC')->get();
        $qry_table = cs_table::where('tx_table_slug',$table_slug);
        if ($qry_table->count() > 0) { 
            $rs_table = $qry_table->first();
        }else{
            if ( !auth()->user()) {
                return redirect('/register');
            }
            $rs_table = '';
        }

        $user = auth()->user();
        $rs_articlelastest = (!empty($user['id'])) ? $rs_articlelastest = cs_request::select('cs_commanddatas.tx_commanddata_quantity', 'cs_presentations.tx_presentation_value','cs_commanddatas.tx_commanddata_description','cs_articles.tx_article_thumbnail','cs_articles.tx_article_slug','cs_articles.tx_article_value','cs_commanddatas.tx_commanddata_price')->join('cs_commanddatas','cs_commanddatas.commanddata_ai_request_id','cs_requests.ai_request_id')->join('cs_presentations','cs_presentations.ai_presentation_id','cs_commanddatas.commanddata_ai_presentation_id')->join('cs_articles','cs_articles.ai_article_id','cs_commanddatas.commanddata_ai_article_id')->where('request_ai_user_id',$user['id'])->where('tx_request_status',4)->get() : [];
        $data = [
            'article_list' => $rs_article,
            'table_info' => $rs_table,
            'lastest' => $rs_articlelastest
        ];

        return view('request.index', compact('data'));
    }

    public function get_anuled()
    {
        return response()->json(['data' => cs_request::where('tx_request_status',0)->get()],200);
    }
    public function get_pendant()
    {
        return response()->json(['data' => cs_request::where('tx_request_status',1)->get()],200);
    }
    public function get_confirmed()
    {
        return response()->json(['data' => cs_request::where('tx_request_status',2)->get()],200);
    }
    public function get_ready()
    {
        return response()->json(['data' => cs_request::where('tx_request_status',3)->get()],200);
    }
    public function get_closed()
    {
        return response()->json(['data' => cs_request::where('tx_request_status',4)->get()],200);
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
        //
    }
    public function save($user_id, $table_id, $code, $paymentmethod, $telephone, $consumption, $time, $observation){

        $cs_request = new cs_request;

        $cs_request->request_ai_user_id = $user_id;
        $cs_request->request_ai_table_id = $table_id;
        $cs_request->tx_request_code = $code;
        $cs_request->tx_request_paymentmethod = $paymentmethod;

        $cs_request->tx_request_telephone = $telephone;
        $cs_request->tx_request_consumption = $consumption;
        $cs_request->tx_request_time =  $time;
        $cs_request->tx_request_observation =  $observation;
        $cs_request->tx_request_status = 1;

        $cs_request->tx_request_slug = time().$code;

        $cs_request->save();

        return $cs_request->ai_request_id;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        // status = 0: anulado, 1: no recibido, 2: confirmado, 3: listo, 4: cerrado
        $qry_request = cs_request::where('tx_request_slug',$slug)->where('tx_request_status',">",0);
        if ($qry_request->count() === 0) {
            // return Redirect::to('../request/new');
            return redirect() -> route('request.new');
        };
        $rs_request = $qry_request->first();

        $command_controller = new commandController;
        $rs_commanddata = $command_controller->getByRequest($rs_request['ai_request_id']);

        $data = [
            "request_info" => $rs_request,
            "commanddata" => $rs_commanddata
        ];
        return view('request.status', compact('data'));
    }
    public function json_show($slug){
        $qry_request = cs_request::where('tx_request_slug',$slug)->where('tx_request_status',">",0);
        if ($qry_request->count() === 0) {
            return response()->json(['status'=>'failed','message'=>'No existe el pedido.']);
        };
        $rs_request = $qry_request->first();

        $command_controller = new commandController;
        $rs_commanddata = $command_controller->getByRequest($rs_request['ai_request_id']);

        $data = [
            "request_info" => $rs_request,
            "commanddata" => $rs_commanddata
        ];
        return response()->json(['status'=>'success','message'=>'','data'=>$data]);
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
}
