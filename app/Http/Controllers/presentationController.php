<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\cs_presentation;
use App\cs_article;

class presentationController extends Controller
{
    public function getAll()
    {
        $rs = cs_presentation::orderby('tx_presentation_value')->get();
        return $rs;
    }
    public function byArticle($article_slug)
    {
        $rs_article = cs_article::where('tx_article_slug',$article_slug)->first();
        $rs = cs_presentation::join('rel_article_presentations','cs_presentations.ai_presentation_id','=','rel_article_presentations.article_presentation_ai_presentation_id')
        ->join('cs_articles','cs_articles.ai_article_id','=','rel_article_presentations.article_presentation_ai_article_id')
        ->where('cs_articles.ai_article_id',$rs_article['ai_article_id'])->orderby('tx_presentation_value','ASC')->get();
        return $rs;
    }
    public function showByArticle($article_slug)
    {
        $rs = $this->byArticle($article_slug);
        return response()->json(['status'=>'success','data'=>['presentation'=>$rs]]);
    }
    

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
