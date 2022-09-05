<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'admin';

    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'id' => $this->resource->id,
            'email'=>$this->resource->email
        ];

    }
}
