<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comic extends Model
{
    use HasFactory;
    protected $table = 'comics';
    protected $fillable = ['name', 'image', 'status', 'views', 'categoryId', 'authorId'];



    public function category()
    {
      return $this->belongsTo(Category::class, 'categoryId');
    }
    public function author()
    {
        return $this->belongsTo(Author::class, 'authorId');
    }
}
