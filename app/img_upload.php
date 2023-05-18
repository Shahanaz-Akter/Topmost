<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class img_upload extends Model
{
    protected $fillable = [
        'product_name', 'price', 'image', 'product_description',
    ];
}
