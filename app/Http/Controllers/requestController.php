<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\cs_article;
use App\cs_table;
use App\cs_request;
use App\cs_localrequest;
use App\cs_localcommanddata;
use App\cs_price;

class requestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($table_slug = '')
    {
        $rs_article = cs_article::select('cs_articles.ai_article_id','cs_articles.tx_article_thumbnail','cs_articles.tx_article_code', 'cs_articles.tx_article_value', 'cs_articles.tx_article_description', 'cs_articles.tx_article_promotion','cs_articles.tx_article_slug','cs_categories.ai_category_id','cs_categories.tx_category_value')
        ->addSelect(['tx_price_three' => cs_price::select(DB::raw('cs_prices.tx_price_three'))
            ->whereColumn('price_ai_article_id', 'cs_articles.ai_article_id')
            ->orderby('cs_prices.created_at','DESC')->limit(1)
        ])
        ->join('cs_categories','cs_categories.ai_category_id','cs_articles.article_ai_category_id')->where('tx_article_status',1)->orderby('tx_article_promotion','DESC')->orderby('tx_article_value','ASC')->get();

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

        $rs_articlelastest = (!empty($user['id'])) ? $rs_articlelastest = cs_request::select('cs_commanddatas.ai_commanddata_id', 'cs_commanddatas.tx_commanddata_quantity', 'cs_commanddatas.tx_commanddata_description', 'cs_commanddatas.tx_commanddata_price', 'cs_commanddatas.tx_commanddata_taxrate', 'cs_commanddatas.tx_commanddata_discountrate', 'cs_commanddatas.tx_commanddata_option', 'cs_commanddatas.commanddata_ai_presentation_id','cs_presentations.tx_presentation_value', 'cs_articles.tx_article_thumbnail','cs_articles.tx_article_slug','cs_articles.tx_article_value','cs_articles.ai_article_id','cs_articles.tx_article_description')->join('cs_commanddatas','cs_commanddatas.commanddata_ai_request_id','cs_requests.ai_request_id')->join('cs_presentations','cs_presentations.ai_presentation_id','cs_commanddatas.commanddata_ai_presentation_id')->join('cs_articles','cs_articles.ai_article_id','cs_commanddatas.commanddata_ai_article_id')->where('request_ai_user_id',$user['id'])->where('tx_request_status',4)->get() : [];
        $data = [
            'article_list' => $rs_article,
            'table_info' => $rs_table,
            'lastest' => $rs_articlelastest
        ];

        return view('request.index', compact('data'));
    }

    public function get_anuled($limit)
    {
        return response()->json(['status' => 'success', 'data' => cs_request::select('users.name as tx_client_name','users.name as tx_request_title','cs_tables.tx_table_value','cs_requests.tx_request_status','cs_requests.tx_request_code','cs_requests.tx_request_paymentmethod','cs_requests.tx_request_telephone','cs_requests.tx_request_consumption','cs_requests.tx_request_time','cs_requests.tx_request_observation','cs_requests.created_at','cs_requests.updated_at','cs_requests.tx_request_slug')->leftjoin('cs_tables','cs_tables.ai_table_id','cs_requests.request_ai_table_id')->join('users','users.id','cs_requests.request_ai_user_id')->where('tx_request_status',0)->orderby('cs_requests.created_at')->get()],200);
    }
    public function get_pendant()
    {
        return response()->json(['status' => 'success', 'data' => cs_request::select('users.name as tx_client_name','users.name as tx_request_title','cs_tables.tx_table_value','cs_requests.tx_request_status','cs_requests.tx_request_code','cs_requests.tx_request_paymentmethod','cs_requests.tx_request_telephone','cs_requests.tx_request_consumption','cs_requests.tx_request_time','cs_requests.tx_request_observation','cs_requests.created_at','cs_requests.updated_at','cs_requests.tx_request_slug')->leftjoin('cs_tables','cs_tables.ai_table_id','cs_requests.request_ai_table_id')->join('users','users.id','cs_requests.request_ai_user_id')->where('tx_request_status',1)->orderby('cs_requests.created_at')->get()],200);
    }
    public function get_confirmed()
    {
        return response()->json(['status' => 'success', 'data' => cs_request::select('users.name as tx_client_name','users.name as tx_request_title','cs_tables.tx_table_value','cs_requests.tx_request_status','cs_requests.tx_request_code','cs_requests.tx_request_paymentmethod','cs_requests.tx_request_telephone','cs_requests.tx_request_consumption','cs_requests.tx_request_time','cs_requests.tx_request_observation','cs_requests.created_at','cs_requests.updated_at','cs_requests.tx_request_slug')->leftjoin('cs_tables','cs_tables.ai_table_id','cs_requests.request_ai_table_id')->join('users','users.id','cs_requests.request_ai_user_id')->where('tx_request_status',2)->orderby('cs_requests.created_at')->get()],200);
    }
    public function get_ready()
    {
        return response()->json(['status' => 'success', 'data' => cs_request::select('users.name as tx_client_name','users.name as tx_request_title','cs_tables.tx_table_value','cs_requests.tx_request_status','cs_requests.tx_request_code','cs_requests.tx_request_paymentmethod','cs_requests.tx_request_telephone','cs_requests.tx_request_consumption','cs_requests.tx_request_time','cs_requests.tx_request_observation','cs_requests.created_at','cs_requests.updated_at','cs_requests.tx_request_slug')->leftjoin('cs_tables','cs_tables.ai_table_id','cs_requests.request_ai_table_id')->join('users','users.id','cs_requests.request_ai_user_id')->where('tx_request_status',3)->orderby('cs_requests.created_at')->get()],200);
    }
    public function get_closed($limit)
    {
        return response()->json(['status' => 'success', 'data' => cs_request::select('users.name as tx_client_name','users.name as tx_request_title','cs_tables.tx_table_value','cs_requests.tx_request_status','cs_requests.tx_request_code','cs_requests.tx_request_paymentmethod','cs_requests.tx_request_telephone','cs_requests.tx_request_consumption','cs_requests.tx_request_time','cs_requests.tx_request_observation','cs_requests.created_at','cs_requests.updated_at','cs_requests.tx_request_slug')->leftjoin('cs_tables','cs_tables.ai_table_id','cs_requests.request_ai_table_id')->join('users','users.id','cs_requests.request_ai_user_id')->where('tx_request_status',4)->orderby('cs_requests.created_at')->get()],200);
    }
    public function get_all($limit)
    {
        return response()->json(['status' => 'success', 'data' => cs_request::select('users.name as tx_client_name','users.name as tx_request_title','cs_tables.tx_table_value','cs_requests.tx_request_status','cs_requests.tx_request_code','cs_requests.tx_request_paymentmethod','cs_requests.tx_request_telephone','cs_requests.tx_request_consumption','cs_requests.tx_request_time','cs_requests.tx_request_observation','cs_requests.created_at','cs_requests.updated_at','cs_requests.tx_request_slug')->leftjoin('cs_tables','cs_tables.ai_table_id','cs_requests.request_ai_table_id')->join('users','users.id','cs_requests.request_ai_user_id')->orderby('cs_requests.created_at')->get()],200);
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
        $qry_request = cs_request::where('tx_request_slug',$slug);
        if ($qry_request->count() === 0) {
            return response()->json(['status'=>'failed','message'=>'No existe el pedido.']);
        };
        $rs_request = $qry_request->first();

        $rs_requestapi = cs_request::select('cs_tables.tx_table_value','users.name','cs_requests.ai_request_id','cs_requests.request_ai_table_id','cs_requests.request_ai_user_id','cs_requests.request_ai_charge_id','cs_requests.tx_request_code','cs_requests.tx_request_paymentmethod','cs_requests.tx_request_telephone','cs_requests.tx_request_consumption','cs_requests.tx_request_time','cs_requests.tx_request_observation','cs_requests.tx_request_status','cs_requests.tx_request_closedby','cs_requests.tx_request_slug','cs_requests.created_at','cs_requests.updated_at')->leftjoin('cs_tables','cs_tables.ai_table_id','cs_requests.request_ai_table_id')->join('users','users.id','cs_requests.request_ai_user_id')->where('tx_request_slug',$slug)->first();
        $rs_localrequest = cs_localrequest::join('cs_localcommanddatas','cs_localcommanddatas.localcommanddata_ai_localrequest_id','cs_localrequests.ai_localrequest_id')->where('localrequest_ai_request_id',$rs_request['ai_request_id'])->get();

        $command_controller = new commandController;
        $rs_commanddata = $command_controller->getByRequest($rs_request['ai_request_id']);

        $data = [
            "request_info" => $rs_request,
            "request_api" => $rs_requestapi,
            "localrequest" => $rs_localrequest,
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
    public function next_status($slug)
    {
        $qry_request = cs_request::where('tx_request_slug',$slug);
        if ($qry_request->count() === 0) {
            return response()->json(['status'=>'failed','message'=>'No existe el pedido.']);
        };
        $rs_request = $qry_request->first();
        $status = $rs_request['tx_request_status'] + 1;
        $qry_request->update(['tx_request_status' => $status]);

        return response()->json(['status'=>'success','message'=>'', 'data' => ['all' => $this->get_all(20), 'request_info' => cs_request::where('tx_request_slug',$slug)->first()]]);
    }

    public function confirm(Request $request, $request_slug){
        $qry_request = cs_request::where('tx_request_slug',$request_slug);
        if ($qry_request->count() === 0) {
            return response()->json(['status'=>'failed','message'=>'No existe el pedido.'],400);
        };
        $qry_request->update(['tx_request_closedby' => $request->input('a'), 'tx_request_status' => 2]);
        $rs_request = $qry_request->first();

        $localrequest = $request->input('b');
        $localrequest_info = $localrequest['request'];
        $local_commanddata = $localrequest['command_procesed'];
        
        $this->save_localrequest($rs_request['ai_request_id'], $localrequest_info, $local_commanddata);

        return response()->json(['status'=>'success','message'=>''],200);
    }

    public function save_localrequest($request_id, $localrequest_info, $local_commanddata){
        cs_localrequest::join('cs_localcommanddatas','cs_localcommanddatas.localcommanddata_ai_localrequest_id','cs_localrequests.ai_localrequest_id')->where('localrequest_ai_request_id',$request_id)->delete();

        $model_localrequest = new cs_localrequest;
        $model_localrequest->localrequest_ai_table_id = $localrequest_info['request_ai_table_id'];
        $model_localrequest->localrequest_ai_request_id = $request_id;
        $model_localrequest->tx_localrequest_code = $localrequest_info['tx_request_code'];
        $model_localrequest->tx_localrequest_title = $localrequest_info['tx_request_title'];
        $model_localrequest->tx_localrequest_slug = $localrequest_info['tx_request_slug'];
        $model_localrequest->save();

        foreach ($local_commanddata as $key => $value) {
            $model_localcommanddata = new cs_localcommanddata;
            $model_localcommanddata->localcommanddata_ai_user_id            = $value['command_ai_user_id'];
            $model_localcommanddata->localcommanddata_ai_localrequest_id    = $model_localrequest->ai_localrequest_id;
            $model_localcommanddata->localcommanddata_ai_presentation_id    = $value['commanddata_ai_presentation_id'];
            $model_localcommanddata->localcommanddata_ai_article_id         = $value['commanddata_ai_article_id'];
            $model_localcommanddata->tx_localcommanddata_quantity           = $value['tx_commanddata_quantity'];
            $model_localcommanddata->tx_localcommanddata_price              = $value['tx_commanddata_price'];
            $model_localcommanddata->tx_localcommanddata_taxrate            = $value['tx_commanddata_taxrate'];
            $model_localcommanddata->tx_localcommanddata_discountrate       = $value['tx_commanddata_discountrate'];
            $model_localcommanddata->tx_localcommanddata_description        = $value['tx_commanddata_description'];
            $model_localcommanddata->tx_localcommanddata_presentation       = $value['tx_presentation_value'];
            $model_localcommanddata->tx_localcommanddata_option             = (!empty($value['tx_commanddata_option'])) ? $value['tx_commanddata_option'] : '';
            $model_localcommanddata->tx_localcommanddata_recipe             = $value['tx_commanddata_recipe'];

            $model_localcommanddata->save();
        }
    }

    public function closeit($request_slug){
        $qry_request = cs_request::where('tx_request_slug',$request_slug);
        if ($qry_request->count() === 0) {
            return response()->json(['status'=>'failed','message'=>'No existe el pedido.'],400);
        };
        $qry_request->update(['tx_request_status' => 0]);

        return response()->json(['status'=>'success','message'=>'Pedido cerrado.'],200);
    }
}
