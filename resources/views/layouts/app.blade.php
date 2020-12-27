<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/jquery.js') }}" defer></script>
    <script src="{{ asset('js/chart.min.js') }}" defer></script>
    <script src="{{ asset('js/ion.rangeSlider.min.js') }}" defer></script>
    <script src="{{ asset('js/lazyload.min.js') }}" defer></script>
    <script src="{{ asset('js/mask.min.js') }}" defer></script>
    <script src="{{ asset('js/script.js') }}" defer></script>
    <script src="{{ asset('js/swipe.js') }}" defer></script>
    <script src="https://kit.fontawesome.com/2b6fc70c75.js" crossorigin="anonymous"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/ion.rangeSlider.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/style2.css') }}" rel="stylesheet">
</head>

<body>
<div data-hcolor="#ea402f" class="hide_line   section             section105   "
     style="background-color:#ffffff;" data-id="2506025"
     id="b_2506025"><a name="a_1684279"></a>

    <div class="noise" style=""></div>
    <div class="section_inner  all_border width1170">

        <div class="logo_img">
            <a href="{{ route('home') }}">
                <img data-lazy="1" alt="" src="/images/407eea701e7ef246ba6dba007fd79b5b.jpg">
            </a>
        </div>

        <div class="menu-and-phone-and-btn">
            <a href="tel:+7 800 333 22 33" class="phone1 zphone show_phone_icon" style="color:#ea402f;">+7 800 333
                22 33</a>
            <div class=" hidden btn1 surround  "
                 style="background-color:#ea402f;  border-radius: 0.67em;   box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ;     ">
                Перезвоните мне
            </div>
            <div class="menu_mobile_btn"><i class="fa fa-bars"></i></div>
            <div class="menu1" style="font-size:16px; background-color:#ffffff; color:#333333; ">
                <ul>
                    <li class="level0"><a href="#anchor1">ПОЧЕМУ МЫ</a></li>
                    <li class="level0"><a href="#anchor3">КАТАЛОГ</a></li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>

<main>
    @yield('content')
</main>

@include('layouts.footer')

</body>
</html>
