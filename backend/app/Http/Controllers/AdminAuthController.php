<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Administrator;

class AdminAuthController extends Controller
{
    public function login(Request $request){

        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required|string'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors('Neispravna validacija administratora'));
        }

        if(!Auth::guard('admin')->attempt($request->only('email','password'))){
            // return response()->json(['success'=> false]);
            abort(404, "Administrator ne postoji!");
        }

        $admin = Administrator::where('email',$request['email'])->first();
        $token = $admin->createToken('admin_auth_token')->plainTextToken;

        return response()->json([
            'admin'=>$admin,
            'token'=>$token
        ],200);

    }

    public function logout(){

        auth()->user()->tokens()->delete();
        return ['poruka'=>"Uspesno ste se odjavili (administrator)"]; 

    }
}
