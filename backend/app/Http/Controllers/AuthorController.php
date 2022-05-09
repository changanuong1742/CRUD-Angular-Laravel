<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthorController extends Controller
{
    public function index(){
        $authors = Author::with('comics')->get();
        return response()->json($authors, 200);
    }

    public function getSearchResults(Request $request) {

        $data = $request->get('data');

        $search_drivers = Author::where('name', 'like', "%{$data}%")->with('comics')
            ->get();
        return Response()->json($search_drivers, 200);
    }
    public function destroy(Author $author){
        $success = $author->delete();
        return [
            'success' => $success
        ];
    }
    public function store(){
        request()->validate([
            'name' => 'required'
        ]);
        return Author::create([
            'name' => request('name')
        ]);
    }
    public function show($id){
        $comics = Author::with('comics')->get()->find($id);
        return response()->json($comics, 200);
    }
    public function update(Author $author){
        request()->validate([
            'name' => 'required'
        ]);
        $success = $author->update([
            'name' => request('name')
        ]);
        return [
            'success' => $success
        ];
    }

}
