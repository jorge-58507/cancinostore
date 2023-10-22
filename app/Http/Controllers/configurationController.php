<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\cs_ubication;
use App\cs_category;
use App\cs_option;
use App\cs_productcategory;
use App\cs_measure;

class configurationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if ( auth()->user()->hasAnyRole(['admin','super']) != true){ 
            return redirect() -> route('request.index');
        }

        $rs_ubication = cs_ubication::where('tx_ubication_status')->get();
        $rs_categoryList = cs_category::where('tx_category_status',1)->orderby('tx_category_value')->get();
        $articleController = new articleController;
        $rs_article = $articleController->getAll();
        $presentationController = new presentationController;
        $rs_presentation = $presentationController->getAll();
        $productController = new productController;
        $rs_product = $productController->getAll();
        $rs_productcategoryList = cs_productcategory::where('tx_productcategory_status',1)->orderby('tx_productcategory_value')->get();
        $rs_measure = cs_measure::where('tx_measure_status',1)->orderby('tx_measure_value')->get();

        $rs_option = cs_option::all();
        $raw_option = [];
        foreach ($rs_option as $key => $value) {
            $raw_option[$value['tx_option_title']] = $value['tx_option_value'];
        }

        $data = [
            'active_ubication' => $rs_ubication,
            'raw_option' => $raw_option,            
            'category_list' => $rs_categoryList,
            'presentation_list' => $rs_presentation,
            'product_list' => $rs_product,
            'productcategory_list' => $rs_productcategoryList,
            'measure_list' => $rs_measure,
            'article_list' => $rs_article
        ];
        return view('configuration.index', compact('data'));
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
}
