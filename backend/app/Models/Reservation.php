<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = ['name','status','user_id','city_id'];
    // protected $guarded = [];

    public function user()
    {
        return $this-> belongsTo(User::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

}
