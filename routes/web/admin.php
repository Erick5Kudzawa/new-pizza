<?php

use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PageController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Admin Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [PageController::class, 'index'])->name('index');

Route::prefix('orders')->name('orders.')->group(function () {
    Route::get('/', [OrderController::class, 'index'])->name('index');

    Route::prefix('{order}')->group(function () {
        Route::get('/show', [OrderController::class, 'show'])->name('show');
        Route::get('/preparing', [OrderController::class, 'preparing'])->name('preparing');
        Route::get('/readyToShip', [OrderController::class, 'readyToShip'])->name('readyToShip');
        Route::get('/cancelled', [OrderController::class, 'cancelled'])->name('cancelled');
        Route::get('/sent', [OrderController::class, 'sent'])->name('sent');
    });
});

Auth::routes(['register' => false]);
