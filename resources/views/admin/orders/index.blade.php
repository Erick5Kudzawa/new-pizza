@extends('admin.layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Заказы</div>

                    <div class="card-body">
                        <form action="{{ route('admin.orders.index') }}" method="GET" class="mb-2">
                            <span>Сортировка по статусу: </span>
                            <select name="status" class="custom-select d-inline-block w-25" onchange="submit()">
                                <option {{ request('status') == 'all' ? 'selected' : '' }} value="all">Все</option>
                                <option
                                    {{ request('status') == $orderStatuses[0] ? 'selected' : '' }} value="{{ $orderStatuses[0] }}">{{ $orderStatuses[0] }}</option>
                                <option
                                    {{ request('status') == $orderStatuses[1] ? 'selected' : '' }} value="{{ $orderStatuses[1] }}">{{ $orderStatuses[1] }}</option>
                                <option
                                    {{ request('status') == $orderStatuses[2] ? 'selected' : '' }} value="{{ $orderStatuses[2] }}">{{ $orderStatuses[2] }}</option>
                                <option
                                    {{ request('status') == $orderStatuses[3] ? 'selected' : '' }} value="{{ $orderStatuses[3] }}">{{ $orderStatuses[3] }}</option>
                                <option
                                    {{ request('status') == $orderStatuses[4] ? 'selected' : '' }} value="{{ $orderStatuses[4] }}">{{ $orderStatuses[4] }}</option>
                            </select>
                        </form>
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">№</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Email</th>
                                <th scope="col">Телефон</th>
                                <th scope="col">Обновлен</th>
                                <th style="text-align: -webkit-center" scope="col">Статус</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($orders as $order)
                                <tr>
                                    <th scope="row">{{ $order->id }}</th>
                                    <td>{{ $order->name }}</td>
                                    <td><a href="mailto:{{ $order->email }}">{{ $order->email }}</a></td>
                                    <td><a href="tel:{{ $order->phone }}">{{ $order->phone }}</a></td>
                                    <td>{{ $order->updated_at->format('d.m.Y H:i') }}</td>
                                    <td style="text-align: -webkit-center">
                                        {{ $orderStatuses[$order->status] }}
                                    </td>
                                    <td class="text-right">
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

                                        <a class="btn btn-sm btn-secondary" href="{{ route('admin.orders.show', $order) }}"><i class="fa fa-pen"></i></a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        {!! $orders->appends(Request::except('page'))->render("pagination::bootstrap-4") !!}
                    </div>
                </div>
                <div class="col-12 mt-3">
                    <a class="btn btn-light border mr-2" style="width: fit-content"
                       href="{{ route('admin.index') }}"><i class="fa fa-arrow-left"></i> Назад</a>
                </div>
            </div>
        </div>
    </div>
@endsection
