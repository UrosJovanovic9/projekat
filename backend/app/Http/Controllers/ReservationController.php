<?php

namespace App\Http\Controllers;
use App\Exceptions;

use App\Models\Reservation;
use Illuminate\Http\Request;

use App\Http\Resources\ReservationResource;
use App\Http\Resources\ReservationCollection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $reservations = Reservation::all();

        // return response()->json(['Prikaz svih rezervacija: ', ReservationResource::collection($reservations)]);

        return new ReservationCollection($reservations);

        // return $reservations;
            
        }catch(Exception $e){
            return response() -> json([
                'errors'=>$e->getMessage()
            ],500);
        }


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:50',
            'status'=> 'string|max:50',
            'user_id'=>'required',
            'city_id'=>'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors("Greskaaa"));
            abort(404, "Greska prilikom dodavanja rezervacija!");
        }

        $reservation = Reservation::create([
            'name'=> $request->name,
            'status'=> $request->status,
            'user_id'=> Auth::user()->id,
            'city_id'=> $request->city_id
        ]);

        return response () ->json(['Rezervacija je uspesno kreirana', new ReservationResource($reservation)]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reservation $reservation)
    {
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:50',
            'status'=> 'string|max:50',
            'user_id'=>'required',
            'city_id'=>'required'
        ]);

        if($validator->fails()){
            return response() -> json($validator->errors());
        }

        $reservation->name = $request->name;
        $reservation->status = $request->status;
        $reservation->user_id = $request->user_id;
        $reservation->city_id = $request->city_id;

        $reservation->save();

        return response ()-> json(['Rezervacija je uspesno promenjena', new ReservationResource($reservation)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $reservation)
    {

        try{
            $reservation->delete();

        return response()->json('Rezervacija je uspesno obrisana!');
        }catch(Exception $e){
            return response() -> json([
                'errors'=>$e->getMessage()
            ],500);
        }
        
    }
}
