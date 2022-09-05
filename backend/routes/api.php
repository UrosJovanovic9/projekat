<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\API\AuthController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users/{id}', [UserController::class, 'show']);
Route::get('/users', [UserController::class, 'index']);

// Route::get('/reservations',[ReservationController::class, 'index']);


Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);


// Grupne rute

Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('/profil',function(Request $request){
        return auth()->user();
    });
    Route::post('reservations',[ReservationController::class, 'store']);
    Route::resource('changeuser',UserController::class)->only(['update']);
    
    Route::post('/logout',[AuthController::class,'logout']);
}); 

// Route::get('/reservationsadmin', [ReservationController::class, 'index']);
// Route::delete('/reservationsadmin/{id}', [ReservationController::class, 'destroy']);













// Route::prefix('admin')->group(function(){
//     Route::post('/login', [AdminAuthController::class, 'login']);

//     Route::middleware('auth:sanctum')->group(function(){
//         Route::resource('/reservations',ReservationController::class)->only(['index', 'destroy']);
//         Route::post('/logout',[AdminAuthController::class,'logout']);
//     });
// });

// Route::post('/adminlogin', [AdminAuthController::class, 'login']);
// Route::group(['middleware'=>['auth:admin,api-admin']],function(){
    
//     Route::resource('adminreservations',ReservationController::class)->only(['index','destroy']);
    
//     Route::post('/adminlogout',[AdminAuthController::class,'logout']);
// }); 



require __DIR__.'/admin.php';


