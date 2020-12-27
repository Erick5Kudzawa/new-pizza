<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;

class OrderController extends Controller
{
    public function create(OrderRequest $request)
    {
        Order::create($request->all());

        return redirect('/success');
    }
}
