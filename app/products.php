<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    protected $fillable = [
        'id', 'name', 'price', 'size', 'color', 'status', 'product_status', 'primary_img', 'secondary_img', 'description'
    ];
}
