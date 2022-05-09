<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
   public function index(){
       $categories = Category::with('comics')->get();
       return response()->json($categories, 200);
   }

    public function getSearchResults(Request $request) {

        $data = $request->get('data');

        $search_drivers = Category::where('name', 'like', "%{$data}%")->with('comics')
            ->get();
        return Response()->json($search_drivers, 200);
    }

    public function destroy(Category $category){
        $success = $category->delete();
        return [
            'success' => $success
        ];
    }
    public function store(){
        request()->validate([
            'name' => 'required'
        ]);
        return Category::create([
            'name' => request('name')
        ]);
    }
    public function show($id){
        $comics = Category::with('comics')->get()->find($id);
        return response()->json($comics, 200);
    }
    public function update(Category $category){
        request()->validate([
            'name' => 'required'
        ]);
        $success = $category->update([
            'name' => request('name')
        ]);
        return [
            'success' => $success
        ];
    }
}
