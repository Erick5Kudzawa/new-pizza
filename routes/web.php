<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Auth::routes(['register' => false]);

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/success', function () {
    return view('success');
})->name('success');

Route::prefix('orders')->name('orders.')->group(function () {
    Route::get('/create', [OrderController::class, 'create'])->name('create');
});

Route::middleware('auth')->prefix('admin')->name('admin.')
    ->group(base_path('routes\web\admin.php'));
