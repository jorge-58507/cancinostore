<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\cs_table;
use App\cs_ubication;
use App\cs_request;

use Illuminate\Support\Facades\Validator;

class tableController extends Controller
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
        $description = trim($request->input('tableValue'));
        $code = trim($request->input('tableCode'));
        $type = $request->input('tableType');
        $ubication_id = $request->input('tableUbication');

        $check_code = cs_table::where('tx_table_code',$code)->count();
        if ($check_code > 0) {
            return response()->json(['status'=>'failed','message'=>'El c&oacute;digo ya existe.']);
        }
        if ($request->hasFile('tableImage')) {
            $validator = Validator::make($request->all(),['tableImage' => 'mimes:jpg,png,jpeg,gif,svg|max:2048|dimensions:min_width=100,min_height=100,max_width=1000,max_height=1000']);
            if ($validator->fails()) {  return response()->json(['status'=>'fail', 'message'=>'La imagen no tiene el formato adecuado.']); }
            $avatar = $request->file('tableImage');
            $filename = time().$avatar->getClientOriginalName();      
            $avatar->move(public_path().'/attached/image/table/',$filename);
        }else{
            $filename = '';
        }
            // return response()->json(['status'=>'failed','message'=>'nombre: '.$filename]);

        $cs_table = new cs_table;
        $cs_table->table_ai_ubication_id = $ubication_id;
        $cs_table->tx_table_value = $description;
        $cs_table->tx_table_code = $code;
        $cs_table->tx_table_type = $type;
        $cs_table->tx_table_image = $filename;
        $cs_table->tx_table_slug = time().str_replace(" ","",$description);
        $cs_table->save();


        //ANSWER
        $rs_ubication = cs_ubication::where('ai_ubication_id',$ubication_id)->first();
        $rs_table = cs_table::where('table_ai_ubication_id',$ubication_id)->get();

        return response()->json(['status'=>'success','message'=>'Guardado correctamente.', 'data'=>['ubication'=>$rs_ubication, 'table'=>$rs_table]]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $rs_table = cs_table::where('tx_table_slug',$slug)->first();

        return response()->json(['status'=>'success','data'=>['table'=>$rs_table]]);
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

    public function renovate(Request $request)
    {
        $cs_table = new cs_table;
        $value = $request->input('tableValue');
        $code = $request->input('tableCode');
        $status = ($request->input('tableStatus') === 'on') ? 1 : 0;
        $id = $request->input('tableId');
        $imagePlaceholder = $request->input('tableImagePlaceholder');

        $check_code = cs_table::where('tx_table_code',$code)->where('ai_table_id','!=',$id)->count();
        if ($check_code > 0) {
            return response()->json(['status'=>'failed','message'=>'El c&oacute;digo ya existe.']);
        }

        if ($request->hasFile('tableImage')) {
            $validator = Validator::make($request->all(),['tableImage' => 'mimes:jpg,png,jpeg,gif,svg|max:2048|dimensions:min_width=100,min_height=100,max_width=1000,max_height=1000']);
            if ($validator->fails()) {  return response()->json(['status'=>'fail', 'message'=>'La imagen no tiene el formato adecuado.']); }
            $avatar = $request->file('tableImage');
            $filename = time().$avatar->getClientOriginalName();      
            $avatar->move(public_path().'/attached/image/table/',$filename);
        }else{
            $filename = $imagePlaceholder;
        }

        $qry_table = $cs_table->where('ai_table_id',$id);
        if ($qry_table->count() < 1) {
            return response()->json(['status'=>'failed','message'=>'Verifique la información ingresada.']);
        }else{
            $qry_table->update([
                'tx_table_value' => $value,
                'tx_table_code' => $code,
                'tx_table_active' => $status,
                'tx_table_image' => $filename
            ]);
        }

        // ANSWER
        $table = $qry_table->first();
        $rs_ubication = cs_ubication::where('ai_ubication_id',$table['table_ai_ubication_id'])->first();
        $rs_table = cs_table::where('table_ai_ubication_id',$table['table_ai_ubication_id'])->get();

        return response()->json(['status'=>'success','message'=>'Guardado correctamente.', 'data'=>['ubication'=>$rs_ubication, 'table'=>$rs_table]]);
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
        $cs_table = new cs_table;

        return response()->json(['status'=>'failed','message'=>'AQUI VA '.$request->input('tableCode')]);
        $value = $request->input('tableValue');
        $code = $request->input('tableCode');
        $status = $request->input('tableStatus');

        $check_code = cs_table::where('tx_table_code',$code)->where('ai_table_id','!=',$id)->count();
        if ($check_code > 0) {
            return response()->json(['status'=>'failed','message'=>'El c&oacute;digo ya existe.']);
        }

        $qry_table = $cs_table->where('ai_table_id',$id);
        if ($qry_table->count() < 1) {
            return response()->json(['status'=>'failed','message'=>'Verifique la información ingresada.']);
        }else{
            $qry_table->update([
                'tx_table_value' => $value,
                'tx_table_code' => $code,
                'tx_table_active' => $status
            ]);
        }

        // ANSWER
        $table = $qry_table->first();
        $rs_ubication = cs_ubication::where('ai_ubication_id',$table['table_ai_ubication_id'])->first();
        $rs_table = cs_table::where('table_ai_ubication_id',$table['table_ai_ubication_id'])->get();

        return response()->json(['status'=>'success','message'=>'Guardado correctamente.', 'data'=>['ubication'=>$rs_ubication, 'table'=>$rs_table]]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $rs_table = cs_table::where('ai_table_id',$id)->first();
        $check_request = cs_request::where('request_ai_table_id',$id)->count();
        if ($check_request < 1) {
            cs_table::where('ai_table_id',$id)->delete();
            $status = 'success';
            $message = 'Mesa eliminada';
        }else{
            $qry_table = cs_table::where('ai_table_id',$id);
            if ($qry_table->count() > 0) {
                $qry_table->update([
                    'tx_table_active'  => 0
                ]);
            }
            $status = 'success';
            $message = 'Mesa desactivada.';
        }
        // ANSWER
        $rs_ubication = cs_ubication::where('ai_ubication_id',$rs_table['table_ai_ubication_id'])->first();
        $rs_table = cs_table::where('table_ai_ubication_id',$rs_table['table_ai_ubication_id'])->get();

        return response()->json(['status'=>$status,'message'=>$message, 'data'=>['ubication'=>$rs_ubication, 'table'=>$rs_table]]);
    }
}
