<?php

use App\Models\Post;
use App\Http\Controllers\PostApiController;
use App\Http\Controllers\ComicController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AuthorController;

use App\Http\Controllers\ApiDocumentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/posts', [PostApiController::class, 'index']);

Route::post('/posts', [PostApiController::class, 'store']);

Route::put('//posts/{post}', [PostApiController::class, 'update']);

Route::post('/upload', [ApiDocumentController::class, 'upload']);

Route::delete('posts/{post}', [PostApiController::class, 'destroy']);


Route::get('/comics', [ComicController::class, 'index']);
Route::get('/comic/{id}', [ComicController::class, 'show']);


Route::post('/comics', [ComicController::class, 'store']);
Route::delete('comics/{comic}', [ComicController::class, 'destroy']);
Route::get('comics/search', [ComicController::class, 'getSearchResults']);
Route::get('comics/typeSort', [ComicController::class, 'getSortResults']);
Route::get('comics/sortByView', [ComicController::class, 'getSortFor']);
Route::get('comics/filter', [ComicController::class, 'getFilter']);
Route::get('comics/filter2', [ComicController::class, 'testfilter']);


Route::post('/comics/uploadImage', [ComicController::class, 'uploadImage']);
Route::get('/comics/{id}', [ComicController::class, 'show']);
Route::put('/comics/{comic}', [ComicController::class, 'update']);



Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);
Route::get('categories/search', [CategoryController::class, 'getSearchResults']);
Route::delete('categories/{category}', [CategoryController::class, 'destroy']);
Route::get('/categories/{id}', [CategoryController::class, 'show']);
Route::put('/categories/{category}', [CategoryController::class, 'update']);


Route::get('/authors', [AuthorController::class, 'index']);
Route::post('/authors', [AuthorController::class, 'store']);
Route::get('authors/search', [AuthorController::class, 'getSearchResults']);
Route::delete('authors/{author}', [AuthorController::class, 'destroy']);
Route::get('/authors/{id}', [AuthorController::class, 'show']);
Route::put('/authors/{author}', [AuthorController::class, 'update']);
