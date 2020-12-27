@extends('admin.layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Заказ <i>№{{ $order->id }}</i>
                        <div class="d-inline float-md-right">
                            <span>Статус:</span>
                            {{ $orderStatuses[$order->status] }}

                            @if($order->status == 0)
                                <a class="btn btn-sm btn-success" href="{{ route('admin.orders.preparing', $order) }}"><i class="fas fa-clipboard"></i></a>
                                <a class="btn btn-sm btn-danger" href="{{ route('admin.orders.cancelled', $order) }}"><i class="fa fa-times"></i></a>
                            @elseif($order->status == 1)
                                <a class="btn btn-sm btn-success" href="{{ route('admin.orders.readyToShip', $order) }}"><i class="fa fa-clipboard-check"></i></a>
                                <a class="btn btn-sm btn-danger" href="{{ route('admin.orders.cancelled', $order) }}"><i class="fa fa-times"></i></a>
                            @elseif($order->status == 2)
                                <a class="btn btn-sm btn-success" href="{{ route('admin.orders.sent', $order) }}"><i class="fas fa-shipping-fast"></i></a>
                                <a class="btn btn-sm btn-danger" href="{{ route('admin.orders.cancelled', $order) }}"><i class="fa fa-times"></i></a>
                            @endif
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="form-group row">
                            <label for="name" class="col-md-3 col-form-label text-md-right">Имя</label>
                            <div class="col-md-7">
                                <input id="name" type="text" class="form-control" name="name"
                                       value="{{ $order->name }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="email" class="col-md-3 col-form-label text-md-right">Email</label>
                            <div class="col-md-7">
                                <a href="mailto:{{ $order->email }}">
                                    <input id="email" type="email" class="form-control" style="cursor: pointer"
                                           name="email" value="{{ $order->email }}">
                                </a>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="subject" class="col-md-3 col-form-label text-md-right">Телефон</label>

                            <div class="col-md-7">
                                <input id="subject" type="phone" class="form-control" name="phone"
                                       value="{{ $order->phone }}">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="created_at" class="col-md-3 col-form-label text-md-right">Обновлено</label>

                            <div class="col-md-7">
                                <input id="created_at" type="created_at" class="form-control" name="created_at"
                                       value="{{ $order->created_at->format('d.m.Y H:i') }}">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-3">
                    <a class="btn btn btn-light border mr-2" style="width: fit-content"
                       href="{{ route('admin.orders.index') }}"><i class="fa fa-arrow-left"></i> Назад</a>
                </div>
            </div>
        </div>
    </div>
@endsection
