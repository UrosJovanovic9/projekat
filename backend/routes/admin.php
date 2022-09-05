<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ReservationController;

Route::prefix('admin')->group(function(){
    Route::post('/login', [AdminAuthController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function(){
        Route::resource('reservations',ReservationController::class)->only(['index', 'destroy']);
        // Route::get('/reservationsadmin', [ReservationController::class, 'index']);
         Route::post('/logout',[AdminAuthController::class, 'logout']);
    });

   
});

