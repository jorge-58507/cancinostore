<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\cs_ubication;
use App\cs_table;

class ubicationController extends Controller
{
    public function getAll(){
        $rs_ubication = cs_ubication::all();
        $rs_active = cs_ubication::where('tx_ubication_status',1)->get();
        $rs_inactive = cs_ubication::where('tx_ubication_status',0)->get();
        return [ 'all' => $rs_ubication, 'active' => $rs_active, 'inactive' => $rs_inactive ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rs_ubication = $this->getAll();
        return response()->json(['status'=>'success','data'=>['all'=>$rs_ubication['all'], 'active' => $rs_ubication['active'], 'inactive' => $rs_ubication['inactive']]]);
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
        $cs_ubication = new cs_ubication;
        $description = $request->input('a');
        $prefix = $request->input('b');

        $check_dup = $cs_ubication->where('tx_ubication_value',$description)->orwhere('tx_ubication_prefix',$prefix)->count();
        if ($check_dup > 0) {
            return response()->json(['status'=>'failed','message'=>'Esta sala ya existe.']);
        }else{
            $cs_ubication->tx_ubication_value = $description;
            $cs_ubication->tx_ubication_prefix = $prefix;
            $cs_ubication->tx_ubication_status = 1;
            $cs_ubication->save();
    
            //answer
            $rs_ubication = $this->getAll();
            return response()->json(['status'=>'success','message'=>'Guardado Correctamente','data'=>['all'=>$rs_ubication['all'], 'active' => $rs_ubication['active'], 'inactive' => $rs_ubication['inactive']]]);
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
        $rs_ubication = cs_ubication::where('ai_ubication_id',$id)->first();
        $rs_table = cs_table::where('table_ai_ubication_id',$id)->get();

        return response()->json(['status'=>'sucsess','data'=>['ubication'=>$rs_ubication, 'table'=>$rs_table]]);
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
        $cs_ubication = new cs_ubication;

        $check_dup = $cs_ubication->where('tx_ubication_value',$request->input('a'))->where('ai_ubication_id','!=',$id)->orwhere('tx_ubication_prefix',$request->input('b'))->where('ai_ubication_id','!=',$id)->count();
        if ($check_dup > 0) {
            return response()->json(['status'=>'failed','message'=>'Verifique los datos ingresados.']);
        }else{
            $qry_ubication = $cs_ubication->where('ai_ubication_id',$id);
            if ($qry_ubication->count() > 0) {
                $qry_ubication->update([
                    'tx_ubication_value'  =>$request->input('a'),
                    'tx_ubication_prefix'  =>$request->input('b'),
                    'tx_ubication_status'  =>$request->input('c')
                ]);
            }
            // ANSWER
            $rs_ubication = $this->getAll();
            return response()->json(['status'=>'success','message'=>'Guardado Correctamente', 'data'=>['ubicationList'=>$rs_ubication['all'], 'active' => $rs_ubication['active'], 'inactive' => $rs_ubication['inactive']]]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $check_table = cs_table::where('table_ai_ubication_id',$id)->count();
        if ($check_table < 1) {
            cs_ubication::where('ai_ubication_id',$id)->delete();
            $status = 'success';
            $message = 'Sala eliminada';
        }else{
            $qry_ubication = cs_ubication::where('ai_ubication_id',$id);
            if ($qry_ubication->count() > 0) {
                $qry_ubication->update([
                    'tx_ubication_status'  => 0
                ]);
            }
            $status = 'success';
            $message = 'Sala desactivada.';
        }
        // ANSWER
        $rs_ubication = $this->getAll();
        return response()->json(['status'=>$status,'message'=>$message, 'data'=>['ubicationList'=>$rs_ubication['all'], 'active' => $rs_ubication['active'], 'inactive' => $rs_ubication['inactive']]]);
    }

    public function getPrefix($prefix){
        $count_ubication = cs_ubication::where('tx_ubication_prefix',$prefix)->count();
        return response()->json(['status'=>'success','message'=>'Debe cambiar el prefijo.', 'data'=>['count'=>$count_ubication]]);
    }

}
