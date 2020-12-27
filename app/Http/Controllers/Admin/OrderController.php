<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(Request $request)
    {
        $orders = Order::status($request->status)->orderByDesc('id')->paginate(30);
        $orderStatuses = Order::getDictionary();

        return view('admin.orders.index', compact('orders', 'orderStatuses'));
    }

    public function show(Order $order)
    {
        $orderStatuses = Order::getDictionary();

        return view('admin.orders.show', compact('order', 'orderStatuses'));
    }

    public function preparing(Order $order)
    {
        $order->update(['status' => Order::PREPARING]);

        return back();
    }

    public function readyToShip(Order $order)
    {
        $order->update(['status' => Order::READY_TO_SHIP]);

        return back();
    }

    public function cancelled(Order $order)
    {
        $order->update(['status' => Order::CANCELED]);

        return back();
    }

    public function sent(Order $order)
    {
        $order->update(['status' => Order::SENT]);

        return back();
    }
}
