<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Category;
use App\Models\Comic;
use App\Models\Employee;
use App\Models\Post;
use Illuminate\Http\Request;

class ComicController extends Controller
{
    public function index()
    {
        $comics = Comic::with('category', 'author')->get();
        return response()->json($comics, 200);
    }

    public function show($id)
    {
        $comics = Comic::with('category', 'author')->get()->find($id);
        return response()->json($comics, 200);
    }

    public function store(Request $request)
    {
//        //check file
//        if ($request->hasFile('image'))
//        {
//            $file      = $request->file('image');
//            $filename  = $file->getClientOriginalName();
//            $extension = $file->getClientOriginalExtension();
//            $picture   = date('His').'-'.$filename;
//            //move image to public/img folder
//            $file->move(public_path('img'), $picture);
//        }
//        return Comic::create([
//            'name' => request('name'),
//            'image' => $picture,
//            'status' => request('status'),
//            'views' => request('views'),
//            'categoryId' => request('categoryId'),
//            'authorId' => request('authorId'),
//            ]);
//        $file = $request->file('image');
//        $uploadPath = "public/image";
//        $originalImage = $file->getClientOriginalName();
//        $file->move($uploadPath, $originalImage);
//        $comicData = json_decode($request->data,true);
//        return Comic::create([
//            'name' => request('name'),
//            'image' => $originalImage,
//            'status' => request('status'),
//            'views' => request('views'),
//            'categoryId' => request('categoryId'),
//            'authorId' => request('authorId'),
//            ]);

        return Comic::create([
            'name' => request('name'),
            'image' => request('image'),
            'status' => request('status'),
            'views' => request('views'),
            'categoryId' => request('categoryId'),
            'authorId' => request('authorId'),
        ]);

    }

    public function uploadImage(Request $request)
    {
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture = date('His') . '-' . $filename;
            $file->move(public_path('img'), $picture);
            return Response()->json('http://localhost:8000/img/' . $picture, 200);
        } else {
            return response()->json(["message" => "Select image first."]);
        }
    }

        public function destroy(Comic $comic)
        {
            $success = $comic->delete();
            return [
                'success' => $success
            ];
        }

        public
        function getSearchResults(Request $request)
        {

            $data = $request->get('data');

            $search_drivers = Comic::where('name', 'like', "%{$data}%")->with('category', 'author')
                ->get();
            return Response()->json($search_drivers, 200);
        }

    public function getSortResults(Request $request)
    {
        $typeSort = $request->get('typeSort');

        $search_drivers = Comic::orderBy('views',"{$typeSort}")->with('category', 'author')
            ->get();
        return Response()->json($search_drivers, 200);

    }
    public function getSortFor(Request $request)
    {

        $view1 = $request->get('view1');
        $view2 = $request->get('view2');

        $search_drivers = Comic::where('views','>=', "{$view1}")->where('views', '<=', "{$view2}")->with('category', 'author')
            ->get();
        return Response()->json($search_drivers, 200);
    }

    public function getFilter(Request $request)
    {

        $view1 = $request->get('view1');
        $view2 = $request->get('view2');
        $dataSearch = $request->get('dataSearch');
        $orderByView = $request->get('orderByView');
        $categoryId = $request->get('categoryId');
        $authorId = $request->get('authorId');


        $search_drivers = Comic::where('name', 'like', "%{$dataSearch}%")->where('views', '<=', "{$view2}")->orderBy('views',"{$orderByView}")->with('category', 'author')
            ->get();

        return Response()->json($search_drivers, 200);
    }

    public function testfilter(Request $request){
        $dataSearch = $request->get('dataSearch');
        $view2 = $request->get('view2');
        $orderByView = $request->get('orderByView');

        if (isset($dataSearch)){
            $search_drivers = Comic::where('name', 'like', "%{$dataSearch}%")->with('category', 'author')
                ->get();
        } elseif (isset($view2)){
            $search_drivers = Comic::where('name', 'like', "%{$dataSearch}%")->where('views', '<=', "{$view2}")->with('category', 'author')
                ->get();
        } elseif (isset($orderByView)){
            $search_drivers = Comic::where('name', 'like', "%{$dataSearch}%")->orderBy('views',"{$orderByView}")->with('category', 'author')
                ->get();
        } else{
            $search_drivers = Comic::all()->with('category', 'author')
                ->get();
        }
        return Response()->json($search_drivers, 200);

    }

    public function update(Comic $comic){
        $success = $comic->update([
            'name' => request('name'),
            'image' => request('image'),
            'status' => request('status'),
            'views' => request('views'),
            'categoryId' => request('categoryId'),
            'authorId' => request('authorId'),
            ]);
        return [
            'success' => $success
        ];
    }

    }

