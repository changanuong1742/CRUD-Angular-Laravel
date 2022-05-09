<?php

namespace App\Http\Controllers;
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiDocumentController extends Controller
{
    function upload(Request $request){
        $result = $request->file('file')->store('apiDocs');
        return ['result' => $result];
    }

    function long1(){
        return ['result' => 'pass'];
    }
}
