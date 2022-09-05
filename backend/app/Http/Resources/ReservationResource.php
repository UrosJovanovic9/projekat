<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserResource;
use App\Http\Resources\CityResource;

class ReservationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

     public static $wrap = 'reservation';

    public function toArray($request)
    {
        // return parent::toArray($request);

        return[
            'id'=>$this->resource->id,
            'name'=>$this->resource->name,
            'status'=>$this->resource->status,
            'user'=>new UserResource($this->resource->user),
            'city'=>new CityResource($this->resource->city)
        ];

    }
}
