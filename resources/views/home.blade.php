@extends('layouts.app')

@section('content')
    <div data-hcolor="#ea402f" class="  section     no_fontsize         section153    "
         style="background-color:#ffffff; background-image:url(/images/17335db3c2197cdc2ded6c19407fbf2c.jpg); padding-top:40px; padding-bottom:100px;"
         data-id="2506026" id="b_2506026"><a name="a_1684280"></a>

        <div class="dark"></div>
        <div class="noise" style=""></div>
        <div class="noise_new " style=" opacity:0.5;"></div>
        <div class="section_inner all_border    w450h60 ">
            <div class="layer">
                <div class="title"><br><br><span style="font-family:georgia,serif"><strong><span style="font-size:54px">Пиццерия "NEWpizza" уже в твоем городе!</span></strong></span><br>
                </div>
                <div class="sub_title">
                    <div><span style="font-size:24px;">Доставим пиццу за 60 минут, или получите ее бесплатно<br></span>
                    </div>
                    <span style="font-size:24px;"> </span></div>

                <div class="btn1 surround"
                     style="background-color: rgb(234, 64, 47); border-radius: 0.67em; box-shadow: rgb(204, 34, 17) 0px 0.25em 0px 0.01em; color: rgb(255, 255, 255); border-color: transparent;"
                     data-color="rgb(234, 64, 47)">Сделать заказ
                </div>
                <div class="btn_descr"><br></div>
            </div>

            <div class="popup_form" style="display: none; opacity: 0;">
                <div class="popup_form_inner">
                    <div class="popup_form_close"></div>
                    <div class="popup_form_title">Оставить заявку</div>
                    <form action="{{ route('orders.create') }}" enctype="multipart/form-data" method="get">
                        <div class="form1"><input type="hidden" value="">
                            <div class="field">
                                <div class="field_title ">Введите имя</div>
                                <div class="field_description"></div>
                                <div class="field_input field_input_text"><input type="text" required="required"
                                                                                 name="name"
                                                                                 placeholder="Введите имя"
                                                                                 autocomplete="off"></div>
                            </div>
                            <div class="field">
                                <div class="field_title  ">Введите E-mail</div>
                                <div class="field_description"></div>
                                <div class="field_input field_input_email"><input type="email" required="required"
                                                                                  name="email"
                                                                                  placeholder="mail@mail.ru"
                                                                                  autocomplete="off"></div>
                            </div>
                            <div class="field">
                                <div class="field_title  ">Введите номер телефона</div>
                                <div class="field_description"></div>
                                <div class="field_input field_input_phone"><input type="text" required="required"
                                                                                  pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                  minlength="6"
                                                                                  name="phone"
                                                                                  placeholder="xxx-xxx-xxx"
                                                                                  autocomplete="off"></div>
                            </div>
                            <div class="field">
                                <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                data-hcolor="undefined" data-action="thanks"
                                                                data-metrica_event="undefined" data-fb_pixel="undefined"
                                                                data-vk_pixel="undefined" data-gtag_event="undefined"
                                                                data-url="" data-amount="0"
                                                                data-product_name="undefined" value="Заказать"
                                                                style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                autocomplete="off"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div class="popup_thanks" style="display: none;">
                <div class="popup_thanks_inner">
                    <div class="popup_thanks_close">X</div>
                    <div class="popup_thanks_title">Спасибо за заявку!</div>
                    <div class="popup_thanks_text">Заявка отправлена. Наш менеджер свяжется с Вами в ближайшее время.
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div data-hcolor="#ea402f" data-autoslide="0" class=" size_700x500 hide_line     section             section126 "
         style="background-color:#FFFFFF;   padding-top:40px; padding-bottom:40px;"
         data-id="2506027" id="b_2506027"><a name="anchor1"></a>


        <div class="noise" style=""></div>
        <div class="noise_new " style=" opacity:0.5;"></div>
        <div class="section_inner all_border    ">
            <div class="title">Добро пожаловать в пиццерию "NEWpizza"!<br></div>
            <div class="sub_title"><span style="font-size:20px">Заказ начинает готовиться только после звонка и&nbsp;никаких заранее приготовленных блюд</span><br>
            </div>


            <div class="arr1 ">

                <div data-link="" class="image1   size_700x500 "><img data-lazy="1" alt=""
                                                                      src="/images/5803b283815d27b702df11a2d2cbe441.jpg">
                </div>


                <div class="right    size_700x500">
                    <div class="title1"><strong><span
                                style="font-size:24px;">Почему выбирают нашу пиццерию<br></span></strong></div>
                    <div class="txt1">
                        <ul>
                            <li>При&nbsp;приготовлении мы&nbsp;используем только экологически чистые, высококачественные
                                продукты и&nbsp;фильтрованную воду.<br></li>
                            <li>Высокотехнологичный метод обработки заказов позволяет нам&nbsp;уже&nbsp;через несколько
                                секунд после звонка начать приготовление на&nbsp;производстве. Это&nbsp;позволяет нам&nbsp;сократить
                                время доставки и&nbsp;привозить Вам&nbsp;исключительно свежие блюда.<br></li>
                        </ul>
                    </div>


                    <div class=" hidden btn1 surround  "
                         style="background-color:#ea402f;  border-radius: 0.67em;   box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ;  font-size: 18px;   ">
                        Сделать заказ
                    </div>


                    <div class="popup_form" style="display: none; opacity: 0;">
                        <div class="popup_form_inner">
                            <div class="popup_form_close"></div>
                            <div class="popup_form_title">Оставить заявку</div>
                            <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                  method="get">
                                <div class="form1"><input type="hidden" name="Название формы" value="">
                                    <div class="field">
                                        <div class="field_title ">Введите имя</div>
                                        <div class="field_description"></div>
                                        <div class="field_input field_input_text"><input type="text" required="required"
                                                                                         name="name"
                                                                                         placeholder="Введите имя"
                                                                                         autocomplete="off"></div>
                                    </div>
                                    <div class="field">
                                        <div class="field_title  ">Введите E-mail</div>
                                        <div class="field_description"></div>
                                        <div class="field_input field_input_email"><input type="email"
                                                                                          required="required"
                                                                                          name="email"
                                                                                          placeholder="mail@mail.ru"
                                                                                          autocomplete="off"></div>
                                    </div>
                                    <div class="field">
                                        <div class="field_title  ">Введите номер телефона</div>
                                        <div class="field_description"></div>
                                        <div class="field_input field_input_phone"><input type="text"
                                                                                          required="required"
                                                                                          pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                          minlength="6"
                                                                                          name="phone"
                                                                                          placeholder="xxx-xxx-xxx"
                                                                                          autocomplete="off"></div>
                                    </div>
                                    <div class="field">
                                        <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                        data-hcolor="undefined" data-action="thanks"
                                                                        data-metrica_event="undefined"
                                                                        data-fb_pixel="undefined"
                                                                        data-vk_pixel="undefined"
                                                                        data-gtag_event="undefined" data-url=""
                                                                        data-amount="0" data-product_name="undefined"
                                                                        value="Отправить"
                                                                        style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                        autocomplete="off"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="popup_form" style="display: none; opacity: 0;">
                        <div class="popup_form_inner">
                            <div class="popup_form_close"></div>
                            <div class="popup_form_title">Оставить заявку</div>
                            <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                  method="get">
                                <div class="form2"><input type="hidden" name="Название формы" value="">
                                    <div class="field">
                                        <div class="field_title ">Введите имя</div>
                                        <div class="field_description"></div>
                                        <div class="field_input field_input_text"><input type="text" required="required"
                                                                                         name="name"
                                                                                         placeholder="Введите имя"
                                                                                         autocomplete="off"></div>
                                    </div>
                                    <div class="field">
                                        <div class="field_title  ">Введите E-mail</div>
                                        <div class="field_description"></div>
                                        <div class="field_input field_input_email"><input type="email"
                                                                                          required="required"
                                                                                          name="email"
                                                                                          placeholder="mail@mail.ru"
                                                                                          autocomplete="off"></div>
                                    </div>
                                    <div class="field">
                                        <div class="field_title  ">Введите номер телефона</div>
                                        <div class="field_description"></div>
                                        <div class="field_input field_input_phone"><input type="text"
                                                                                          required="required"
                                                                                          pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                          minlength="6"
                                                                                          name="phone"
                                                                                          placeholder="xxx-xxx-xxx"
                                                                                          autocomplete="off"></div>
                                    </div>
                                    <div class="field">
                                        <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                        data-hcolor="undefined" data-action="thanks"
                                                                        data-metrica_event="undefined"
                                                                        data-fb_pixel="undefined"
                                                                        data-vk_pixel="undefined"
                                                                        data-gtag_event="undefined" data-url=""
                                                                        data-amount="0" data-product_name="undefined"
                                                                        value="Отправить"
                                                                        style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                        autocomplete="off"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
                <div class="clear"></div>
            </div>


            <div class="popup_thanks" style="display: none;">
                <div class="popup_thanks_inner">
                    <div class="popup_thanks_close">X</div>
                    <div class="popup_thanks_title">Спасибо за заявку!</div>
                    <div class="popup_thanks_text">Заявка отправлена. Наш менеджер свяжется с Вами в ближайшее время.
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div data-hcolor="#ea402f" class="hide_line   section           section306  "
         style="background-color:#ffffff;   padding-top:40px; padding-bottom:40px;"
         data-id="2506028" id="b_2506028"><a name="a_1684436"></a>


        <div class="noise" style=""></div>
        <div class="section_inner   ">


            <div class="form_wrapper   form_bg" style="color: #ea402f; border-color:#ea402f;">
                <div class="form_bg_color" style="opacity:0;"></div>
                <div class="form_title"><span style="font-size:24px">Оставьте заявку на сайте</span><br></div>
                <div class="form1">
                    <form action="{{ route('orders.create') }}" enctype="multipart/form-data" method="get">

                        <input type="hidden" name="Название формы" value="">

                        <div class="field">
                            <div class="field_title ">Введите имя</div>
                            <div class="field_description"></div>
                            <div class="field_input field_input_text"><input type="text" required="required"
                                                                             name="name"
                                                                             placeholder="Введите имя"
                                                                             autocomplete="off"></div>
                        </div>

                        <div class="field">
                            <div class="field_title  ">Введите E-mail</div>
                            <div class="field_description"></div>
                            <div class="field_input field_input_email"><input type="email" required="required"
                                                                              name="email"
                                                                              placeholder="mail@mail.ru"
                                                                              autocomplete="off"></div>
                        </div>

                        <div class="field">
                            <div class="field_title  ">Введите номер телефона</div>
                            <div class="field_description"></div>
                            <div class="field_input field_input_phone"><input type="text" required="required"
                                                                              pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                              minlength="6"
                                                                              name="phone"
                                                                              placeholder="xxx-xxx-xxx"
                                                                              autocomplete="off"></div>
                        </div>

                        <div class="field">
                            <div class="field_input"><input type="submit" class="submit_btn surround"
                                                            data-hcolor="undefined" data-action="thanks"
                                                            data-metrica_event="undefined" data-fb_pixel="undefined"
                                                            data-vk_pixel="undefined" data-gtag_event="undefined"
                                                            data-url="" data-amount="0" data-product_name="undefined"
                                                            value="Сделать заказ"
                                                            style="background-color: rgb(234, 64, 47); border-radius: 0.67em; box-shadow: rgb(204, 34, 17) 0px 0.25em 0px 0.01em; color: rgb(255, 255, 255); border-color: transparent;"
                                                            autocomplete="off" data-color="rgb(234, 64, 47)"></div>
                        </div>

                    </form>
                </div>
            </div>
            <div class="clear"></div>
            <div class="popup_thanks" style="display: none;">
                <div class="popup_thanks_inner">
                    <div class="popup_thanks_close">X</div>
                    <div class="popup_thanks_title">Спасибо за заявку!</div>
                    <div class="popup_thanks_text">Заявка отправлена. Наш менеджер свяжется с Вами в ближайшее время.
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div data-hcolor="#ea402f"
         class=" s_mode_s200 hide_line          img_square   brd_always     section             transparent_ico section130  "
         style="background-color:#ffffff;   padding-top:80px; padding-bottom:80px;"
         data-id="2506029" id="b_2506029"><a name="anchor3"></a>


        <div class="noise" style=""></div>
        <div class="noise_new " style=" opacity:0.5;"></div>
        <div class="section_inner all_border  ">
            <div class="title">Каталог пиццы<br></div>
            <div class="sub_title"><span style="font-size:20px">Доставим пиццу домой или в офис в течение 60 минут после оформления заказа</span><br>
            </div>
            <div class="catalog_items count3 s200">
                <div class="filter_btns ">
                    <button id="descending" data-sort_dir="to_min">Сначала дорогие</button>
                    <button id="аscending" data-sort_dir="to_max">Сначала дешевые</button>
                </div>


                <div class="arr1 ">
                    <div class="col_4">
                        <div class="col_bg" style="opacity:0.2; background: #ffffff;"></div>

                        <div data-link="" class="image1  s200  radius     "><img data-lazy="1" alt=""
                                                                                 src="/images/efc0c16d82868531ec86ebb102a135d3.jpg">
                        </div>


                        <div class="title1">Пицца "СЫТНАЯ"<br></div>
                        <div class="txt1">
                            <div><p>Шампиньоны, п/к колбаса, сыр, соус на&nbsp;основе майонеза, пассерованный лук,
                                    свежая зелень<br></p></div>
                        </div>
                        <div class="price1">160 руб.<br></div>
                        <div class="btn1 surround  "
                             style="background-color:#ea402f;  border-radius: 0.67em;   box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ;     ">
                            Заказать
                        </div>


                        <div class="popup_form" style="display: none; opacity: 0;">
                            <div class="popup_form_inner">
                                <div class="popup_form_close"></div>
                                <div class="popup_form_title">Оставить заявку</div>
                                <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                      method="get">
                                    <div class="form1"><input type="hidden" name="Название формы" value="">
                                        <div class="field">
                                            <div class="field_title ">Введите имя</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_text"><input type="text"
                                                                                             required="required"
                                                                                             name="name"
                                                                                             placeholder="Введите имя"
                                                                                             autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите E-mail</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_email"><input type="email"
                                                                                              required="required"
                                                                                              name="email"
                                                                                              placeholder="mail@mail.ru"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите номер телефона</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_phone"><input type="text"
                                                                                              required="required"
                                                                                              pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                              minlength="6"
                                                                                              name="phone"
                                                                                              placeholder="xxx-xxx-xxx"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                            data-hcolor="undefined" data-action="thanks"
                                                                            data-metrica_event="undefined"
                                                                            data-fb_pixel="undefined"
                                                                            data-vk_pixel="undefined"
                                                                            data-gtag_event="undefined" data-url=""
                                                                            data-amount="0"
                                                                            data-product_name="undefined"
                                                                            value="Отправить"
                                                                            style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                            autocomplete="off"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="extra_info_block_wrapper  ">
                        <div class="extra_info_block s200">
                            <div class="close">Х</div>


                            <div class="left"><img data-lazy="1" alt=""
                                                   src="/images/efc0c16d82868531ec86ebb102a135d3(1).jpg">
                                <div style="display: none;">
                                    <img data-lazy="1" alt="" src="/images/image_5093.jpg">
                                    <img data-lazy="1" alt="" src="/images/image_5095.jpg">
                                </div>

                            </div>


                            <div class="right">
                                <div class="extra_info1"><span style="font-size:28px;">Название товара<br></span>Подробное
                                    описание продукта.<br>Здесь вы можете расписать:
                                    <ul>
                                        <li>свойства товара,<br type="_moz"></li>
                                        <li>параметры товара,<br type="_moz"></li>
                                        <li>описание товара,</li>
                                        <li>наличие на складе,</li>
                                        <li>цвет,</li>
                                        <li>количество.<br></li>
                                    </ul>
                                    <p>Напишите их тут. И будет у вас не просто сайт, а интернет-магазин. <br></p></div>

                                <div class="btn1x surround " style="background-color:#ea402f; ">Заказать</div>
                            </div>
                            <div class="clear"></div>

                        </div>
                    </div>

                </div>


                <div class="arr1 ">
                    <div class="col_4">
                        <div class="col_bg" style="opacity:0.2; background: #ffffff;"></div>

                        <div data-link="" class="image1  s200  radius     "><img data-lazy="1" alt=""
                                                                                 src="/images/c4e33d81d40b07a0e0dd1efd59d2381f.jpg">
                        </div>


                        <div class="title1">Пицца "СТУДЕНЧЕСКАЯ"<br></div>
                        <div class="txt1">
                            <div><p>Сосиски, соус томатный с&nbsp;базиликом с&nbsp;добавлением майонеза, сыр, свежая
                                    зелень<br></p></div>
                        </div>
                        <div class="price1">180 руб.<br></div>
                        <div class="btn1 surround"
                             style="background-color: rgb(234, 64, 47); border-radius: 0.67em; box-shadow: rgb(204, 34, 17) 0px 0.25em 0px 0.01em; color: rgb(255, 255, 255); border-color: transparent;"
                             data-color="rgb(234, 64, 47)">Заказать
                        </div>


                        <div class="popup_form" style="opacity: 0; display: none;">
                            <div class="popup_form_inner">
                                <div class="popup_form_close"></div>
                                <div class="popup_form_title">Оставить заявку</div>
                                <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                      method="get">
                                    <div class="form1"><input type="hidden" name="Название формы" value="">
                                        <div class="field">
                                            <div class="field_title ">Введите имя</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_text"><input type="text"
                                                                                             required="required"
                                                                                             name="name"
                                                                                             placeholder="Введите имя"
                                                                                             autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите E-mail</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_email"><input type="email"
                                                                                              required="required"
                                                                                              name="email"
                                                                                              placeholder="mail@mail.ru"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите номер телефона</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_phone"><input type="text"
                                                                                              required="required"
                                                                                              pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                              minlength="6"
                                                                                              name="phone"
                                                                                              placeholder="xxx-xxx-xxx"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                            data-hcolor="undefined" data-action="thanks"
                                                                            data-metrica_event="undefined"
                                                                            data-fb_pixel="undefined"
                                                                            data-vk_pixel="undefined"
                                                                            data-gtag_event="undefined" data-url=""
                                                                            data-amount="0"
                                                                            data-product_name="undefined"
                                                                            value="Отправить"
                                                                            style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                            autocomplete="off"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="extra_info_block_wrapper  ">
                        <div class="extra_info_block s200">
                            <div class="close">Х</div>


                            <div class="left"><img data-lazy="1" alt=""
                                                   src="/images/c4e33d81d40b07a0e0dd1efd59d2381f(1).jpg">
                                <div style="display: none;">
                                    <img data-lazy="1" alt="" src="/images/image_5093.jpg">
                                    <img data-lazy="1" alt="" src="/images/image_5095.jpg">
                                </div>

                            </div>


                            <div class="right">
                                <div class="extra_info1"><span style="font-size:28px;">Название товара<br></span>Подробное
                                    описание продукта.<br>Здесь вы можете расписать:
                                    <ul>
                                        <li>свойства товара,<br type="_moz"></li>
                                        <li>параметры товара,<br type="_moz"></li>
                                        <li>описание товара,</li>
                                        <li>наличие на складе,</li>
                                        <li>цвет,</li>
                                        <li>количество.<br></li>
                                    </ul>
                                    <p>Напишите их тут. И будет у вас не просто сайт, а интернет-магазин. <br></p></div>

                                <div class="btn1x surround " style="background-color:#ea402f; ">Заказать</div>
                            </div>
                            <div class="clear"></div>

                        </div>
                    </div>

                </div>


                <div class="arr1 ">
                    <div class="col_4">
                        <div class="col_bg" style="opacity:0.2; background: #ffffff;"></div>

                        <div data-link="" class="image1  s200  radius     "><img data-lazy="1" alt=""
                                                                                 src="/images/4f942c494e8a4b0b13b09ee83c1e8781.jpg">
                        </div>


                        <div class="title1">Пицца "ГРИБНАЯ"<br></div>
                        <div class="txt1">
                            <div><p>Шампиньоны, лук, соус на&nbsp;основе майонеза, сыр, чеснок гранулированный, свежая
                                    зелень<br></p></div>
                        </div>
                        <div class="price1">200 руб.<br></div>
                        <div class="btn1 surround"
                             style="background-color: rgb(234, 64, 47); border-radius: 0.67em; box-shadow: rgb(204, 34, 17) 0px 0.25em 0px 0.01em; color: rgb(255, 255, 255); border-color: transparent;"
                             data-color="rgb(234, 64, 47)">Заказать
                        </div>


                        <div class="popup_form" style="opacity: 0; display: none;">
                            <div class="popup_form_inner">
                                <div class="popup_form_close"></div>
                                <div class="popup_form_title">Оставить заявку</div>
                                <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                      method="get">
                                    <div class="form1"><input type="hidden" name="Название формы" value="">
                                        <div class="field">
                                            <div class="field_title ">Введите имя</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_text"><input type="text"
                                                                                             required="required"
                                                                                             name="name"
                                                                                             placeholder="Введите имя"
                                                                                             autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите E-mail</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_email"><input type="email"
                                                                                              required="required"
                                                                                              name="email"
                                                                                              placeholder="mail@mail.ru"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите номер телефона</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_phone"><input type="text"
                                                                                              required="required"
                                                                                              pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                              minlength="6"
                                                                                              name="phone"
                                                                                              placeholder="xxx-xxx-xxx"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                            data-hcolor="undefined" data-action="thanks"
                                                                            data-metrica_event="undefined"
                                                                            data-fb_pixel="undefined"
                                                                            data-vk_pixel="undefined"
                                                                            data-gtag_event="undefined" data-url=""
                                                                            data-amount="0"
                                                                            data-product_name="undefined"
                                                                            value="Отправить"
                                                                            style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                            autocomplete="off"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="extra_info_block_wrapper  ">
                        <div class="extra_info_block s200">
                            <div class="close">Х</div>


                            <div class="left"><img data-lazy="1" alt=""
                                                   src="/images/4f942c494e8a4b0b13b09ee83c1e8781(1).jpg">
                                <div style="display: none;">
                                    <img data-lazy="1" alt="" src="/images/image_5093.jpg">
                                    <img data-lazy="1" alt="" src="/images/image_5095.jpg">
                                </div>

                            </div>


                            <div class="right">
                                <div class="extra_info1"><span style="font-size:28px;">Название товара<br></span>Подробное
                                    описание продукта.<br>Здесь вы можете расписать:
                                    <ul>
                                        <li>свойства товара,<br type="_moz"></li>
                                        <li>параметры товара,<br type="_moz"></li>
                                        <li>описание товара,</li>
                                        <li>наличие на складе,</li>
                                        <li>цвет,</li>
                                        <li>количество.<br></li>
                                    </ul>
                                    <p>Напишите их тут. И будет у вас не просто сайт, а интернет-магазин. <br></p></div>

                                <div class="btn1x surround " style="background-color:#ea402f; ">Заказать</div>
                            </div>
                            <div class="clear"></div>

                        </div>
                    </div>

                </div>


                <div class="arr1 ">
                    <div class="col_4">
                        <div class="col_bg" style="opacity:0.2; background: #ffffff;"></div>

                        <div data-link="" class="image1  s200  radius     "><img data-lazy="1" alt=""
                                                                                 src="/images/3a73b2431c8eae444634382457ab1164.jpg">
                        </div>


                        <div class="title1">Пицца "ПИКАНТНАЯ"<br></div>
                        <div class="txt1">
                            <div><p>Ветчина, свежие помидоры, соус на&nbsp;основе майонеза, сыр, чеснок гранулированный,
                                    свежая зелень<br></p></div>
                        </div>
                        <div class="price1">160 руб.<br></div>
                        <div class="btn1 surround  "
                             style="background-color:#ea402f;  border-radius: 0.67em;   box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ;     ">
                            Заказать
                        </div>


                        <div class="popup_form" style="display: none; opacity: 0;">
                            <div class="popup_form_inner">
                                <div class="popup_form_close"></div>
                                <div class="popup_form_title">Оставить заявку</div>
                                <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                      method="get">
                                    <div class="form1"><input type="hidden" name="Название формы" value="">
                                        <div class="field">
                                            <div class="field_title ">Введите имя</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_text"><input type="text"
                                                                                             required="required"
                                                                                             name="name"
                                                                                             placeholder="Введите имя"
                                                                                             autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите E-mail</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_email"><input type="email"
                                                                                              required="required"
                                                                                              name="email"
                                                                                              placeholder="mail@mail.ru"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите номер телефона</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_phone"><input type="text"
                                                                                              required="required"
                                                                                              pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                              minlength="6"
                                                                                              name="phone"
                                                                                              placeholder="xxx-xxx-xxx"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                            data-hcolor="undefined" data-action="thanks"
                                                                            data-metrica_event="undefined"
                                                                            data-fb_pixel="undefined"
                                                                            data-vk_pixel="undefined"
                                                                            data-gtag_event="undefined" data-url=""
                                                                            data-amount="0"
                                                                            data-product_name="undefined"
                                                                            value="Отправить"
                                                                            style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                            autocomplete="off"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="extra_info_block_wrapper  ">
                        <div class="extra_info_block s200">
                            <div class="close">Х</div>


                            <div class="left"><img data-lazy="1" alt=""
                                                   src="/images/3a73b2431c8eae444634382457ab1164(1).jpg">
                                <div style="display: none;">
                                    <img data-lazy="1" alt="" src="/images/image_5093.jpg">
                                    <img data-lazy="1" alt="" src="/images/image_5095.jpg">
                                </div>

                            </div>


                            <div class="right">
                                <div class="extra_info1"><span style="font-size:28px;">Название товара<br></span>Подробное
                                    описание продукта.<br>Здесь вы можете расписать:
                                    <ul>
                                        <li>свойства товара,<br type="_moz"></li>
                                        <li>параметры товара,<br type="_moz"></li>
                                        <li>описание товара,</li>
                                        <li>наличие на складе,</li>
                                        <li>цвет,</li>
                                        <li>количество.<br></li>
                                    </ul>
                                    <p>Напишите их тут. И будет у вас не просто сайт, а интернет-магазин. <br></p></div>

                                <div class="btn1x surround " style="background-color:#ea402f; ">Заказать</div>
                            </div>
                            <div class="clear"></div>

                        </div>
                    </div>

                </div>


                <div class="arr1 ">
                    <div class="col_4">
                        <div class="col_bg" style="opacity:0.2; background: #ffffff;"></div>

                        <div data-link="" class="image1  s200  radius     "><img data-lazy="1" alt=""
                                                                                 src="/images/896ed1583b6c85f5718a51941b615b12.jpeg">
                        </div>


                        <div class="title1">Пицца "ВЕГЕТАРИАНСКАЯ"<br></div>
                        <div class="txt1">
                            <div><p>Сладкий перец, помидоры, лук, маслины, соус с&nbsp;базиликом, листья салата, сыр,
                                    свежая зелень<br></p></div>
                        </div>
                        <div class="price1">180 руб.<br></div>
                        <div class="btn1 surround"
                             style="background-color: rgb(234, 64, 47); border-radius: 0.67em; box-shadow: rgb(204, 34, 17) 0px 0.25em 0px 0.01em; color: rgb(255, 255, 255); border-color: transparent;"
                             data-color="rgb(234, 64, 47)">Заказать
                        </div>


                        <div class="popup_form" style="display: none; opacity: 0;">
                            <div class="popup_form_inner">
                                <div class="popup_form_close"></div>
                                <div class="popup_form_title">Оставить заявку</div>
                                <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                      method="get">
                                    <div class="form1"><input type="hidden" name="Название формы" value="">
                                        <div class="field">
                                            <div class="field_title ">Введите имя</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_text"><input type="text"
                                                                                             required="required"
                                                                                             name="name"
                                                                                             placeholder="Введите имя"
                                                                                             autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите E-mail</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_email"><input type="email"
                                                                                              required="required"
                                                                                              name="email"
                                                                                              placeholder="mail@mail.ru"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите номер телефона</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_phone"><input type="text"
                                                                                              required="required"
                                                                                              pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                              minlength="6"
                                                                                              name="phone"
                                                                                              placeholder="xxx-xxx-xxx"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                            data-hcolor="undefined" data-action="thanks"
                                                                            data-metrica_event="undefined"
                                                                            data-fb_pixel="undefined"
                                                                            data-vk_pixel="undefined"
                                                                            data-gtag_event="undefined" data-url=""
                                                                            data-amount="0"
                                                                            data-product_name="undefined"
                                                                            value="Отправить"
                                                                            style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                            autocomplete="off"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="extra_info_block_wrapper  ">
                        <div class="extra_info_block s200">
                            <div class="close">Х</div>


                            <div class="left"><img data-lazy="1" alt=""
                                                   src="/images/896ed1583b6c85f5718a51941b615b12(1).jpeg">
                                <div style="display: none;">
                                    <img data-lazy="1" alt="" src="/images/image_5093.jpg">
                                    <img data-lazy="1" alt="" src="/images/image_5095.jpg">
                                </div>

                            </div>


                            <div class="right">
                                <div class="extra_info1"><span style="font-size:28px;">Название товара<br></span>Подробное
                                    описание продукта.<br>Здесь вы можете расписать:
                                    <ul>
                                        <li>свойства товара,<br type="_moz"></li>
                                        <li>параметры товара,<br type="_moz"></li>
                                        <li>описание товара,</li>
                                        <li>наличие на складе,</li>
                                        <li>цвет,</li>
                                        <li>количество.<br></li>
                                    </ul>
                                    <p>Напишите их тут. И будет у вас не просто сайт, а интернет-магазин. <br></p></div>

                                <div class="btn1x surround " style="background-color:#ea402f; ">Заказать</div>
                            </div>
                            <div class="clear"></div>

                        </div>
                    </div>

                </div>


                <div class="arr1 ">
                    <div class="col_4">
                        <div class="col_bg" style="opacity:0.2; background: #ffffff;"></div>

                        <div data-link="" class="image1  s200  radius     "><img data-lazy="1" alt=""
                                                                                 src="/images/6229f56fe33f1177c76b0c1be8caebf2.png">
                        </div>


                        <div class="title1">Пицца "МАРГАРИТА"<br></div>
                        <div class="txt1">
                            <div><p>Свежие помидоры, соус на&nbsp;основе томатов базилика с&nbsp;добавлением майонеза,
                                    сыр, свежая зелень<br></p></div>
                        </div>
                        <div class="price1">200 руб.<br></div>
                        <div class="btn1 surround  "
                             style="background-color:#ea402f;  border-radius: 0.67em;   box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ;     ">
                            Заказать
                        </div>


                        <div class="popup_form" style="display: none; opacity: 0;">
                            <div class="popup_form_inner">
                                <div class="popup_form_close"></div>
                                <div class="popup_form_title">Оставить заявку</div>
                                <form action="{{ route('orders.create') }}" enctype="multipart/form-data"
                                      method="get">
                                    <div class="form1"><input type="hidden" name="Название формы" value="">
                                        <div class="field">
                                            <div class="field_title ">Введите имя</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_text"><input type="text"
                                                                                             required="required"
                                                                                             name="name"
                                                                                             placeholder="Введите имя"
                                                                                             autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите E-mail</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_email"><input type="email"
                                                                                              required="required"
                                                                                              name="email"
                                                                                              placeholder="mail@mail.ru"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_title  ">Введите номер телефона</div>
                                            <div class="field_description"></div>
                                            <div class="field_input field_input_phone"><input type="text"
                                                                                              required="required"
                                                                                              pattern="[+)( .-]*[0-9]+[0-9+)( .-]*"
                                                                                              minlength="6"
                                                                                              name="phone"
                                                                                              placeholder="xxx-xxx-xxx"
                                                                                              autocomplete="off"></div>
                                        </div>
                                        <div class="field">
                                            <div class="field_input"><input type="submit" class="submit_btn surround"
                                                                            data-hcolor="undefined" data-action="thanks"
                                                                            data-metrica_event="undefined"
                                                                            data-fb_pixel="undefined"
                                                                            data-vk_pixel="undefined"
                                                                            data-gtag_event="undefined" data-url=""
                                                                            data-amount="0"
                                                                            data-product_name="undefined"
                                                                            value="Отправить"
                                                                            style="background-color:#ea402f;    border-radius: 0.67em; ;  box-shadow: 0 0.25em 0px 0.01em  rgb(204,34,17) ; ;  "
                                                                            autocomplete="off"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="extra_info_block_wrapper  ">
                        <div class="extra_info_block s200">
                            <div class="close">Х</div>


                            <div class="left"><img data-lazy="1" alt=""
                                                   src="/images/6229f56fe33f1177c76b0c1be8caebf2(1).png">
                                <div style="display: none;">
                                    <img data-lazy="1" alt="" src="/images/image_5093.jpg">
                                    <img data-lazy="1" alt="" src="/images/image_5095.jpg">
                                </div>

                            </div>


                            <div class="right">
                                <div class="extra_info1"><span style="font-size:28px;">Название товара<br></span>Подробное
                                    описание продукта.<br>Здесь вы можете расписать:
                                    <ul>
                                        <li>свойства товара,<br type="_moz"></li>
                                        <li>параметры товара,<br type="_moz"></li>
                                        <li>описание товара,</li>
                                        <li>наличие на складе,</li>
                                        <li>цвет,</li>
                                        <li>количество.<br></li>
                                    </ul>
                                    <p>Напишите их тут. И будет у вас не просто сайт, а интернет-магазин. <br></p></div>

                                <div class="btn1x surround " style="background-color:#ea402f; ">Заказать</div>
                            </div>
                            <div class="clear"></div>

                        </div>
                    </div>

                </div>


                <div class="popup_thanks" style="display: none;">
                    <div class="popup_thanks_inner">
                        <div class="popup_thanks_close">X</div>
                        <div class="popup_thanks_title">Спасибо за заявку!</div>
                        <div class="popup_thanks_text">Заявка отправлена. Наш менеджер свяжется с Вами в ближайшее
                            время.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="hide_line  section           section144    "
         style="background-color:#ffffff;   padding-top:60px; padding-bottom:60px;"
         data-id="2506032" id="b_2506032"><a name="a_1684427"></a>

        <div class="noise" style=""></div>

        <div class="section_inner">


            <div class="images">

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/9e9dbd8b94693d6b6840a66c7519415a.png">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/5f6daf0b561fa03efddb777aac3124ef.jpg">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/3f5a72815f98532a8c1d72c1aac26284.jpg">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/2939e180a0aab50a12954ffb5637c873.jpg">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/64add4b2d3908c93581c90e332b2614c.jpg">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/5540654cddc74cad2ef437ad0c6cd645.jpg">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/f15926d0bcdf5e3369453170116d95b5.jpg">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="image_box     image_size_600x450 arr1 ">
                    <img data-lazy="1" alt="" src="/images/b81899849e68dd254a3fffd07670f867.png">
                    <div class="overlay_image_box  active_off" data-link="" data-link-target="0">
                        <div class="overlay_image_title"></div>
                        <div class="overlay_image_descr"></div>
                    </div>
                </div>

                <div class="clear"></div>
            </div>
        </div>
    </div>

    <div class="hide_line  one style_2    section           section132 "
         style="background-color:#ffffff;   padding-top:40px; padding-bottom:40px;"
         data-id="2506033" id="b_2506033"><a name="a_1684423"></a>


        <div class="noise" style=""></div>
        <div class="noise_new " style=" opacity:0.5;"></div>
        <div class="section_inner  ">
            <div class="title">Условия доставки и оплаты<br></div>
            <div class="sub_title"><br></div>
            <div class="text" style=" color: #f5550e;   "><p><span style="color:#000000;">Способы доставки:<br></span>
                </p>
                <ol>
                    <li><span style="color:#000000;">Доставка осуществляется при&nbsp;условии минимальной суммы заказа: 150 рублей.&nbsp;</span>
                    </li>
                    <li><span style="color:#000000;">Стоимость доставки при&nbsp;заказе на&nbsp;сумму от&nbsp;150 до&nbsp;800 рублей: 100 рублей.&nbsp;</span><br>
                    </li>
                    <li><span style="color:#000000;">При заказе от&nbsp;800 рублей доставка осуществляется </span><span
                            style="color:#FF0000;"><strong>БЕСПЛАТНО</strong></span><span
                            style="color:#000000;">!</span><br></li>
                </ol>
                <p><span style="color:#000000;">Способы оплаты:</span></p>
                <ol>
                    <li><span style="color:#000000;">Наличными курьеру при&nbsp;получении заказа.</span></li>
                    <li><span style="color:#000000;">Банковской картой через терминал, который привезет курьер вместе с&nbsp;заказом (пожалуйста сообщите об&nbsp;этом заранее оператору.</span>
                    </li>
                </ol>
            </div>
        </div>
    </div>

@endsection
