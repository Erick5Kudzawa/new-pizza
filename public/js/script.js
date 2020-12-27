$(function () {
    window.modal = {
        getModal: function (title = 'Заголовок', descr = 'Описание', modal_class = '') {
            var modal_template = `
                            <div class="modal_bg">
                                <div class="modal_body ${modal_class}" >
                                    <div class="modal_close">X</div>
                                    <div class="modal_inner">
                                        <div class="modal_title">${title}</div>
                                        <div class="modal_descr">${descr}</div>
                                    </div>
                                </div>
                            </div>
                        `;

            $('body').append(modal_template);
            $('body').addClass('modal');

        },
        init: function () {
            $('body').on('click', '.modal_close', function () {
                $(this).parent().parent().remove();
                $('body').removeClass('modal2')
            })
            $('body').on('click', '.modal_body', function (e) {
                e.stopPropagation();
            })
            $('body').on('click', '.modal_bg', function (e) {
                $(this).find('.modal_close').click();
            })


        }

    };
    window.modal.init();
})
window.tobiz = {
    "project_id": "175081",
    "project_domain": "",
    "seo_title": "",
    "seo_keywords": "",
    "seo_description": "",
    "rep_id": "267273",
    "user_id": "119523",
    "owner_email": "kostya-roslov@mail.ru",
    "user_email": "kostya-roslov@mail.ru",
    "bs": false,
    "t": 9,
    "free": 1,
    "products_on": "0",
    "page_config": null,
    "showIntro": 1,
    "w": 1,
    "basket_conf": null
}

$(function () {
    function C() {
        970 >= $(window).width() && $(".section311").each(function (a, c) {
            0 != $(this).find(".menu1 li").length && 0 != $(this).find(".menu1").length || $(this).addClass("not_menu")
        })
    }

    function D(a, c) {
        var e = a.find(".image_box").size(), b = a.find(".image_box").eq(0).css("marginRight");
        b = 1 * b.replace(/px/g, "");
        var d = a.find(".image_box").eq(0).width() + "";
        d = 1 * d.replace(/px/g, "");
        var f = e * d + (e - 1) * b + b;
        a.find(".image_wrapper").css({width: f + "px"});
        a.find(".section_inner").width();
        var h = a.find(".image_wrapper").css("left");
        h = 1 * h.replace(/px/g, "");
        if ("left" == c && (h -= b + d, f <= -h + a.find(".image_screen").width() && (h = 0), h < -1 * (e * d + (e - 1) * b))) return;
        "right" == c && (h += b + d, console.log("r" + h), 0 < h && (h = 0));
        a.find(".image_wrapper").css({left: h + "px"})
    }

    function E(a, c) {
        var e = a.find(".image_box").size(), b = a.find(".image_box").eq(0).css("marginLeft"),
            d = a.find(".image_box").eq(0).css("marginRight");
        d = 1 * d.replace(/px/g, "");
        b.replace(/px/g, "");
        b = a.find(".image_box").eq(0).width() + "";
        b = 1 * b.replace(/px/g, "");
        var f = e * b + (e - 1) * d + d;
        a.find(".image_wrapper").css({
            width: f +
                "px"
        });
        a.find(".section_inner").width();
        f = a.find(".image_wrapper").css("left");
        f = 1 * f.replace(/px/g, "");
        e *= d + b;
        800 > $(window).width() ? "left" == c && (f = -(e - b) >= f - 10 ? 0 : f - (d + b)) : "left" == c && (f = -e > f - 1170 - b ? 0 : f - (d + b));
        "right" == c && (f += d + b, 0 < f && (f = 0));
        a.find(".image_wrapper").css({left: f + "px"})
    }

    function F(a, c) {
        var e = a.find(".arr1").size(), b = $(window).width(), d = a.find(".arr1").eq(0).width() + "";
        d = 1 * d.replace(/px/g, "");
        var f = e * d + 0 * (e - 1);
        a.find(".image_wrapper").css({width: f + "px"});
        a.find(".section_inner").width();
        f = a.find(".image_wrapper").css("left");
        f = 1 * f.replace(/px/g, "");
        var h = e * (0 + d), g = "px";
        console.log("total_w " + -h);
        console.log(f - 1170);
        1024 < $(window).width() ? "left" == c && (-h > f - 1170 - d / e ? (f = -25, console.log(1), g = "vw") : 0 < f ? (console.log(2), f = 0, g = "vw") : (console.log(3), f -= 0 + d)) : "left" == c && (-h > f - b - d ? (f = 0, console.log(11), g = "vw") : 0 < f ? (console.log(22), f = 0, g = "vw") : (console.log(33), f -= 0 + d));
        "right" == c && (f += 0 + d, 0 < f && (console.log(4), f = 0, g = "vw"));
        a.find(".image_wrapper").css({left: f + g})
    }

    function N(a, c) {
        a = parseInt($(a).find(".price1").text());
        c = parseInt($(c).find(".price1").text());
        return a > c ? 1 : c > a ? -1 : 0
    }

    function O(a, c) {
        a = parseInt($(a).find(".price1").text());
        c = parseInt($(c).find(".price1").text());
        return a > c ? -1 : c > a ? 1 : 0
    }

    function G() {
        1200 >= $(window).width() ? $(".section_inner.width1170").each(function () {
            $(this).addClass("was_width1170");
            $(this).removeClass("width1170")
        }) : 1200 < $(window).width() && $(".section_inner.was_width1170").each(function () {
            $(this).removeClass("was_width1170");
            $(this).addClass("width1170")
        })
    }

    /MSIE|Trident/.test(window.navigator.userAgent) ?
        $("body").addClass("ie") : $("body").addClass("not_ie");
    window.SetVideoBG = function (a) {
        function c() {
            var b = Math.floor(a.width()), d = Math.floor(a.outerHeight()), c = Math.floor($(window).width());
            c < b && (c = b);
            var h = Math.floor(c / e);
            h < d && (h = d, c = Math.floor(h * e));
            var g = 0, k = 0;
            0 > d - h && (g = Math.floor((d - h) / 2));
            0 > b - c && (k = Math.floor((b - c) / 2));
            a.find(".video_bg").css({height: h, width: c, left: k, top: g})
        }

        var e = 16 / 9;
        c();
        $(window).resize(function () {
            c()
        })
    };
    $(".section").each(function () {
        $(this).find(".video_bg").size() && SetVideoBG($(this))
    });
    $("#wrapper").find("iframe").each(function () {
        var a = $(this).attr("src");
        if ($(this).parents(".form_html, .html").size()) return !1;
        if (-1 < a.indexOf("https://www.youtube.com/embed/")) {
            var c = a.substring(30), e = "hqdefault", b = this;
            $.ajax({
                url: "/system/check_video.php?videoId=" + c, type: "HEAD", success: function () {
                    e = "maxresdefault"
                }, complete: function () {
                    $(b).replaceWith('<div class="video_holder" data-video="' + $(b).attr("src") + '" style="width:' + $(b).width() + "px; height:" + $(b).height() + "px; background-image: url(https://i.ytimg.com/vi/" +
                        c + "/" + e + '.jpg);"></div>')
                }
            })
        }
    });
    $("body").on("click", ".video_holder", function () {
        if (!tobiz.editor) {
            var a = $(this).data("video");
            $(this).replaceWith('<iframe  allowfullscreen src="' + a + '?autoplay=1"></iframe>')
        }
    });
    $("body").on("click", ".close_video_btn", function () {
        $("#wrapper").children(".popup_video").remove();
        $("body").removeClass("modal")
    });
    $("body").on("click", ".play_btn", function () {
        var a = $(this).closest(".section");
        $("body").addClass("modal");
        var c = $(this).parent().siblings().find(".video_holder").data("video");
        a.parent().append('<div class="popup_video"><div class="close_video_btn"></div><div class="video_this"></div></div>');
        $(".video_this").replaceWith('<iframe  allowfullscreen src="' + c + '?autoplay=1"></iframe>')
    });
    $("body").on("touchstart", ".video_holder", function () {
        var a = $(this).data("video");
        $(this).replaceWith('<iframe  allowfullscreen src="' + a + '?autoplay=1"></iframe>')
    });
    $(".section318 .accordion .line.caption, .section319 .accordion .line.caption").click(function () {
        $(this).parent().parent().find(".line.option, .line.btn").hide();
        $(this).parent().find(".line.option, .line.btn").show()
    });
    $("body").on("click", ".extra_info_block .close", function () {
        $("body").removeClass("noscroll");
        $(this).parent().parent().siblings().find(".btn1").hasClass("open_card_was") && (console.log("close"), $(this).parent().parent().siblings().children(".btn1").addClass("open_card"), $(this).parents(".arr1 ").find(".btns_wrapp").children(".btn1") && $(this).parents(".arr1 ").find(".btns_wrapp").children(".btn1").addClass("open_card"));
        $(this).parent().parent().siblings().children(".open_card_was") &&
        console.log("close");
        if (1 == tobiz.editor) {
            var a = $(this).closest(".section"), c = a.data("id");
            console.log(c);
            a.hasClass("section1130") && delete window.tobiz.slider1130array[c]
        }
    });
    $("body").on("click", ".popup_thanks_close, .popup_form_close", function () {
        $(this).parent().parent().siblings(".btn1").hasClass("open_card_was") && $(this).parent().parent().siblings(".btn1").addClass("open_card");
        $(".popup_thanks").hide();
        $(".popup_form").hide().animate({opacity: "0"}, 300);
        $("body").removeClass("modal")
    });
    $("body").on("click",
        ".basket_thanks_close", function () {
            $("#basket_bg_thanks").hide()
        });
    $("body").on("click", ".section1009 .widget_form_close", function () {
        $(".section1009 .form_wrapper").hide()
    });
    $("body").on("click", ".section1010 .widget_form_close", function () {
        $(".section1010 .arr1").hide()
    });
    $("body").on("click", ".choose_btns label", function () {
        $(".choose_btns label").removeClass("current_btn");
        $(this).addClass("current_btn")
    });
    $("body").on("click", ".all_form_close", function () {
        $(".section1009 .all_forms").hide()
    });
    $("body").on("click",
        ".section1009 .ico1", function (a) {
            $(this).children("a").is(":visible") || ($(".section1009 .field_input_textarea").parent().addClass("field_textarea"), $(".section1009 .pop_form").toggle(), $(".section1009 .social_icons").toggle(), $(".section1009 .form_wrapper").show(), $(".section1009 .all_forms").show())
        });
    $("body").on("click", ".section1009 .image2", function () {
        $(".section1009 .field_input_textarea").parent().addClass("field_textarea");
        $(".section1009 .pop_form").toggle();
        $(".section1009 .social_icons").toggle();
        $(".section1009 .form_wrapper").show();
        $(".section1009 .all_forms").show()
    });
    $("body").on("click", ".popup_form", function (a) {
        0 === $(a.target).closest(".popup_form_inner").length && ($(this).siblings(".btn1").hasClass("open_card_was") && $(this).siblings(".btn1").addClass("open_card"), $(".popup_form").hide(), $("body").removeClass("modal"))
    });
    $("body").on("mouseup", "#wrapper", function (a) {
        var c = $(".section1009 .section_inner > .form_wrapper");
        0 === c.has(a.target).length && c.hide()
    });
    $("body").on("mouseup", "#wrapper",
        function (a) {
            var c = $(".section1009 .all_forms");
            0 === c.has(a.target).length && c.hide()
        });
    $("body").on("mouseup", "#wrapper", function (a) {
        var c = $(" .section1009 .section_inner > .social_icons");
        0 === c.has(a.target).length && c.hide()
    });
    $("body").on("click", ".popup_thanks", function (a) {
        0 === $(a.target).closest(".popup_thanks_inner").length && $(".popup_thanks").hide()
    });
    $(".section153").size() && $(".section153").each(function () {
        SetVideoBG($(this))
    });
    $(".section155").size() && $(".section155").each(function () {
        SetVideoBG($(this))
    });
    $(".section52").size() && $(".section52 .logo").hover(function () {
        $(this).children("img").removeClass("grayscale")
    }, function () {
        $(this).children("img").addClass("grayscale")
    });
    $(".section19").size() && $(".section19 .policy").click(function () {
        $("#policy").remove();
        $("body").append('<div id="policy">\n\t\t\t\t<div class="close  close_x">X</div>\n\t\t\t\t<h1>\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</h1>\n\t\t\t\t<p>\n\t\t\t\t\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u0412\u0430\u0448\u0435 \u043f\u0440\u0430\u0432\u043e \u0438 \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438, \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0412\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439.\n\t\t\t\t\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0412\u0430\u0448\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438.\n\t\t\t\t\u041f\u043e\u0434 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0430\u044f\u0441\u044f \u043a \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0438\u043c\u044f, \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b (\u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b) \u0438 \u0438\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043e\u0442\u043d\u043e\u0441\u0438\u043c\u044b\u0435 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u043e\u0442 27 \u0438\u044e\u043b\u044f 2006 \u0433\u043e\u0434\u0430 \u2116 152-\u0424\u0417 \u00ab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\u00bb \u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.\n\t\t\t\t\u0426\u0435\u043b\u044c\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0443\u0441\u043b\u0443\u0433\u0430\u0445 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438.\n\t\t\t\t\u0415\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b? \u041f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c \u043d\u0430 ' +
            window.tobiz.owner_email + '.</p>\n\t\t\t\t<div class="close close_btn">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</div></div>');
        $("#policy .close_x, #policy .close_btn").click(function () {
            $("#policy").remove()
        })
    });
    $(".section119").size() && $(".section119 .policy").click(function () {
        $("#policy").remove();
        $("body").append('<div id="policy">\n\t\t\t\t<div class="close  close_x">X</div>\n\t\t\t\t<h1>\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</h1>\n\t\t\t\t<p>\n\t\t\t\t\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u0443\u0432\u0430\u0436\u0430\u0435\u0442 \u0412\u0430\u0448\u0435 \u043f\u0440\u0430\u0432\u043e \u0438 \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438, \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0412\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439.\n\t\t\t\t\u0420\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043a\u0438 \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u0430\u0439\u0442\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u0412\u0430\u0448\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0432\u0430\u0448\u0438\u0445 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438.\n\t\t\t\t\u041f\u043e\u0434 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0430\u044f\u0441\u044f \u043a \u0441\u0443\u0431\u044a\u0435\u043a\u0442\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0438\u043c\u044f, \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b (\u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b) \u0438 \u0438\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043e\u0442\u043d\u043e\u0441\u0438\u043c\u044b\u0435 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u043c \u043e\u0442 27 \u0438\u044e\u043b\u044f 2006 \u0433\u043e\u0434\u0430 \u2116 152-\u0424\u0417 \u00ab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\u00bb \u043a \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.\n\t\t\t\t\u0426\u0435\u043b\u044c\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0443\u0441\u043b\u0443\u0433\u0430\u0445 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438.\n\t\t\t\t\u0415\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b? \u041f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c \u043d\u0430 ' +
            window.tobiz.owner_email + '.</p>\n\t\t\t\t<div class="close close_btn">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</div></div>');
        $("#policy .close_x, #policy .close_btn").click(function () {
            $("#policy").remove()
        })
    });
    $("body").on("click", ".section119 .policy2", function () {
        $(this).parent().parent().children(".policy2_popup").toggle()
    });
    $("body").on("click", ".product_card", function () {
        $(this).parent().parent().children(".extra_info_block_wrapper").eq($(this).data("id")).is(":visible") ? $(this).parent().parent().children(".extra_info_block_wrapper").hide() :
            ($(this).parent().parent().children(".extra_info_block_wrapper").hide(), $(this).parent().parent().children(".extra_info_block_wrapper").eq($(this).data("id")).show(), $("body").addClass("modal"));
        var a = $(this).closest(".section");
        a.hasClass("section1130") && 1 == tobiz.editor && (a = a.data("id"), window.tobiz.slider1130array[a] = $(this).closest(".arr1").data("varBoxId"))
    });
    $("body").on("click", ".extra_info_block .close", function () {
        $(this).parent().parent().hide();
        $("body").removeClass("modal")
    });
    $("body").on("click",
        "#basket_form_close", function () {
            $("body").removeClass("modal")
        });
    $("body").on("click", ".btn_text2", function () {
        $(this).parent().parent().hide();
        $("body").removeClass("modal")
    });
    $("body").on("click", ".btn1x", function () {
        $("body").removeClass("modal")
    });
    $("body").on("change", ".section .field_input_file input", function (a) {
        console.log($(this).prop("files")[0].name);
        $(this).parent().parent().children(".field_input_file_name").remove();
        $(this).parent().parent().append('<div class="field_input_file_name">' +
            $(this).prop("files")[0].name + "</div>")
    });
    $("body").on("click", ".extra_info_block_wrapper", function (a) {
        0 === $(a.target).closest(".extra_info_block").length && "undefined" === typeof window.tobiz.editor && ($(this).siblings().children(".btn1").hasClass("open_card_was") && $(this).siblings().children(".btn1").addClass("open_card"), $(".extra_info_block_wrapper").hide(), $("body").removeClass("modal"))
    });
    $(".section143 .overlay_image_box, .section334 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section1144 .overlay_image_box, .section148 .overlay_image_box, .section147 .overlay_image_box, .section313 .overlay_image_box, .section315 .overlay_image_box, .section128 .overlay_image_box, .section1152 .overlay_image_box, .section1153 .overlay_image_box, .section146 .overlay_image_box, .section1145 .overlay_image_box, .section1155 .overlay_image_box, .section2156 .overlay_image_box, .section2157 .overlay_image_box ").size() &&
    $(".section143 .overlay_image_box, .section334 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section1144 .overlay_image_box, .section148 .overlay_image_box, .section147 .overlay_image_box, .section313 .overlay_image_box, .section315 .overlay_image_box, .section128 .overlay_image_box, .section1152 .overlay_image_box, .section1153 .overlay_image_box, .section146 .overlay_image_box, .section1145 .overlay_image_box, .section1155 .overlay_image_box, .section2156 .overlay_image_box, .section2157 .overlay_image_box ").click(function () {
        if ("" !=
            $(this).attr("data-link") && "undefined" != $(this).attr("data-link")) return console.log($(this).attr("data-link")), 1 == parseInt($(this).attr("data-link-target")) ? window.open($(this).attr("data-link"), "_blank") : window.open($(this).attr("data-link"), "_self"), !1
    });
    if ($(".link_on.image1, .link_on.image2, .link_on.s_image").size()) $("body").on("click", ".link_on.image1, .link_on.image2, .link_on.s_image", function () {
        console.log(121);
        if ("" != $(this).attr("data-link") && "undefined" != $(this).attr("data-link")) return $(this).parents(".section").hasClass("get_item_from_category") ?
            $(this).siblings(".gotoitempage").click() : 1 == parseInt($(this).attr("data-link-target")) ? window.open($(this).attr("data-link"), "_blank") : window.open($(this).attr("data-link"), "_self"), !1
    });
    $("body").on("submit", ".section1117 form.search", function (a) {
        a.preventDefault();
        if (window.tobiz.editor) return !1;
        var c = $(this).closest(".section"), e = "", b = $(this).children('input[type="search"]').val();
        $(this).parents(".section").hasClass("search_in_page") ? (a = $(".arr1 .title1"), a.map(function () {
            return $.trim($(this).text())
        }).get(),
            c.find(".find_popup").hide(), $.each(a, function (a, f) {
            $(this).parents(".arr1").removeClass("finded_in_page");
            -1 !== $.trim($(this).text()).toLowerCase().indexOf(b.toLowerCase()) && $(this).parents(".arr1").addClass("finded_in_page");
            0 == $(".arr1.finded_in_page").length && c.find(".find_popup").show().text("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")
        }), 0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({scrollTop: $(".finded_in_page").offset().top},
            1E3)) : $.ajax({
            url: "/search.php",
            dataType: "json",
            method: "POST",
            data: {search: b},
            cache: !1,
            success: function (a) {
                e = a;
                c.find(".find_popup").empty();
                var b = "";
                $.each(e, function (a, d) {
                    b += '<div class="find_item"><a href="' + d.link + '" target="_blank">' + d.title + "</a><p>" + d.description + "</p></div>"
                });
                c.find(".find_popup").append(b);
                "" == b && c.find(".find_popup").append("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.");
                c.find(".find_popup").fadeIn();
                c.find(".find_popup").prepend('<div class="result_title">\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430</div><div class="close"></div>')
            }
        })
    });
    $("body").on("submit", ".section120 form.search", function (a) {
        a.preventDefault();
        if (window.tobiz.editor) return !1;
        var c = $(this).closest(".section"), e = "", b = $(this).children('input[type="search"]').val();
        $(this).parents(".section").hasClass("search_in_page") ? (a = $(".arr1 .title1"), c.find(".find_popup").hide(), a.map(function () {
            return $.trim($(this).text())
        }).get(), $.each(a, function (a, f) {
            $(this).parents(".arr1").removeClass("finded_in_page");
            -1 !== $.trim($(this).text()).toLowerCase().indexOf(b.toLowerCase()) &&
            $(this).parents(".arr1").addClass("finded_in_page");
            0 == $(".arr1.finded_in_page").length && c.find(".find_popup").show().text("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")
        }), 0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({scrollTop: $(".finded_in_page").offset().top}, 1E3)) : $.ajax({
            url: "/search.php", dataType: "json", method: "POST", data: {search: b}, cache: !1, success: function (a) {
                e = a;
                c.find(".find_popup").empty();
                var b = "";
                $.each(e, function (a,
                                    d) {
                    b += '<div class="find_item"><a href="' + d.link + '" target="_blank">' + d.title + "</a><p>" + d.description + "</p></div>"
                });
                c.find(".find_popup").append(b);
                "" == b && c.find(".find_popup").append("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.");
                c.find(".find_popup").fadeIn();
                c.find(".find_popup").prepend('<div class="result_title">\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430</div><div class="close"></div>')
            }
        })
    });
    $("body").on("submit", ".section1120 form.search, .section2120 form.search", function (a) {
        a.preventDefault();
        if (window.tobiz.editor) return !1;
        var c = $(this).closest(".section"), e = "", b = $(this).children('input[type="search"]').val();
        $(this).parents(".section").hasClass("search_in_page") ? (a = $(".arr1 .title1"), c.find(".find_popup").hide(), a.map(function () {
            return $.trim($(this).text())
        }).get(), $.each(a, function (a, f) {
            $(this).parents(".arr1").removeClass("finded_in_page");
            -1 !== $.trim($(this).text()).toLowerCase().indexOf(b.toLowerCase()) &&
            $(this).parents(".arr1").addClass("finded_in_page");
            0 == $(".arr1.finded_in_page").length && c.find(".find_popup").show().text("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")
        }), 0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({scrollTop: $(".finded_in_page").offset().top}, 1E3)) : $.ajax({
            url: "/search.php", dataType: "json", method: "POST", data: {search: b}, cache: !1, success: function (a) {
                e = a;
                c.find(".find_popup").empty();
                var b = "";
                $.each(e, function (a,
                                    d) {
                    b += '<div class="find_item"><a href="' + d.link + '" target="_blank">' + d.title + "</a><p>" + d.description + "</p></div>"
                });
                c.find(".find_popup").append(b);
                "" == b && c.find(".find_popup").append("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.");
                c.find(".find_popup").fadeIn();
                c.find(".find_popup").prepend('<div class="result_title">\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430</div><div class="close"></div>')
            }
        })
    });
    $("body").on("submit", ".section119 form.search", function (a) {
        a.preventDefault();
        if (window.tobiz.editor) return !1;
        var c = $(this).closest(".section"), e = "", b = $(this).children('input[type="search"]').val();
        $(this).parents(".section").hasClass("search_in_page") ? (a = $(".arr1 .title1"), c.find(".find_popup").hide(), a.map(function () {
            return $.trim($(this).text())
        }).get(), $.each(a, function (a, f) {
            $(this).parents(".arr1").removeClass("finded_in_page");
            -1 !== $.trim($(this).text()).toLowerCase().indexOf(b.toLowerCase()) &&
            $(this).parents(".arr1").addClass("finded_in_page");
            0 == $(".arr1.finded_in_page").length && c.find(".find_popup").show().text("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")
        }), 0 != $(".arr1.finded_in_page").length && $("html,body").stop().animate({scrollTop: $(".finded_in_page").offset().top}, 1E3)) : $.ajax({
            url: "/search.php", dataType: "json", cache: !1, data: {search: b}, success: function (a) {
                e = a;
                c.find(".find_popup").empty();
                var b = "";
                $.each(e, function (a, d) {
                    b += '<div class="find_item"><a href="' +
                        d.link + '" target="_blank">' + d.title + "</a><p>" + d.description + "</p></div>"
                });
                c.find(".find_popup").append(b);
                "" == b && c.find(".find_popup").append("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.");
                c.find(".find_popup").fadeIn();
                c.find(".find_popup").prepend('<div class="result_title">\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430</div><div class="close"></div>')
            }
        })
    });
    $("body").on("click", ".find_popup .close", function () {
        $(this).parent().fadeOut()
    });
    $(".section41 .overlay_image_box, .section42 .overlay_image_box, .section43 .overlay_image_box, .section44 .overlay_image_box, .section45 .overlay_image_box, .section46 .overlay_image_box, .section47 .overlay_image_box, .section48 .overlay_image_box").size() && $(".section41 .overlay_image_box, .section42 .overlay_image_box, .section43 .overlay_image_box, .section44 .overlay_image_box, .section45 .overlay_image_box, .section46 .overlay_image_box, .section47 .overlay_image_box, .section48 .overlay_image_box").click(function () {
        if ($(this).closest(".section").hasClass("img_zoom")) {
            var a =
                "/img/800x600/" + $(this).parent().children().attr("src").split("/")[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + a + ')"></div><div id="img_zoomer_close"></div></div>')
        }
    });
    $(".section141 .overlay_image_box,  .section147 .overlay_image_box, .section142 .overlay_image_box, .section1157 .overlay_image_box,  .section146 .overlay_image_box,  .section315 .overlay_image_box, .section315 img ").size() &&
    $(".section141 .overlay_image_box,  .section147 .overlay_image_box, .section142 .overlay_image_box, .section1157 .overlay_image_box,  .section146 .overlay_image_box,  .section315 .overlay_image_box, .section315 img ").click(function () {
        if ($(this).closest(".section").hasClass("img_zoom")) {
            var a = $(this).parent().children().attr("src");
            console.log("xxx");
            a = "/img/800x600/" + a.split("/")[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' +
                a + ')"></div><div id="img_zoomer_close"></div></div>')
        }
    });
    if ($(".overlay_image_box").parent().hasClass("img_zoom") || $(".image_box").hasClass("img_zoom")) {
        var A = function () {
            var a = setTimeout(function () {
                w.show()
            }, 400);
            z ? (v.attr("src", p[n]).load(function () {
                clearTimeout(a);
                w.hide()
            }), v.attr("src", p[n])) : H.attr("src", p[n]).load(function () {
                w.hide();
                v.fadeOut(100, function () {
                    clearTimeout(a);
                    v.attr("src", p[n]).fadeIn(400)
                })
            })
        }, I = function () {
            $("#popup_img").fadeOut(100, function () {
                $("#popup_img").remove()
            })
        }, J =
            function () {
                --n;
                0 > n && (n = p.length - 1);
                z = !1;
                A()
            }, B = function () {
            ++n;
            n + 1 > p.length && (n = 0);
            z = !1;
            A()
        };
        $(window).resize(function () {
            $("#popup_img_wrap img").css("max-height", .98 * $(window).height())
        });
        var n, w, z, H, v, p = [];
        $(".section .img_zoom").click(function (a) {
            a.stopPropagation();
            "" == $(this).children(".overlay_image_box").data("link") && (p.length = 0, ($(this).parent().hasClass("item") ? $(this).parent().parent().find(".img_zoom") : $(this).parent().children(".img_zoom")).each(function () {
                var a = $(this).children("img").data("src") ||
                    $(this).children("img").attr("src") || $(this).children(".img").data("src");
                a.split("/");
                var e = $(this).closest(".section");
                a = a.split("/");
                var b = "800x600";
                e.hasClass("img_album") && (b = "800x600");
                e.hasClass("img_portrait") && (b = "600x840");
                if (e.hasClass("img_square") || e.hasClass("square")) b = "600x600";
                p.push("/img/" + b + "/" + a[3])
            }), n = $(this).parent().hasClass("item") ? $(this).parent().index() : $(this).index(), -1 === n && (n = 0), z = !0, $("body").append('<div id="popup_img"> \n                    <div id="preload"></div>        \n                    <img id="popup_img_hide" src=' +
                p[n] + '>\n                    <div id="popup_img_prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div> <div id="popup_img_next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>   \n                    <div id="popup_img_wrap"> <img src="' + p + '" alt=""> \n                    <div id="close_popup_img" title="\u0417\u0430\u043a\u0440\u044b\u0442\u044c"></div> \n                </div>\n                </div>'), $("#popup_img_wrap img").css("max-height", .98 * $(window).height()), $("#popup_img").fadeIn(200),
                w = $("#preload"), v = $("#popup_img_wrap img"), H = $("#popup_img_hide"), A())
        });
        $("body").on("click", "#popup_img_wrap", function (a) {
            a.stopPropagation();
            B()
        });
        $("body").on("click", "#popup_img_next", function (a) {
            a.stopPropagation();
            B()
        });
        $("body").on("click", "#popup_img_prev", function (a) {
            a.stopPropagation();
            J()
        });
        $("body").on("click", "#close_popup_img", function (a) {
            a.stopPropagation();
            I()
        });
        $("body").on("click", "#popup_img", function (a) {
            a.stopPropagation();
            I()
        });
        $(document).keydown(function (a) {
            37 === a.which && J();
            39 === a.which && B()
        });
        $(document).keydown(function (a) {
            27 === a.which && ($(".popup_wrap").fadeOut(400), $("#popup_img").fadeOut(100, function () {
                $("#popup_img").remove()
            }))
        })
    }
    if ($(".section130 .image1").size()) $(".section130").on("click", ".image1", function () {
        $(".show_extra_info").removeClass("currnet");
        $(this).addClass("currnet");
        var a = $(this).closest(".arr1"), c = 0;
        $.each(a.find(".show_extra_info"), function (a, b) {
            $(b).hasClass("currnet") && (c = a)
        });
        if ($(this).hasClass("show_extra_info")) return $(this).parent().parent().children(".extra_info_block_wrapper").eq(c).show(),
            $("body").addClass("modal"), !0;
        if ($(this).hasClass("extra_image")) return !1;
        var e = $(this).closest(".section");
        if (e.hasClass("img_zoom")) {
            var b = ($(this).children().data("src") || $(this).children().attr("src")).split("/"), d = "1600x1200";
            a = "";
            e.hasClass("img_album") && (d = "1600x1200");
            e.hasClass("img_portrait") && (d = "800x1120", a = "portret");
            e.hasClass("img_square") && (d = "1200x1200", a = "square");
            e = "/img/" + d + "/" + b[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" class="' +
                a + '" style="background-image:url(' + e + ')"></div><div id="img_zoomer_close"></div></div>')
        }
    });
    if ($(".section1600 .flexblock_wrapper_image .flexblock_content").size()) $(".section1600").on("click", '.flexblock_wrapper_image .flexblock_content[data-zoom="1"]', function () {
        var a = $(this).data("image").split("/"), c = "1600x1200", e = "";
        "album" == $(this).data("imageZoomFormat") && (c = "1600x1200");
        "portrait" == $(this).data("imageZoomFormat") && (c = "800x1120", e = "portret");
        "square" == $(this).data("imageZoomFormat") && (c = "1200x1200",
            e = "square");
        a = "/img/" + c + "/" + a[3];
        $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
        $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" class="' + e + '" style="background-image:url(' + a + ')"></div><div id="img_zoomer_close"></div></div>')
    });
    if ($(".section1158 .image1, .section1158 .image2").size()) $(".section1158").on("click", ".image1, .image2", function () {
        var a = $(this).closest(".section");
        if (a.hasClass("img_zoom")) {
            var c = ($(this).children().data("src") || $(this).children().attr("src")).split("/");
            a.hasClass("img_album");
            a = "/img/1600x1200/" + c[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" class="img_album" style="background-image:url(' + a + ')"></div><div id="img_zoomer_close"></div></div>')
        }
    });
    if ($(".section1302 .image1").size()) $(".section1302").on("click", ".image1", function () {
        $(".show_extra_info").removeClass("currnet");
        $(this).addClass("currnet");
        var a = $(this).closest(".arr1"), c = 0;
        $.each(a.find(".show_extra_info"),
            function (a, b) {
                $(b).hasClass("currnet") && (c = a)
            });
        if ($(this).hasClass("show_extra_info")) return $(this).parent().parent().children(".extra_info_block_wrapper").eq(c).show(), $("body").addClass("modal"), !0;
        if ($(this).hasClass("extra_image")) return !1;
        var e = $(this).closest(".section");
        if (e.hasClass("img_zoom")) {
            var b = ($(this).children().data("src") || $(this).children().attr("src")).split("/"), d = "1600x1200";
            a = "";
            e.hasClass("img_album") && (d = "1600x1200");
            e.hasClass("img_portrait") && (d = "800x1120", a = "portret");
            e.hasClass("img_square") && (d = "1200x1200", a = "square");
            e = "/img/" + d + "/" + b[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" class="' + a + '" style="background-image:url(' + e + ')"></div><div id="img_zoomer_close"></div></div>')
        }
    });
    if ($(".section1130 .image1").size()) $(".section1130").on("click", ".image1", function () {
        $(".show_extra_info").removeClass("currnet");
        $(this).addClass("currnet");
        var a = $(this).closest(".arr1"), c = 0;
        $.each(a.find(".show_extra_info"),
            function (a, b) {
                $(b).hasClass("currnet") && (c = a)
            });
        if ($(this).hasClass("show_extra_info")) return $(this).parent().parent().children(".extra_info_block_wrapper").eq(c).show(), $("body").addClass("modal"), !0;
        if ($(this).hasClass("extra_image")) return !1;
        var e = $(this).closest(".section");
        if (e.hasClass("img_zoom")) {
            var b = ($(this).children().data("src") || $(this).children().attr("src")).split("/"), d = "1600x1200";
            a = "";
            e.hasClass("img_album") && (d = "1600x1200");
            e.hasClass("img_portrait") && (d = "800x1120", a = "portret");
            e.hasClass("img_square") && (d = "1200x1200", a = "square");
            e = "/img/" + d + "/" + b[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" class="' + a + '" style="background-image:url(' + e + ')"></div><div id="img_zoomer_close"></div></div>')
        }
    });
    $(" .section138 .image").size() && $(".section138 .image").click(function () {
        var a = $(this).closest(".section");
        if (a.hasClass("img_zoom")) {
            var c = $(this).children().attr("src").split("/");
            a.hasClass("big_img") ? (a =
                "/img/1880x900/" + c[3], $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(), $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + a + ') ;background-repeat: no-repeat; width: 94vw; height: 45vw; max-width: 1880px; max-height: 900px;"></div><div id="img_zoomer_close"></div></div>')) : a.hasClass("wide") ? (a = "/img/1254x600/" + c[3], $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(), $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' +
                a + ') ;background-repeat: no-repeat;  width: 1254px; height: 600px;max-width: 94%; "></div><div id="img_zoomer_close"></div></div>')) : a.hasClass("fill_img") ? (a = "/img/1000x702/" + c[3], $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(), $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + a + ') ;background-repeat: no-repeat;  width: 1000px; height: 702px;max-width: 94%; "></div><div id="img_zoomer_close"></div></div>')) : (a = "/img/800x563/" + c[3], $("#img_zoomer_bg").size() &&
            $("#img_zoomer_bg").remove(), $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + a + ') ;background-repeat: no-repeat;  width: 800px; height: 560px; max-width: 94%; "></div><div id="img_zoomer_close"></div></div>'))
        }
    });
    $(".section128 .image1, .section125 .image1, .section124 .image1, .section149 .image1, .section150 .image1, .section200 .image1, .section201 .image1,.section250 .image1").size() && $(".section128 .image1, .section128 .image2, .section128 .image3,  .section125 .image1,  .section125 .image2,  .section124 .image1,  .section124 .image2,  .section124 .image3, .section149 .image1, .section149 .image2, .section149 .image3, .section150 .image1, .section150 .image2, .section200 .image1, .section200 .image2, .section200 .image3, .section200 .image4, .section201 .image1, .section201 .image2, .section201 .image3, .section201 .image4, .section201 .image5, .section250 .image1, .section250 .image2").click(function () {
        $(".show_extra_info").removeClass("currnet");
        $(this).addClass("currnet");
        var a = $(this).closest(".arr1"), c = 0;
        $.each(a.find(".show_extra_info"), function (a, b) {
            $(b).hasClass("currnet") && (c = a)
        });
        if ($(this).hasClass("show_extra_info")) return $(this).parent().parent().children(".extra_info_block_wrapper").eq(c).show(), $("body").addClass("modal"), !0;
        if ($(this).hasClass("extra_image")) return !1;
        $(this).closest(".section").hasClass("img_zoom") && (a = $(this).children().attr("src").split("/"), $(this).hasClass("image_big") ? (a = "/img/1200x1200/" + a[3], $("#img_zoomer_bg").size() &&
        $("#img_zoomer_bg").remove(), $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" class="image_big" style="background-image:url(' + a + ')"></div><div id="img_zoomer_close"></div></div>')) : (a = "/img/1600x1200/" + a[3], $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove(), $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + a + ')"></div><div id="img_zoomer_close"></div></div>')))
    });
    $(".section151 .image1").size() && $(".section151 .image1, .section151 .image2, .section151 .image3, .section151 .image4").click(function () {
        if ($(this).closest(".section").hasClass("img_zoom")) {
            var a =
                "/img/400x560/" + $(this).children().attr("src").split("/")[3];
            $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove();
            $("body").append('<div id="img_zoomer_bg"><div id="img_zoomer" class="portret" style="background-image:url(' + a + ')"></div><div id="img_zoomer_close" class="portret"></div></div>')
        }
    });
    $("body").on("click", "#img_zoomer_bg ,#img_zoomer_clocse", function () {
        $("#img_zoomer_bg").size() && $("#img_zoomer_bg").remove()
    });
    $(".btn1, .btn2, .btn3, .btn4,  .btn5, .btn6, .btn1x, .btn2x, .btn3x, .btn4x,  .btn5x,  .btn6x").each(function () {
        $(this).css("background-color")
    });
    window.basket = {
        status: 0, getData: function () {
            var a = JSON.parse(localStorage.getItem("basket"));
            return null == a ? [] : a
        }, saveData: function (a) {
            try {
                localStorage.setItem("basket", JSON.stringify(a))
            } catch (c) {
                c == QUOTA_EXCEEDED_ERR && alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")
            }
        }, addItem: function (a) {
            var c = this.getData(), e = !1;
            $.each(c, function (b, d) {
                d.title == a.title &&
                1 * d.price == 1 * a.price && (e = !0, "undefined" === typeof d.quantity ? d.quantity = 1 : (d.quantity = parseInt(d.quantity), d.quantity++), d.price *= 1)
            });
            e || c.push(a);
            this.saveData(c);
            this.renderForm();
            this.renderBtn();
            this.showBtn()
        }, removeItem: function (a) {
            var c = this.getData(), e = !1;
            if (null == a.price || "NaN" == a.price || "null" == a.price) a.price = 0;
            c && $.each(c, function (b, d) {
                if (e) return !0;
                if (null == d.price || "NaN" == d.price || "null" == d.price) d.price = 0;
                d.title == a.title && d.price == a.price && (c.splice(b, 1), e = !0)
            });
            this.saveData(c)
        },
        updateItem: function (a) {
            var c = this.getData(), e = !1;
            c && $.each(c, function (b, d) {
                if (e) return !0;
                d.title == a.title && 1 * d.price == 1 * a.price && (d.quantity = a.quantity, e = !0);
                d.price *= 1
            });
            this.saveData(c)
        }, clean: function () {
            this.saveData([])
        }, countItems: function () {
            return this.getData().length
        }, countSum: function () {
            var a = 0;
            $.each(this.getData(), function (c, e) {
                a += parseInt(e.quantity) * parseFloat(e.price)
            });
            return a = 1 * a.toFixed(2)
        }, btnEventListener: function () {
            var a = this;
            $("body").on("click", "#basket_btn", function () {
                a.showForm();
                $("body").addClass("modal")
            })
        }, renderBtn: function () {
            $("#basket_btn").remove();
            0 < this.countItems() && $("body").append('<div id="basket_btn"  style="display:none"><i class="material-icons">shopping_basket</i> \u041a\u043e\u0440\u0437\u0438\u043d\u0430 (' + this.countItems() + ")</div>");
            $("#basket_btn").addClass("animate");
            this.init()
        }, hideBtn: function () {
            $("#basket_btn").hide()
        }, showBtn: function () {
            $("#basket_btn").show()
        }, updateForm: function () {
            if (null !== window.tobiz.basket_conf && "undefined" !== typeof window.tobiz.basket_conf) {
                var a =
                    window.tobiz.basket_conf, c = 0, e = 1, b = "";
                if ("undefined" !== typeof a.basket_free_delivery) {
                    var d = a.basket_free_delivery_from;
                    d = parseFloat(d);
                    d = 1 * d.toFixed(2);
                    this.countSum() > d ? ($("#basket_delivery").html("\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f"), $('#basket_make_order input[name="delivery"]').val("\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430")) : ($("#basket_delivery").html("\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: " +
                        a.basket_delivery_price + "                        <div>\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u0430\u0437\u0435 \u043e\u0442 " + a.basket_free_delivery_from + "</div>\n                    "), c = 1 * a.basket_delivery_price, $('#basket_make_order input[name="pickup"]').prop("checked") && (c = 0, $("#basket_delivery").html("")), $('#basket_make_order input[name="delivery"]').val("\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 " +
                        c))
                }
                if ("undefined" !== typeof a.basket_promo) {
                    $('#basket_make_order input[name="promo_code"]').val("");
                    d = $("#promo_code").val();
                    d = d.trim();
                    d = d.toUpperCase();
                    var f = a.basket_promo_code;
                    f = f.trim();
                    f = f.toUpperCase();
                    f == d && (e = 1 - a.basket_promo_discount / 100, b = this.countSum() * (a.basket_promo_discount / 100), b = 1 * b.toFixed(2), b = '<span class="promo">\u041a\u043e\u0434 \u043f\u0440\u0438\u043d\u044f\u0442! \u0421\u043a\u0438\u0434\u043a\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442: ' + b + "</span><br />",
                        $('#basket_make_order input[name="promo_code"]').val(d))
                }
                c = this.countSum() * e + c;
                c = 1 * c.toFixed(2);
                $("#basket_form_itogo").html(b + " \u0418\u0442\u043e\u0433\u043e: <span>" + c + "</span>");
                $('#basket_make_order input[name="amount"]').val(c)
            }
        }, formEventListener: function () {
            var a = this;
            $("body").on("click", "#basket_form_close", function () {
                a.hideForm();
                $("body").removeClass("modal")
            });
            $("body").on("click", "#basket_left .remove", function () {
                var c = $(this).parent().children(".title").text(), e = $(this).parent().children(".price").text();
                a.removeItem({title: c, price: e});
                a.renderForm();
                a.showForm();
                a.updateForm()
            });
            $("body").on("change", '#basket_make_order input[name="pickup"]', function () {
                $(this).prop("checked") ? $('#basket_make_order textarea[name="address"]').prop("required", !1) : $('#basket_make_order textarea[name="address"]').prop("required", !0);
                a.updateForm()
            });
            $("body").on("keyup", "#basket_left .quantity input", function (c) {
                this.value = this.value.replace(/\D/gi, "").replace(/^0+/, "");
                "" == this.value && (this.value = 0);
                var e = $(this).parent().parent().children(".title").text();
                c = $(this).parent().parent().children(".price").text();
                var b = $(this).val();
                e = {title: e, price: c, quantity: b};
                c *= parseInt(b);
                c = 1 * c.toFixed(2);
                $(this).parent().parent().children(".itogo").text(c);
                a.updateItem(e);
                $('#basket_make_order textarea[name="order"]').text(JSON.stringify(a.getData()));
                $("#basket_form_itogo").html("\u0418\u0442\u043e\u0433\u043e: <span>" + a.countSum() + "</span>");
                $('#basket_make_order input[name="amount"]').val(a.countSum());
                a.updateForm()
            });
            $("body").on("keyup", "#promo_code", function (c) {
                a.updateForm()
            });
            $("body").on("click", "#basket_continue", function (c) {
                a.hideForm()
            })
        }, renderThanks: function () {
            $("#basket_bg_thanks").remove();
            $("body").append('<div id="basket_bg_thanks">\n                    <div id="basket_thanks_inner">\n\t\t\t\t\t\t<div class="basket_thanks_close">X</div>\n                            <div class="basket_thanks_title">\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0443!</div>\n                            <div class="basket_thanks_text">\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430. \u0421\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.</div>\n                    </div>\n                </div>')
        },
        renderForm: function () {
            $("#basket_form_bg").remove();
            $("body").append('<div id="basket_form_bg" style="display:none">\n                    <div id="basket_form_inner">\n                        <div id="basket_form_close">X</div>\n                        <div id="basket_left"></div>\n                        <div id="basket_right"></div>\n                        <div class="clear"></div>\n                    </div>\n                </div>');
            var a = this.getData();
            $("#basket_left").append('<div class="item caption">\n                        <div class="image">\u0424\u043e\u0442\u043e</div>\n                        <div class="title">\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435</div>\n                        <div class="quantity">\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</div>\n                        <div class="price">\u0426\u0435\u043d\u0430, \u0437\u0430 \u0435\u0434.</div>\n                        <div class="itogo">\u0426\u0435\u043d\u0430</div>\n                        <div class="clear"></div>\n                    </div>');
            $.each(a, function (a, b) {
                var d = "";
                "" != b.image && (d = '<img src="' + b.image + '" />');
                var c = b.price * b.quantity;
                c = 1 * c.toFixed(2);
                $("#basket_left").append('<div class="item" data-id="' + a + '">\n                            <div class="image">' + d + '</div>\n                            <div class="title">' + b.title + '</div>\n                            <div class="quantity"><input type="numper" value="' + b.quantity + '" /></div>\n                            <div class="price">' + b.price + '</div>\n                            <div class="itogo">' +
                    c + '</div>\n                            <div class="remove"><i class="fa fa-trash"></i></div>\n                            <div class="clear"></div>\n                        </div>')
            });
            if (null !== window.tobiz.basket_conf && "undefined" !== typeof window.tobiz.basket_conf && "undefined" !== typeof window.tobiz.basket_conf.basket_extra) {
                console.log("test456");
                a = window.tobiz.basket_conf;
                "undefined" !== typeof a.basket_promo && $("#basket_left").append('<div id="basket_promo">\u0415\u0441\u0442\u044c \u043f\u0440\u043e\u043c\u043e-\u043a\u043e\u0434? <input type="text" name="promo_code" id="promo_code" /> </div>');
                if ("undefined" !== typeof a.basket_free_delivery) {
                    var c = a.basket_free_delivery_from;
                    c = parseFloat(c);
                    c = 1 * c.toFixed(2);
                    this.countSum() > c ? $("#basket_left").append('<div id="basket_delivery">\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f</div>') : (c = parseFloat(a.basket_delivery_price), c = 1 * c.toFixed(2), $("#basket_left").append('<div id="basket_delivery">\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438: ' +
                        c + "                                <div>\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043a\u0430\u0437\u0435 \u043e\u0442 " + a.basket_free_delivery_from + "</div>\n                            </div>"))
                }
                $("#basket_left").append('<div id="basket_form_itogo">\u0418\u0442\u043e\u0433\u043e: <span>' + this.countSum() + "</span></div>");
                $("#basket_right").append('<div id="basket_title">' + a.basket_title + "</div>");
                $("#basket_right").append('<div id="basket_make_order"><form action="handler.php" enctype="multipart/form-data" method="post">\n                            <input type="hidden" name="action" value="basket" />\n                            <input type="hidden" name="promo_code" value="" />\n                            <input type="hidden" name="delivery" value="" />\n                            <input type="hidden" name="amount" value="' +
                    this.countSum() + '" />\n                            <div><textarea name="order" style="display:none">' + JSON.stringify(this.getData()) + "</textarea></div>\n                        </form></div>");
                "undefined" !== typeof window.tobiz.basket_conf.basket_name && $("#basket_right form").append('<div><input type="text" name="user_name"  required="required" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f" /></div>');
                "undefined" !== typeof window.tobiz.basket_conf.basket_redirect && $("#basket_right form").append('<input type="hidden" name="redirect" value="' +
                    window.tobiz.basket_conf.basket_redirect_link + '"  />');
                c = "";
                "undefined" !== typeof window.tobiz.basket_conf.basket_mask && "undefined" !== typeof window.tobiz.basket_conf.basket_mask_format && (c = window.tobiz.basket_conf.basket_mask_format);
                $("#basket_right form").append('<div><input type="text" data-mask="' + c + '" name="tel"  required="required" placeholder="\u0412\u0430\u0448 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d" /></div>');
                "undefined" ===
                typeof window.tobiz.basket_conf.hide_email && $("#basket_right form").append('<div><input type="text" name="email" required="required" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail" /></div>');
                "undefined" !== typeof window.tobiz.basket_conf.basket_fio && $("#basket_right form").append('<div><input type="text" name="fio"  required="required" placeholder="\u0424\u0418\u041e \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430" /></div>');
                "undefined" !== typeof window.tobiz.basket_conf.basket_pasport &&
                $("#basket_right form").append('<div><input type="text" name="passport"  required="required" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435" /></div>');
                "undefined" !== typeof window.tobiz.basket_conf.basket_address && $("#basket_right form").append('<div><textarea type="text" name="address"  required="required" placeholder="\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"></textarea></div>');
                "undefined" !== typeof window.tobiz.basket_conf.basket_pickup && $("#basket_right form").append('<div><label><input type="checkbox" name="pickup"  value=1 /> \u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437 (\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e) </label></div>');
                "undefined" !== typeof window.tobiz.basket_conf.basket_comment && $("#basket_right form").append('<div><textarea name="comment" placeholder="\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439" ></textarea></div>');
                $("#basket_right form").append('<div><input style=" background-color:' + a.basket_btn_color + '" type="submit" value="\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437" /></div>');
                "undefined" !== typeof window.tobiz.basket_conf.basket_continue_shopping && $("#basket_make_order form").append('<div id="basket_continue">\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0438</div>');
                $("#basket_right").append('<div id="basket_descr">' +
                    a.basket_descr + "</div>")
            } else $("#basket_left").append('<div id="basket_form_itogo">\u0418\u0442\u043e\u0433\u043e: <span>' + this.countSum() + "</span></div>"), $("#basket_right").append('<div id="basket_title">\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437</div>'), a = "", "undefined" !== typeof window.tobiz.basket_conf.basket_pickup && (a = '<div><label><input type="checkbox" name="pickup"  value=1 /> \u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437 (\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e) </label></div>'),
                $("#basket_right").append('<div id="basket_make_order"><form action="handler.php" enctype="multipart/form-data" method="post">\n                                <input type="hidden" name="action" value="basket" />\n                                <input type="hidden" name="amount" value="' + this.countSum() + '" />\n                                <div><input type="text" name="email" required="required" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail" /></div>\n                                <div><input type="text" name="tel"  required="required" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d" /></div>\n                                <div><textarea name="comment" placeholder="\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 (\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439)" ></textarea></div>\n                                <div><textarea name="order" style="display:none">' +
                    JSON.stringify(this.getData()) + "</textarea></div>\n                                " + a + '\n                                <div><input type="submit" value="\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437" /></div>\n                            </form></div>'), $("#basket_make_order form").append('<div id="basket_continue">\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0438</div>');
            this.init();
            this.updateForm()
        }, hideForm: function () {
            $("#basket_form_bg").hide();
            this.renderBtn();
            this.showBtn()
        }, showForm: function () {
            $("#basket_form_bg").show();
            this.hideBtn()
        }, sendForm: function () {
        }, init: function () {
            this.status || (this.status = 1, this.formEventListener(), this.btnEventListener())
        }
    };
    0 < window.basket.countItems() && 3 <= window.tobiz.t && (window.basket.renderForm(), window.basket.renderBtn(), window.basket.showBtn(), window.basket.init());
    $("div.btn1, div.btn2, div.btn3, div.btn4,  div.btn5, div.btn6").click(function () {
        var a = $(this).closest(".section");
        if ($(this).hasClass("add_basket") &&
            3 <= window.tobiz.t) {
            var c = $(this).parent().find(".title1, .title2, .title3, .title4, .title5").text(),
                e = $(this).parent().find(".price1, .price2, .price3, .price4, .price5").text(),
                b = a.hasClass("section125") || a.hasClass("section126") || a.hasClass("section1130") || a.hasClass("section129") ? $(this).parent().parent().find(".image1 img, .image2 img, .image3 img, .image4 img, .image5 img, .left img").attr("src") : $(this).parent().find(".image1 img, .image2 img, .image3 img, .image4 img, .image5 img").attr("src");
            a.hasClass("section1130") && ($("body").removeClass("modal"), c = $(this).parent().siblings(".title1, .title2, .title3, .title4, .title5").text(), e = $(this).parent().siblings(".price1, .price2, .price3, .price4, .price5").text(), $(this).parent().hasClass("right") && (c = $(this).siblings(".title1").text(), e = $(this).siblings(".price1").text()));
            a = e.replace(/[^-,.0-9]/gim, "");
            a = a.replace(",", ".");
            a = parseFloat(a);
            a = 1 * a.toFixed(2);
            console.log(a);
            e = parseInt(e.replace(/\D+/g, ""));
            e = a;
            b ? (b = b.split("/"), b = "/img/100x100/" +
                b[b.length - 1]) : b = "";
            window.basket.addItem({title: c, price: e, image: b, quantity: 1});
            window.basket.renderForm();
            null !== window.tobiz.basket_conf && "undefined" !== typeof window.tobiz.basket_conf && "undefined" !== typeof window.tobiz.basket_conf.do_not_show_when_add || window.basket.showForm();
            $('#basket_make_order input[name="tel"]').each(function () {
                var a = $(this).data("mask");
                $(this).mask(a)
            })
        } else $(this).hasClass("open_card") ? ($(this).closest(".arr1").find(".extra_info_block_wrapper").show(), $(this).addClass("open_card_was"),
            $(this).removeClass("open_card")) : a.find(".arr1").size() ? a.hasClass("section312") ? $(this).closest(".arr1").find(".popup_form").show().animate({opacity: "1"}, 300) : a.hasClass("section318") || a.hasClass("section319") ? $(this).parent().find(".popup_form").show().animate({opacity: "1"}, 300) : a.hasClass("section126") ? ($(this).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({opacity: "1"}, 300), $(this).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({opacity: "1"},
            300)) : a.hasClass("section155") ? ($(this).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({opacity: "1"}, 300), $(this).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({opacity: "1"}, 300)) : a.hasClass("section1127") ? ($(this).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({opacity: "1"}, 300), $(this).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({opacity: "1"}, 300)) : a.hasClass("section1250") ? ($(this).hasClass("btn1") &&
        $(this).parent().find(".popup_form").eq(0).show().animate({opacity: "1"}, 300), $(this).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({opacity: "1"}, 300)) : a.hasClass("section129") ? ($(this).hasClass("btn1") && $(this).parent().find(".popup_form").eq(0).show().animate({opacity: "1"}, 300), $(this).hasClass("btn2") && $(this).parent().find(".popup_form").eq(1).show().animate({opacity: "1"}, 300)) : a.hasClass("section1130") ? ($(this).hasClass("btn1") && $(this).parent().siblings(".popup_form").eq(0).show().animate({opacity: "1"},
            300), $(this).hasClass("btn2") && $(this).parent().siblings(".popup_form").eq(1).show().animate({opacity: "1"}, 300)) : $(this).parent().find(".popup_form").show().animate({opacity: "1"}, 300) : a.find(".popup_form").show().animate({opacity: "1"}, 300)
    });
    $(".section1130 .btn3").click(function () {
        for (i = 0; 5 >= i; i++) if ($(this).parent().children(".extra_info" + i).size()) {
            var a = $(this).closest(".arr1").find(".btn" + i).eq(0);
            void 0 != a.attr("href") ? window.location.href = a.attr("href") : $(this).hasClass("add_basket") || a.click()
        }
    });
    $(".btn1x, .btn2x, .btn3x, .btn4x, .btn5x").click(function () {
        for (i = 0; 5 >= i; i++) if ($(this).parent().children(".extra_info" + i).size()) {
            var a = $(this).closest(".arr1").find(".btn" + i).eq(0);
            void 0 != a.attr("href") ? window.location.href = a.attr("href") : a.click()
        }
        $(".extra_info_block_wrapper").hide()
    });
    $(".btn1, .btn2, .btn3, .btn4,  .btn5, .btn6, .submit_btn, .btn1x, .btn2x, .btn3x, .btn4x,  .btn5x").hover(function () {
            if ($(this).hasClass("surround")) {
                var a = $(this).data("hcolor"), c = $(this).closest(".section");
                c = c.data("hcolor");
                var e = $(this).css("background-color");
                $(this).attr("data-color", e);
                var b = "#ffffff";
                $(this).parent().parent(".extra_info_block").size() && (c = $(this).parents(".arr1").find(".btn1").data("hcolor"));
                "rgb(255, 255, 255)" == e && (b = "#3D3D3D");
                "#ffffff" == c && (b = "#ffffff", c = "#ff6600");
                void 0 != a ? $(this).css({backgroundColor: a}) : $(this).css({backgroundColor: c});
                $(this).css({color: b, borderColor: "transparent"})
            } else $(this).hasClass("brd_animation") ? (e = $(this).css("color"), $(this).attr("data-color",
                e), $(this).css({
                backgroundColor: "transparent",
                color: e
            })) : (c = $(this).closest(".section"), c = c.data("hcolor"), e = $(this).css("color"), $(this).attr("data-color", e), a = $(this).data("hcolor"), $(this).parent().parent(".extra_info_block").size() && (c = $(this).parents(".arr1").find(".btn1").data("hcolor"), a = $(this).parents(".arr1").find(".btn1").data("hcolor")), b = void 0 !== a || "undefined" !== a ? a : c, e = " transparent", "rgb(255, 255, 255)" == e && (e = " transparent"), $(this).css({
                backgroundColor: e,
                color: b
            }));
            $(this).addClass("hover")
        },
        function () {
            if ($(this).hasClass("surround")) {
                var a = $(this).data("color");
                $(this).css({backgroundColor: a, color: "#fff"});
                "rgb(255, 255, 255)" == $(this).css("background-color") && $(this).css({backgroundColor: "#ffffff"})
            } else a = $(this).data("color"), $(this).css({color: a, backgroundColor: "transparent"});
            $(this).removeAttr("date-color");
            $(this).removeClass("hover")
        });
    setInterval(function () {
        $(".objtimer").size() && $(".objtimer").each(function () {
            var a = $(this).data("type"), c = $(this).data("dd"), e = $(this).data("dm"),
                b = $(this).data("dy");
            $(this).data("monthly");
            var d = $(this).data("weekly"), f = $(this).data("hr"), h = $(this).data("min"), g = new Date;
            if ("date" == a) var k = new Date(b, e - 1, c, f, h, 0, 0);
            "monthly" == a && (k = new Date(g.getFullYear(), g.getMonth(), c, f, h, 0, 0), g > k && (k = new Date(g.getFullYear(), g.getMonth() + 1, c, f, h, 0, 0)));
            "weekly" == a && (k = new Date(g.getFullYear(), g.getMonth(), g.getDate(), f, h, 0, 0), k.setDate(g.getDate() + (d + 7 - g.getDay()) % 7));
            "daily" == a && (k = new Date(g.getFullYear(), g.getMonth(), g.getDate(), f, h, 0, 0), g > k && (k = new Date(g.getFullYear(),
                g.getMonth(), g.getDate() + 1, f, h, 0, 0)));
            if (g > k) window.tobiz.editor ? ($(this).children(".days").text("00"), $(this).children(".hrs").text("00"), $(this).children(".min").text("00"), $(this).children(".sec").text("00")) : $(this).closest(".section").addClass("invis"); else {
                a = parseInt((k.getTime() - g.getTime()) / 1E3);
                var m = Math.floor(a / 86400), r = Math.floor((a - 86400 * m) / 3600),
                    q = Math.floor((a - 86400 * m - 3600 * r) / 60), u = Math.floor(a - 86400 * m - 3600 * r - 60 * q);
                10 > m && (m = "0" + m);
                10 > r && (r = "0" + r);
                10 > q && (q = "0" + q);
                10 > u && (u = "0" + u)
            }
            $(this).children(".days").text(m);
            $(this).children(".hrs").text(r);
            $(this).children(".min").text(q);
            $(this).children(".sec").text(u)
        })
    }, 1E3);
    setInterval(function () {
        $(".objtimer_new").size() && $(".objtimer_new").each(function () {
            var a = $(this).data("type"), c = $(this).data("dd"), e = $(this).data("dm"), b = $(this).data("dy");
            $(this).data("monthly");
            var d = $(this).data("weekly"), f = $(this).data("hr"), h = $(this).data("min"), g = new Date;
            if ("date" == a) var k = new Date(b, e - 1, c, f, h, 0, 0);
            "monthly" == a && (k = new Date(g.getFullYear(), g.getMonth(), c, f, h, 0, 0), g >
            k && (k = new Date(g.getFullYear(), g.getMonth() + 1, c, f, h, 0, 0)));
            "weekly" == a && (k = new Date(g.getFullYear(), g.getMonth(), g.getDate(), f, h, 0, 0), k.setDate(g.getDate() + (d + 7 - g.getDay()) % 7));
            "daily" == a && (k = new Date(g.getFullYear(), g.getMonth(), g.getDate(), f, h, 0, 0), g > k && (k = new Date(g.getFullYear(), g.getMonth(), g.getDate() + 1, f, h, 0, 0)));
            if (g > k) window.tobiz.editor ? ($(this).children().children(".days").text("00"), $(this).children().children(".hrs").text("00"), $(this).children().children(".min").text("00"), $(this).children().children(".sec").text("00")) :
                $(this).closest(".section").addClass("invis"); else {
                a = parseInt((k.getTime() - g.getTime()) / 1E3);
                var m = Math.floor(a / 86400), r = 14 * m, q = Math.floor((a - 86400 * m) / 3600), u = 17.5 * q,
                    x = Math.floor((a - 86400 * m - 3600 * q) / 60), n = 7 * x,
                    l = Math.floor(a - 86400 * m - 3600 * q - 60 * x), p = 7 * l;
                10 > m && (m = "0" + m);
                30 < m && (r = 420);
                10 > q && (q = "0" + q);
                10 > x && (x = "0" + x);
                10 > l && (l = "0" + l)
            }
            $(this).children().children(".days").text(m);
            $(this).children(".day_block").children().children(".outer").css({"stroke-dashoffset": 421 - r});
            $(this).children().children(".hrs").text(q);
            $(this).children(".hour_block").children().children(".outer").css({"stroke-dashoffset": 421 - u});
            $(this).children().children(".min").text(x);
            $(this).children(".min_block").children().children(".outer").css({"stroke-dashoffset": 421 - n});
            $(this).children().children(".sec").text(l);
            $(this).children(".sec_block").children().children(".outer").css({"stroke-dashoffset": 421 - p})
        })
    }, 1E3);
    setInterval(function () {
            "undefined" != typeof ymaps && $("[data-map-obj]").size() && $("[data-map-obj]").each(function (a) {
                var c = JSON.parse(_.unescape($(this).attr("data-map-obj"))),
                    e = JSON.parse(_.unescape($(this).attr("data-map-center"))),
                    b = parseInt($(this).attr("data-scroll_off"));
                $(this).removeAttr("data-map-obj");
                $(this).removeAttr("data-map-center");
                $(this).removeAttr("data-scroll_off");
                var d = $(this).children(".map_inner")[0];
                ymaps.ready(function () {
                    var a = new ymaps.Map(d, e);
                    e.controls = ["zoomControl"];
                    b && a.behaviors.disable("scrollZoom");
                    _.each(c, function (b, d) {
                        _.isArray(b.coordinates) && (b = new ymaps.Placemark(b.coordinates, {}, {
                            preset: "islands#icon",
                            iconColor: b.color
                        }), a.geoObjects.add(b))
                    })
                })
            })
        },
        200);
    setInterval(function () {
        if ($(".fixed_top").size()) {
            var a = 0, c = 0, e = 100 + $(".fixed_top").size();
            $(".fixed_top:visible").each(function () {
                a += $(this).outerHeight();
                $(this).css({top: c + "px"});
                $(this).css({zIndex: e});
                c += $(this).outerHeight();
                e--
            });
            $("#wrapper").css({paddingTop: a + "px"})
        } else $("#wrapper").css({paddingTop: "0px"})
    }, 200);
    $(window).scroll(function () {
        $(".fixed_top").css({left: "-" + $(window).scrollLeft() + "px"})
    });
    "?rk_pay=success" == window.location.search && (alert("\u041e\u043f\u043b\u0430\u0442\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430!"),
        window.location.search = "");
    "?rk_pay=fail" == window.location.search && (alert("\u041e\u043f\u043b\u0430\u0442\u0430 \u043d\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430!"), window.location.search = "");
    $(".section302 .left.style2 ul li a, .section302 .left.style4 ul li a").hover(function () {
        $(this).parent().addClass("hover")
    }, function () {
        $(this).parent().removeClass("hover")
    });
    $("body").on("click", ".section304 .spoiler_toggle", function () {
        $(this).parent().hasClass("close") && $(this).text("-");
        $(this).parent().hasClass("open") && $(this).text("+");
        $(this).parent().toggleClass("open");
        $(this).parent().toggleClass("close")
    });
    $("body").on("click", ".section305 .spoiler_toggle", function () {
        $(this).parent().hasClass("close") && $(this).text("-");
        $(this).parent().hasClass("open") && $(this).text("+");
        $(this).parent().toggleClass("open");
        $(this).parent().toggleClass("close")
    });
    $("body").on("click", ".section304 .spoiler_title", function () {
        "undefined" === typeof window.tobiz.editor && ($(this).parent().toggleClass("open"),
            $(this).parent().toggleClass("close"))
    });
    $("body").on("click", ".section305 .spoiler_title", function () {
        "undefined" === typeof window.tobiz.editor && ($(this).parent().toggleClass("open"), $(this).parent().toggleClass("close"))
    });
    $(".section304 .spoiler").size() && "undefined" === typeof window.tobiz.editor && $(".section304 .spoiler").each(function () {
        $(this).removeClass("open");
        $(this).addClass("close")
    });
    $(".section305 .spoiler").size() && "undefined" === typeof window.tobiz.editor && $(".section305 .spoiler").each(function () {
        $(this).removeClass("open");
        $(this).addClass("close")
    });
    $(".extra_info_block .extra_image").size() && "undefined" === typeof window.tobiz.editor && $(".extra_info_block .extra_image").click(function (a) {
        a = "/img/320x320/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", a)
    });
    $(".extra_info_block.s300 .extra_image").size() && "undefined" === typeof window.tobiz.editor && $(".extra_info_block.s300 .extra_image").click(function (a) {
        a = "/img/320x464/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", a)
    });
    $(".extra_info_block.s150 .extra_image").size() && "undefined" === typeof window.tobiz.editor && $(".extra_info_block.s150 .extra_image").click(function (a) {
        a = "/img/320x220/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", a)
    });
    $(".extra_images_big .extra_info_block.s200 .extra_image").size() && "undefined" === typeof window.tobiz.editor && $(".extra_images_big .extra_info_block.s200 .extra_image").click(function (a) {
        a =
            "/img/600x600/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", a)
    });
    $(".extra_images_big .extra_info_block.s300 .extra_image").size() && "undefined" === typeof window.tobiz.editor && $(".extra_images_big .extra_info_block.s300 .extra_image").click(function (a) {
        a = "/img/400x560/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", a)
    });
    $(".extra_images_big .extra_info_block.s150 .extra_image").size() &&
    "undefined" === typeof window.tobiz.editor && $(".extra_images_big .extra_info_block.s150 .extra_image").click(function (a) {
        a = "/img/800x600/" + $(this).children("img").attr("src").split("/")[3];
        $(this).parent().parent().children("img").attr("src", a)
    });
    $("body").on("mouseenter mouseleave", ".section302 li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1;
            a = $(this).position();
            var e = a.left + $(this).outerWidth(),
                b = a.top, d = $(this).outerHeight();
            $(this).closest(".section").css("background");
            var f = 0;
            f = 250;
            $(this).nextAll("li").each(function (a, g) {
                c || ($(g).hasClass("level1") ? (d = $(g).outerHeight(), $(g).show().addClass("visible").css({
                    top: b,
                    left: e,
                    width: f,
                    textAlign: "left"
                }).hover(function () {
                }), b += d - 1) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section302 .menu1", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("click",
        "li.level1 a", function (a) {
            $(this).closest(".section311") || $(this).closest(".menu1").hide()
        });
    $("body").on("mouseenter mouseleave", ".section116 li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1, e = $(this).position(), b = e.left, d = 10;
            $(this).outerHeight();
            var f = $(this).closest(".section").css("backgroundColor"), h = 0;
            h = 300;
            $(this).nextAll("li").each(function (a, k) {
                c || ($(k).hasClass("level1") ? (d +=
                    $(k).outerHeight(), 810 > $(window).width() ? $(k).show().addClass("visible").css({
                    top: d,
                    left: b,
                    background: f,
                    width: h,
                    textAlign: "left",
                    marginTop: e.top
                }) : $(k).show().addClass("visible").css({
                    top: d,
                    left: b,
                    background: f,
                    width: h,
                    textAlign: "left"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section116 .menu1", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("mouseenter mouseleave", ".section2116 li.level0",
        function (a) {
            if (window.tobiz.editor) return !0;
            if ("mouseenter" == a.type) {
                $(this).parent().find("li.level1.visible").hide().removeClass("visible");
                var c = !1;
                a = $(this).position();
                var e = a.left, b = $(this).outerHeight(), d = a.top + b - 5,
                    f = $(this).closest(".section").css("backgroundColor"), h = 0;
                h = 300;
                $(this).nextAll("li").each(function (a, b) {
                    c || ($(b).hasClass("level1") ? (0 != a && (d += $(b).outerHeight() - 1), $(b).show().addClass("visible").css({
                        top: d,
                        left: e,
                        background: f,
                        width: h,
                        textAlign: "left"
                    })) : c = !0)
                })
            }
        });
    $("body").on("mouseenter mouseleave",
        ".section2116 .menu1", function (a) {
            if (window.tobiz.editor) return !0;
            "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
        });
    $("body").on("mouseenter mouseleave", ".section107   li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1;
            a = $(this).position();
            var e = a.left;
            $(this).outerHeight();
            var b = a.top, d = $(this).closest(".section").css("backgroundColor"), f = 0;
            f = 200;
            $(this).nextAll("li").each(function (a,
                                                 g) {
                c || ($(g).hasClass("level1") ? (b += $(g).outerHeight() - 1, $(g).show().addClass("visible").css({
                    top: b,
                    left: e,
                    background: d,
                    width: f,
                    textAlign: "left",
                    paddingLeft: "16px"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section120 li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1, e = $(this).position(), b = e.left, d = 0;
            $(this).outerHeight();
            var f = $(this).closest(".section").css("backgroundColor"),
                h = 0;
            h = 250;
            $(this).nextAll("li").each(function (a, k) {
                c || ($(k).hasClass("level1") ? (d += $(k).outerHeight() - 1, 810 > $(window).width() ? $(k).show().addClass("visible").css({
                    top: d,
                    left: b,
                    background: f,
                    width: h,
                    textAlign: "left",
                    marginTop: e.top
                }) : $(k).show().addClass("visible").css({
                    top: d,
                    left: b,
                    background: f,
                    width: h,
                    textAlign: "left"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section120 .menu1", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("mouseenter mouseleave", ".section107   li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1;
            a = $(this).position();
            var e = a.left;
            $(this).outerHeight();
            var b = a.top + 5, d = $(this).closest(".section").css("backgroundColor"), f = 0;
            f = 200;
            $(this).nextAll("li").each(function (a, g) {
                c || ($(g).hasClass("level1") ? (b += $(g).outerHeight() - 1, $(g).show().addClass("visible").css({
                    top: b, left: e, background: d,
                    width: f, textAlign: "left", paddingLeft: "16px"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section107 .menu1", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("mouseenter mouseleave", ".section109   li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1;
            a = $(this).position();
            var e = a.left;
            $(this).outerHeight();
            var b = a.top + 5, d = $(this).closest(".section").css("backgroundColor"), f = 0;
            f = 200;
            $(this).nextAll("li").each(function (a, g) {
                c || ($(g).hasClass("level1") ? (b += $(g).outerHeight() - 1, $(g).show().addClass("visible").css({
                    top: b,
                    left: e,
                    background: d,
                    width: f,
                    textAlign: "left",
                    paddingLeft: "5px"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section109 .menu", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("mouseenter mouseleave",
        ".section105   li.level0", function (a) {
            if (window.tobiz.editor) return !0;
            if ("mouseenter" == a.type) {
                $(this).parent().find("li.level1.visible").hide().removeClass("visible");
                var c = !1;
                a = $(this).position();
                var e = a.left;
                $(this).outerHeight();
                var b = a.top - 2, d = $(this).closest(".section").css("backgroundColor"), f = 0;
                f = 200;
                $(this).nextAll("li").each(function (a, g) {
                    c || ($(g).hasClass("level1") ? (b += $(g).outerHeight() - 1, $(g).show().addClass("visible").css({
                            top: b,
                            left: e,
                            background: d,
                            width: f,
                            textAlign: "left",
                            paddingLeft: "16px"
                        })) :
                        c = !0)
                })
            }
        });
    $("body").on("mouseenter mouseleave", ".section105 .menu1", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("mouseenter mouseleave", ".section311   li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1;
            a = $(this).position();
            var e = a.left;
            $(this).outerHeight();
            var b = a.top + 0, d = 0;
            d = 170;
            $(this).nextAll("li").each(function (a,
                                                 h) {
                c || ($(h).hasClass("level1") ? (b += $(h).outerHeight() - 1, $(h).show().addClass("visible").css({
                    top: b,
                    left: e,
                    background: "rgba(0,0,0,0.5)",
                    width: d,
                    textAlign: "left",
                    paddingLeft: "10px"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section1156   li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1;
            a = $(this).position();
            var e = a.left;
            $(this).outerHeight();
            var b = a.top + 0, d = 0;
            d = 170;
            $(this).nextAll("li").each(function (a,
                                                 h) {
                c || ($(h).hasClass("level1") ? (b += $(h).outerHeight() - 1, $(h).show().addClass("visible").css({
                    top: b,
                    left: e,
                    background: "rgba(50,50,50,1)",
                    width: d,
                    textAlign: "left",
                    paddingLeft: "10px"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section1116   li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").hide().removeClass("visible");
            var c = !1;
            a = $(this).position();
            $(this).outerHeight();
            var e = a.top + 0, b = 0;
            b = 170;
            $(this).nextAll("li").each(function (a,
                                                 f) {
                c || ($(f).hasClass("level1") ? (e += $(f).outerHeight() - 1, $(f).show().addClass("visible").css({
                    background: "rgba(0,0,0,0)",
                    width: b,
                    textAlign: "left",
                    paddingLeft: "15px"
                })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section1117   li.level0", function (a) {
        if (window.tobiz.editor) return !0;
        if ("mouseenter" == a.type) {
            $(this).parent().find("li.level1.visible").addClass("visible");
            var c = !1;
            a = $(this).position();
            $(this).outerHeight();
            var e = a.top + 0, b = 0;
            b = 170;
            $(this).nextAll("li").each(function (a, f) {
                c || ($(f).hasClass("level1") ?
                    (e += $(f).outerHeight() - 1, $(f).show().addClass("visible").css({
                        background: "rgba(0,0,0,0)",
                        width: b,
                        textAlign: "left",
                        paddingLeft: "20px"
                    })) : c = !0)
            })
        }
    });
    $("body").on("mouseenter mouseleave", ".section1116 .menu1", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("mouseenter mouseleave", ".section311 .menu1", function (a) {
        if (window.tobiz.editor) return !0;
        "mouseleave" == a.type && $(this).find("li.level1.visible").hide().removeClass("visible")
    });
    $("body").on("click", ".section126 .img_1, .section126 .img_2 , .section126 .img_3 , .section126 .img_4 ", function () {
        var a = $(this).children("img").data("image");
        $(this).parent().parent().find(".image1").children("img").attr("src", a)
    });
    $("body").on("click", ".section129 .img_1, .section129 .img_2 , .section129 .img_3 , .section129 .img_4 ", function () {
        var a = $(this).children("img").data("image");
        $(this).parent().parent().find(".image1").children("img").attr("src", a)
    });
    $("body").on("click", ".section310 .image_box",
        function () {
            var a = $(this).children("img").data("image");
            $(this).parent().parent().parent().parent().find(".viewport").css({backgroundImage: "url(" + a + ")"})
        });
    $("body").on("click", ".section310 .iamges .go_left", function () {
        D($(this).closest(".section"), "right")
    });
    $("body").on("click", ".section310 .iamges .go_right", function () {
        D($(this).closest(".section"), "left")
    });
    $("body").on("click", ".section1155 .go_left", function () {
        E($(this).closest(".section"), "right")
    });
    $("body").on("click", ".section1155 .go_right",
        function () {
            E($(this).closest(".section"), "left")
        });
    $("body").on("click", ".section1160 .go_left", function () {
        F($(this).closest(".section"), "right")
    });
    $("body").on("click", ".section1160 .go_right", function () {
        F($(this).closest(".section"), "left")
    });
    $("body").on("click", ".section105 .menu_mobile_btn", function () {
        var a = $(this).parent().siblings(".logo_img").clone(), c = $(this).parent().siblings(".logo_text").clone(),
            e = $(this).siblings(".phone1").clone(), b = $(this).parent().siblings(".social_icons").clone();
        "underfined" != a && ($(this).siblings(".menu1").find(".logo_img").remove(), $(this).siblings(".menu1").prepend(a));
        "underfined" != c && ($(this).siblings(".menu1").find(".logo_text").remove(), $(this).siblings(".menu1").prepend(c));
        "underfined" == e || e.hasClass("hidden") || ($(this).siblings(".menu1").find(".phone1").remove(), $(this).siblings(".menu1").append(e));
        "underfined" == b || b.hasClass("hidden") || ($(this).siblings(".menu1").find(".social_icons").remove(), $(this).siblings(".menu1").append(b))
    });
    $("body").on("click",
        ".section107 .menu_mobile_btn", function () {
            var a = $(this).parent().siblings(".logo_img").clone(), c = $(this).parent().siblings(".logo_text").clone(),
                e = $(this).siblings(".phone1").clone(), b = $(this).siblings(".social_icons").clone();
            "underfined" != a && ($(this).siblings(".menu1").find(".logo_img").remove(), $(this).siblings(".menu1").prepend(a));
            "underfined" != c && ($(this).siblings(".menu1").find(".logo_text").remove(), $(this).siblings(".menu1").prepend(c));
            "underfined" == e || e.hasClass("hidden") || ($(this).siblings(".menu1").find(".phone1").remove(),
                $(this).siblings(".menu1").append(e));
            "underfined" == b || b.hasClass("hidden") || ($(this).siblings(".menu1").find(".social_icons").remove(), $(this).siblings(".menu1").append(b))
        });
    $("body").on("click", ".section116 .menu-toogler", function () {
        $(this).parent().children(".menu1").toggleClass("active");
        $("body").toggleClass("modal");
        $(this).toggleClass("active")
    });
    $("body").on("click", ".section1156 .menu-toogler", function () {
        $(this).parent().children(".menu1").toggleClass("active");
        $(this).toggleClass("active");
        $("body").toggleClass("modal")
    });
    $("body").on("click", ".section120 .menu-toogler", function () {
        $(this).parent().children(".menu1").toggle();
        $(this).parent().children(".menu1").toggleClass("active");
        $(this).closest(".section").toggleClass("menu_open");
        $("body").toggleClass("modal");
        $(this).toggleClass("active")
    });
    $("body").on("click", ".section2116 .menu-toogler", function () {
        var a = $(this).siblings(".logo").clone();
        "underfined" != a && ($(this).siblings(".menu1").find(".logo").remove(), $(this).siblings(".menu1").prepend(a));
        a = $(this).siblings(".menu2").find("li");
        $(this).siblings(".menu1").children("ul").append(a);
        $(this).parent().children(".menu_block").toggleClass("active");
        $(this).closest(".section").toggleClass("menu_open");
        $(this).toggleClass("active");
        $(this).siblings(".menu_block").toggle();
        $("body").toggleClass("modal")
    });
    $("body").on("click", ".section2120 .menu-toogler", function () {
        $(this).parent().siblings(".menu_content").toggle();
        $(this).toggleClass("active");
        $(this).closest(".section").toggleClass("menu_open");
        $(this).closest(".section").toggleClass("menu_open_new");
        $("body").toggleClass("modal")
    });
    $("body").on("click", ".section2120 .menu-toogler_fixed", function () {
        $(this).siblings(".menu_content").toggle();
        $(this).siblings(".head").toggleClass("active");
        $(this).toggleClass("active");
        $(this).closest(".section").toggleClass("menu_open_new");
        $("body").toggleClass("modal")
    });
    $("body").on("click", ".section311 .menu1 a", function (a) {
        a.stopPropagation();
        970 >= $(window).width() && $(this).closest(".menu-and-phone-and-btn").removeClass("active")
    });
    $("body").on("click", ".section311 .menu-and-phone-and-btn .clear", function (a) {
        970 >= $(window).width() && (a.preventDefault(), $("body").toggleClass("modal"), $(this).toggleClass("active"), $(this).parent().toggleClass("active"), $(this).siblings(".menu1").toggleClass("active"))
    });
    if ("undefined" === typeof window.tobiz.editor) {
        var K = function (a) {
            a = $(a).closest(".section");
            var c = a.find(".arr1"), e = a.find(".items_filter .filter_wrap");
            console.log("filterApply");
            c.show();
            a.find(".filters_nothing_to_show").remove();
            e.each(function (a, b) {
                a = $(b).data("filterType");
                var d = $(b).data("filterName"), f = $(b).data("filterExtra");
                "tag" == a && $(b).find(".filter_option_toogl").hasClass("active") && c.each(function (a, b) {
                    1 != $(b).data(d) && $(b).hide()
                });
                if ("multiselect" == a) {
                    var e = [];
                    $(b).find(".filter_options input").each(function (a, b) {
                        $(this).prop("checked") && e.push($(this).val())
                    });
                    0 < e.length && (1 == f ? c.each(function (a, b) {
                        var c = !1;
                        a = $(b).data("extraFilters");
                        $.each(a, function (a, b) {
                            b.title == d && 0 <= e.indexOf(b.value) && (c = !0)
                        });
                        0 == c &&
                        $(b).hide()
                    }) : c.each(function (a, b) {
                        -1 == e.indexOf($(b).data(d)) && $(b).hide()
                    }))
                }
                "range" == a && (e = [], $(b).find(".filter_options input").each(function (a, b) {
                    c.each(function (a, c) {
                        (a = 1 * $(c).data(d)) && (a < $(b).data("from") || a > $(b).data("to")) && $(c).hide()
                    })
                }))
            });
            var b = 0;
            c.each(function (a, c) {
                $(c).is(":visible") && b++
            });
            b || (a.find(".items_filter").after('<div class="filters_nothing_to_show">\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e. <span class="dorp_filters">\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u044b</span></div>'),
                console.log("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"))
        }, P = function (a) {
            a = $(a).closest(".section");
            var c = a.find(".arr1"), e = a.find(".items_filter .filter_wrap");
            console.log("filterClear");
            c.show();
            a.find(".filters_nothing_to_show").remove();
            e.each(function (a, d) {
                a = $(d).data("filterType");
                $(d).data("filterName");
                "tag" == a && $(d).find(".filter_option_toogl").removeClass("active");
                "multiselect" == a && $(d).find(".filter_options input").each(function (a, b) {
                    $(this).prop("checked",
                        !1)
                });
                "range" == a && $(d).find(".filter_options input").each(function (a, b) {
                    $(b).data("ionRangeSlider").update({from: $(b).data("min"), to: $(b).data("max")})
                })
            })
        };
        $(".js-range-slider").ionRangeSlider({
            skin: "modern", onChange: function (a) {
            }
        });
        $("body").on("click", ".dorp_filters", function () {
            P(this)
        });
        $("body").on("change", ".filter_options input", function () {
            K(this)
        });
        $("body").on("click", '[data-filter-type="tag"] .filter_option_toogl', function () {
            $(".filter_options").hide();
            $(this).toggleClass("active");
            K(this)
        });
        $("body").on("click", ".filter_option_toogl.has_options", function () {
            $(".filter_options").hide();
            $(this).parent().children(".filter_options").show();
            var a = $(this).parent().children(".filter_options").outerWidth() + $(this).parent().children(".filter_options").offset().left;
            console.log([a, $("body").outerWidth()]);
            a = $("body").outerWidth() - a;
            0 > a && (a -= 20, $(this).parent().children(".filter_options").css({left: a + "px"}))
        });
        $("body").on("click", ".filter_wrap", function (a) {
            a.stopPropagation()
        });
        $(document).click(function () {
            $(".filter_options").hide()
        })
    }
    $(".section.animate").size() &&
    "undefined" === typeof window.tobiz.editor && 1E3 < $(window).width() && 3 <= parseInt(window.tobiz.t) && $(".section.animate").each(function () {
        if ($(this).hasClass("section118") || $(this).hasClass("section128") || $(this).hasClass("section149") || $(this).hasClass("section124")) {
            var a = ".col_3", c = $(this).find(a), e = ".arr1";
            e = $(this).find(e);
            c.css({opacity: 0, position: "relative"});
            var b = $(this), d = b.find(".title, .sub_title");
            d.css({opacity: 0, top: "0", position: "relative"});
            $.each(e, function (b, d) {
                $(d).find(a).eq(0).css({left: "-200px"});
                $(d).find(a).eq(2).css({left: "200px"})
            });
            $(window).scroll(function () {
                $.each(c, function (a, b) {
                    if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) $(b).animate({
                        opacity: 1,
                        left: 0
                    }, 1500), d.animate({opacity: 1, top: 0}, 1500)
                })
            })
        }
        if ($(this).hasClass("section125") || $(this).hasClass("section250")) a = ".col_2", c = $(this).find(a), e = ".arr1", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }),
            b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b, d) {
            $(d).find(a).eq(0).css({left: "-200px"});
            $(d).find(a).eq(1).css({left: "200px"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1200), d.animate({opacity: 1, top: 0}, 1200)
            })
        });
        if ($(this).hasClass("section1144")) {
            var f = $(".image_box");
            console.log($(this));
            c = $(this).find(f);
            b = $(this);
            $.each(c, function (a, b) {
                $(b).css({"margin-top": 200 * a + "px", "margin-left": 20 * a + "px", opacity: "0"})
            });
            $(window).scroll(function () {
                $.each(c, function (a, b) {
                    $(window).scrollTop() + $(window).height() / 2 > $(b).parent(".images").offset().top && $(b).animate({
                        "margin-top": "0px",
                        "margin-left": 0 * a + "px",
                        opacity: "1"
                    }, 100 * a + 1E3)
                })
            })
        }
        $(this).hasClass("section1149") && (f = $(".arr1 "), console.log($(this)), c = $(this).find(f),
            b = $(this), $.each(c, function (a, b) {
            $(b).css({"margin-top": 200 * a + "px", "margin-left": 20 * a + "px", opacity: "0"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                $(window).scrollTop() + $(window).height() / 2 > $(b).parent(".items").offset().top && $(b).animate({
                    "margin-top": "0px",
                    "margin-left": 0 * a + "px",
                    opacity: "1"
                }, 200 * a + 1E3)
            })
        }));
        $(this).hasClass("section1419") && (f = $(".arr1"), console.log($(this)), c = $(this).find(f), b = $(this), $.each(c, function (a, b) {
            $(b).css({"margin-top": 200 * a + "px", "margin-left": 20 * a + "px", opacity: "0"})
        }),
            $(window).scroll(function () {
                $.each(c, function (a, b) {
                    $(window).scrollTop() + $(window).height() / 2 > $(b).parent(".section_inner").offset().top && $(b).animate({
                        "margin-top": "0px",
                        "margin-left": 0 * a + "px",
                        opacity: "1"
                    }, 200 * a + 1E3)
                })
            }));
        if ($(this).hasClass("section1250")) {
            f = $(".section1250 .btn1");
            var h = $(".section1250 .btn2");
            f.css({"margin-top": "100px", "margin-right": "200px", opacity: "0"});
            h.css({"margin-top": "100px", "margin-left": "200px", opacity: "0"});
            $(window).scroll(function () {
                $(window).scrollTop() + $(window).height() /
                2 + 100 > f.parent(".arr1").offset().top && f.animate({
                    "margin-top": "0px",
                    "margin-right": "20px",
                    opacity: "1"
                }, 1200);
                $(window).scrollTop() + $(window).height() / 2 + 100 > h.parent(".arr1").offset().top && h.animate({
                    "margin-top": "0px",
                    "margin-left": "0px",
                    opacity: "1"
                }, 1200)
            })
        }
        $(this).hasClass("section1145") && (f = $(".item"), console.log($(this)), c = $(this).find(f), b = $(this), $.each(c, function (a, b) {
            $(b).css({"margin-top": 200 * a / 2 + "px", opacity: "0"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                $(window).scrollTop() +
                $(window).height() / 2 > $(b).parent(".images").offset().top && $(b).animate({
                    "margin-top": "0px",
                    opacity: "1"
                }, 100 * a + 1500)
            })
        }));
        $(this).hasClass("section1146") && (f = $(".item"), console.log($(this)), c = $(this).find(f), b = $(this), $.each(c, function (a, b) {
            $(b).css({"margin-top": 200 * a / 2 + "px", opacity: "0"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                $(window).scrollTop() + $(window).height() / 2 > $(b).parent(".images").offset().top && $(b).animate({
                    "margin-top": "0px",
                    opacity: "1"
                }, 100 * a + 1500)
            })
        }));
        $(this).hasClass("section2158") &&
        (f = $(".anim"), console.log($(this)), c = $(this).find(f), b = $(this), $.each(c, function (a, b) {
            $(b).css({"margin-top": 200 * a / 2 + "px", opacity: "0"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                $(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top && $(b).animate({
                    "margin-top": "0px",
                    opacity: "1"
                }, 100 * a + 1500)
            })
        }));
        $(this).hasClass("section1130") && (f = $(".arr1"), console.log($(this)), c = $(this).find(f), b = $(this), $.each(c, function (a, b) {
            $(b).css({"margin-top": 200 * a / 2 + "px", opacity: "0"})
        }),
            $(window).scroll(function () {
                $.each(c, function (a, b) {
                    $(window).scrollTop() + $(window).height() / 2 > $(b).parent(".catalog_items ").offset().top && $(b).animate({
                        "margin-top": "0px",
                        opacity: "1"
                    }, 500 * a + 500)
                })
            }));
        $(this).hasClass("section307") && (a = ".col", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b, d) {
            $(d).find(a).eq(0).css({left: "-600px"});
            $(d).find(a).eq(1).css({left: "-400px"});
            $(d).find(a).eq(2).css({left: "-200px"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        }));
        $(this).hasClass("section314") && (a = ".col_3", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b, d) {
            $(d).find(a).eq(0).css({left: "-600px"});
            $(d).find(a).eq(1).css({left: "-400px"});
            $(d).find(a).eq(2).css({left: "-200px"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        }));
        $(this).hasClass("section309") && (a = ".col", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b, d) {
            $(d).find(a).eq(0).css({left: "-1000px"});
            $(d).find(a).eq(1).css({left: "-800px"});
            $(d).find(a).eq(2).css({left: "-600px"});
            $(d).find(a).eq(3).css({left: "-400px"});
            $(d).find(a).eq(4).css({left: "-200px"})
        }),
            $(window).scroll(function () {
                $.each(c, function (a, b) {
                    if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) $(b).animate({
                        opacity: 1,
                        left: 0
                    }, 1500), d.animate({opacity: 1, top: 0}, 1500)
                })
            }));
        if ($(this).hasClass("section153") || $(this).hasClass("section154") || $(this).hasClass("section157") || $(this).hasClass("section159") || $(this).hasClass("section258") ||
            $(this).hasClass("section1154") || $(this).hasClass("section311") || $(this).hasClass("section155") || $(this).hasClass("section1258")) {
            a = ".section_inner";
            c = $(this).find(a);
            b = $(this);
            var g = c.find(".title"), k = c.find(".sub_title"), m = c.find(".arr_block"), r = c.find(".arr1"),
                l = c.find(".btn1"), u = c.find(".btn2"), n = c.find(".btn_descr"), p = c.find(".form_wrapper"),
                t = c.find(".timer"), v = c.find(".header"), w = c.find(".play");
            g.css({left: "-1000px", opacity: 0, position: "relative"});
            k.css({right: "-1000px", opacity: 0, position: "relative"});
            l.css({bottom: "-200px", opacity: 0, position: "relative"});
            u.css({bottom: "-200px", opacity: 0, position: "relative"});
            n.css({bottom: "-200px", opacity: 0, position: "relative"});
            p.css({bottom: "-300px", opacity: 0, position: "relative"});
            t.css({bottom: "-300px", opacity: 0, position: "relative"});
            v.css({top: "-300px", opacity: 0, position: "relative"});
            m.css({opacity: 0, position: "relative"});
            r.css({bottom: "-300px", opacity: 0, position: "relative"});
            w.css({bottom: "-500px", opacity: 0});
            $(window).scroll(function () {
                $.each(c, function (a,
                                    b) {
                    if ($(window).scrollTop() + $(window).height() / 4 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) g.animate({
                        left: "0",
                        opacity: 1
                    }, 1E3), k.animate({right: "0", opacity: 1, position: "static"}, 1500), l.animate({
                        bottom: "0",
                        opacity: 1
                    }, 1200), u.animate({bottom: "0", opacity: 1}, 1200), n.animate({
                        bottom: "0",
                        opacity: 1,
                        position: "static"
                    }, 1200), t.animate({bottom: "0", opacity: 1, position: "static"}, 1200),
                        p.animate({bottom: "0", opacity: 1, position: "static"}, 1500), m.animate({
                        opacity: 1,
                        position: "relative"
                    }, 1500), v.animate({top: "0", opacity: 1, position: "relative"}, 1E3), r.css({
                        bottom: "0",
                        opacity: 1,
                        position: "relative"
                    }, 1E3), w.animate({bottom: "165px", opacity: 1}, 1E3)
                })
            })
        }
        $(this).hasClass("section308") && (a = ".col", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b,
                                d) {
            $(d).find(a).eq(0).css({left: "-800px"});
            $(d).find(a).eq(1).css({left: "-600px"});
            $(d).find(a).eq(2).css({left: "-400px"});
            $(d).find(a).eq(3).css({left: "-200px"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        }));
        $(this).hasClass("section226") && (a = ".arr1", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(c, function (a, b) {
            $(b).css({left: "-" + 400 * (a + 1) + "px"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top +
                    $(b).closest(".section_inner").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        }));
        $(this).hasClass("section132") && (a = ".text", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), c.eq(0).css({left: "-400px"}), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top ||
                    $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        }));
        $(this).hasClass("section164") && (a = ".pcenter", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), c.eq(0).css({left: "-400px"}), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $(window).scroll(function () {
            $.each(c, function (a,
                                b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        }));
        if ($(this).hasClass("section310") || $(this).hasClass("section148") || $(this).hasClass("section147") || $(this).hasClass("section143") || $(this).hasClass("section306")) a = ".viewport, .iamges, .image_box1, .image_box2, .image_box3, .image_box4, .image_box5, .image_box, .form_wrapper",
            c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({opacity: 0}), b = $(this), d = b.find(".title, .sub_title"), d.css({opacity: 0}), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".section_inner").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".section_inner").offset().top + $(b).closest(".section_inner").height()) $(b).animate({opacity: 1}, 1500), d.animate({opacity: 1}, 1500)
            })
        });
        if ($(this).hasClass("section126")) {
            a =
                ".image1, .video1, .right";
            e = ".extra_images";
            c = $(this).find(a);
            var y = $(this).find(e);
            e = ".arr1";
            e = $(this).find(e);
            c.css({opacity: 0, position: "relative"});
            y.css({opacity: 0});
            $.each(e, function (b, d) {
                $(d).find(a).eq(0).css({left: "-200px"});
                $(d).find(a).eq(1).css({left: "200px"})
            });
            b = $(this);
            d = b.find(".title, .sub_title");
            d.css({opacity: 0, top: "0", position: "relative"});
            $(window).scroll(function () {
                $.each(c, function (a, b) {
                    if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() +
                        $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) $(b).animate({
                        opacity: 1,
                        left: 0
                    }, 1500), d.animate({opacity: 1, top: 0}, 1500)
                });
                $.each(y, function (a, b) {
                    ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) && $(b).animate({opacity: 1}, 2E3)
                })
            })
        }
        $(this).hasClass("section129") && (a = ".image1, .video1, .right", e = ".extra_images", c = $(this).find(a),
            y = $(this).find(e), e = ".arr1", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), y.css({opacity: 0}), $.each(e, function (b, d) {
            $(d).find(a).eq(0).css({left: "-200px"});
            $(d).find(a).eq(1).css({left: "200px"})
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top +
                    $(b).closest(".arr1").height()) $(b).animate({opacity: 1, left: 0}, 1500), d.animate({
                    opacity: 1,
                    top: 0
                }, 1500)
            });
            $.each(y, function (a, b) {
                ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) && $(b).animate({opacity: 1}, 2E3)
            })
        }));
        $(this).hasClass("section301") && (a = ".arr1", c = $(this).find(a), e = ".section_inner", e = $(this).find(e), c.css({
            opacity: 0,
            left: "-400px",
            position: "relative"
        }),
            b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) $(b).animate({
                    opacity: 1,
                    left: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        }));
        $(this).hasClass("section117") && (a = ".col_2", c = $(this).find(a), e = ".arr1", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b, d) {
            (b + 1) % 2 ? ($(d).find(a).eq(0).css({left: "-200px"}), $(d).find(a).eq(1).css({left: "200px"})) : ($(d).find(a).eq(0).css({left: "200px"}), $(d).find(a).eq(1).css({left: "-200px"}))
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top +
                    $(b).closest(".arr1").height()) $(b).animate({opacity: 1, left: 0}, 1200), d.animate({
                    opacity: 1,
                    top: 0
                }, 1200)
            })
        }));
        if ($(this).hasClass("section152") || $(this).hasClass("section201")) a = ".image_box1, .image_box2, .image_box3, .image_box4, .image_box5, .col_5 ", c = $(this).find(a), e = ".arr1", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b, d) {
            $(d).find(a).eq(0).css({left: "-200px"});
            $(d).find(a).eq(1).css({left: "-100px"});
            $(d).find(a).eq(3).css({left: "100px"});
            $(d).find(a).eq(4).css({left: "200px"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() + $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) $(b).animate({
                    opacity: 1,
                    left: 0,
                    top: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        });
        if ($(this).hasClass("section121") || $(this).hasClass("section151") || $(this).hasClass("section200")) a =
            ".col_4", c = $(this).find(a), e = ".arr1", e = $(this).find(e), c.css({
            opacity: 0,
            position: "relative"
        }), b = $(this), d = b.find(".title, .sub_title"), d.css({
            opacity: 0,
            top: "0",
            position: "relative"
        }), $.each(e, function (b, d) {
            $(d).find(a).eq(0).css({left: "-200px"});
            $(d).find(a).eq(1).css({left: "-100px"});
            $(d).find(a).eq(2).css({left: "100px"});
            $(d).find(a).eq(3).css({left: "200px"})
        }), $(window).scroll(function () {
            $.each(c, function (a, b) {
                if ($(window).scrollTop() + $(window).height() / 2 > $(b).closest(".arr1").offset().top || $(window).scrollTop() +
                    $(window).height() > $(b).closest(".arr1").offset().top + $(b).closest(".arr1").height()) $(b).animate({
                    opacity: 1,
                    left: 0,
                    top: 0
                }, 1500), d.animate({opacity: 1, top: 0}, 1500)
            })
        })
    });
    if ($(".section.widget").size() && "undefined" === typeof window.tobiz.editor && 1 == parseInt(window.tobiz.w)) {
        if ($(".section1000").size()) {
            var l = 1;
            $("html").mouseleave(function (a) {
                l && (l = 0, $(".section1000").find(".extra_info_block_wrapper").show())
            })
        }
        $(".section1004").size() && (l = 1, $("html").mouseleave(function (a) {
            l && (l = 0, $(".section1004").find(".extra_info_block_wrapper").show())
        }));
        $(".section1005").size() && (l = 1, $("html").mouseleave(function (a) {
            l && (l = 0, $(".section1005").find(".extra_info_block_wrapper").show())
        }));
        $(".section1006").size() && (l = 1, $("html").mouseleave(function (a) {
            l && (l = 0, $(".section1006").find(".extra_info_block_wrapper").show())
        }));
        $(".section1007").size() && (l = 1, $("html").mouseleave(function (a) {
            l && (l = 0, $(".section1007").find(".extra_info_block_wrapper").show())
        }));
        $(".section1003").size() && $(".section1003").show();
        if ($(".section1001").size()) {
            var t = new Date;
            $(".section1001").each(function () {
                var a =
                        parseInt($(this).data("lag")), c = parseInt($(this).data("start")),
                    e = parseInt($(this).data("stop"));
                if (0 > c && 23 < c || 0 > e && 23 < e || c > e) return console.log("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b POPUP"), !1;
                if (t.getHours() >= c && t.getHours() <= e) {
                    var b = $(this).find(".extra_info_block_wrapper");
                    setTimeout(function () {
                        b.show()
                    }, 1E3 * a)
                }
            })
        }
        $(".section1008").size() && (t = new Date, $(".section1008").each(function () {
            var a = parseInt($(this).data("lag")), c = parseInt($(this).data("start")),
                e = parseInt($(this).data("stop"));
            if (0 > c && 23 < c || 0 > e && 23 < e || c > e) return console.log("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b POPUP"), !1;
            if (t.getHours() >= c && t.getHours() <= e) {
                var b = $(this).find(".extra_info_block_wrapper");
                setTimeout(function () {
                    b.show();
                    b.addClass("this_show")
                }, 1E3 * a)
            }
        }));
        $(".section1010").size() && (t = new Date, $(".section1010").each(function () {
            var a = parseInt($(this).data("lag")), c = parseInt($(this).data("start")),
                e = parseInt($(this).data("stop"));
            if (0 > c && 23 < c || 0 > e && 23 < e || c > e) return console.log("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b POPUP"), !1;
            if (t.getHours() >= c && t.getHours() <= e) {
                var b = $(this).find(".extra_info_block");
                setTimeout(function () {
                    b.show();
                    b.addClass("this_shows")
                }, 1E3 * a)
            }
        }))
    }
    window.tobiz.slider1130array = {};
    window.tobiz.slider1130Init = function (a) {
        console.log("111");
        if (typeof ("undefined" != window.tobiz.slider1130Init[a])) {
            var c = window.tobiz.slider1130array[a];
            console.log(c);
            $("#b_" + a).size() && window.tobiz.editor && $("#b_" + a).find(".arr1").eq(c).find(".extra_info_block_wrapper").show()
        }
    };
    $(".section1130").each(function () {
        window.tobiz.slider1130Init($(this).data("id"))
    });
    window.tobiz.slider1011array = {};
    window.tobiz.slider1011Init = function (a) {
        var c = 0, e = !1;
        "undefined" !== typeof window.tobiz.slider1011array[a] && ("undefined" !== typeof window.tobiz.slider1011array[a].current_id && (c = window.tobiz.slider1011array[a].current_id), delete window.tobiz.slider1011array[a]);
        if ($("#b_" +
            a).size()) {
            var b = $("#b_" + a);
            b.find(".field").each(function (a, b) {
                $(b).attr("data-index", a)
            });
            window.tobiz.slider1011array[a] = {
                len: b.find(".quiz_wrapper .field").size(),
                current_id: 0,
                lag: 5E3,
                speed: 300,
                setStatusBar: function () {
                    if (0 < b.find(".progress").length) {
                        var a = Math.floor(100 * (this.current_id + 1) / this.len);
                        b.find(".progress").css({width: a + "%"});
                        0 < !b.find(".discount_text").length ? b.find(".progress").after('<div class="discount_text">\u0413\u043e\u0442\u043e\u0432\u043e: <span>' + a + "%</span> </div>") :
                            b.find(".discount_text span").html(a + "%")
                    }
                },
                setSteps: function () {
                    if (0 < b.find(".steps").length) {
                        var a = this.len, c = this.current_id + 1;
                        b.find(".steps .all_step").text(a);
                        b.find(".steps .this_step").text(c)
                    }
                },
                setDiscount: function () {
                    if (0 < b.find(".discount").length) {
                        var a = 1 == this.len ? 1 : this.current_id / (this.len - 1);
                        var c = 1 * b.find(".discount").eq(0).data("min"),
                            e = 1 * b.find(".discount").eq(0).data("max");
                        a = Math.floor(c + (e - c) * a);
                        b.find(".discount span").text(a + "%")
                    }
                },
                goToSlide: function (a) {
                    this.current_id = a;
                    b.find(".quiz_wrapper .field").hide();
                    b.find(".quiz_wrapper .field").removeClass("active");
                    b.find(".quiz_wrapper .field").eq(a).addClass("active");
                    b.find(".quiz_wrapper .field").eq(a).show();
                    b.find(".point").removeClass("current");
                    b.find(".point").eq(a).addClass("current");
                    this.setStatusBar();
                    this.setDiscount();
                    this.setSteps();
                    console.log("quiz4");
                    console.log(this.current_id);
                    console.log(e);
                    0 === 1 * this.current_id || e ? (console.log("x2"), b.find(".steps").hide(), b.find(".prev").addClass("hidden")) : (console.log("x1"), b.find(".prev").removeClass("hidden"))
                },
                eventListener: function () {
                    var a = this;
                    b.unbind("swiperight");
                    b.unbind("swipeleft");
                    $("body").on("click", "#quiz_editor .field_editor_title", function () {
                        var b = $(this).parent().data("index");
                        a.goToSlide(b)
                    });
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"))
                    });
                    0 >= this.current_id && b.find(".prev").addClass("hidden");
                    b.find(".prev, .next").unbind("click");
                    b.find(".prev, .next").click(function () {
                        function d() {
                            var d = "";
                            d = $(".field.active").find("input:checked").val();
                            b.find(".quiz_wrapper .field").each(function (b, f) {
                                $(f).data("sub_question_hook") == d && "active" == $(f).data("sub_question") && a.current_id + 1 == $(f).data("sub_question_num") && (c = $(f).data("index"), e = !0)
                            });
                            b.find(".prev").addClass("hidden")
                        }

                        var c = a.current_id;
                        if ($(this).hasClass(".prev".replace(".", ""))) {
                            if ($(this).hasClass("hidden")) return;
                            c--;
                            0 > c && (c = 0);
                            $(this).hasClass("prev") && 0 != c && $(this).siblings(".next").addClass("show");
                            0 < c && b.find(".prev").removeClass("hidden");
                            b.find(".quiz_wrapper").show();
                            b.find(".form_wrapper").hide();
                            b.find(".next").removeClass("send")
                        } else {
                            if (!$(this).hasClass("show") && !$("body").hasClass("editor_true")) return !1;
                            b.find(".next").removeClass("show");
                            c++;
                            d();
                            c > a.len - 1 && $(this).addClass("send");
                            c > a.len - 1 && (c = a.len - 1, $("body").hasClass("editor_true") ? b.find(".quiz_wrapper").hide() : b.find(".slides").hide(), b.find(".form_wrapper").show())
                        }
                        b.find(".simple__loader").fadeIn(300);
                        setTimeout(function () {
                            a.goToSlide(c);
                            b.find(".simple__loader").fadeOut(100)
                        }, 1E3)
                    });
                    800 >= $(window).width() && (b.on("swiperight",
                        function () {
                            b.find(".next").click()
                        }), b.on("swipeleft", function () {
                        b.find(".prev").click()
                    }))
                },
                init: function (a) {
                    b.find(".point").eq(0).addClass("current");
                    b.find(".quiz_wrapper .field").hide();
                    b.find(".quiz_wrapper .field").eq(0).show();
                    this.setStatusBar();
                    this.setSteps();
                    this.eventListener();
                    this.goToSlide(a)
                }
            };
            window.tobiz.slider1011array[a].init(c)
        }
    };
    $(".section1011").each(function () {
        window.tobiz.slider1011Init($(this).data("id"))
    });
    window.tobiz.slider126array = {};
    window.tobiz.slider126Init = function (a) {
        var c =
            0, e = 1;
        if (!$("#b_" + a).hasClass("slider")) return !0;
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider126array[a] && ("undefined" !== typeof window.tobiz.slider126array[a].current_id && (c = window.tobiz.slider126array[a].current_id), e = window.tobiz.slider126array[a].auto_slide, "undefined" !== typeof window.tobiz.slider126array[a].auto_slide_interval && clearInterval(window.tobiz.slider126array[a].auto_slide_interval), delete window.tobiz.slider126array[a]);
        if ($("#b_" + a).size()) {
            var b =
                $("#b_" + a);
            window.tobiz.slider126array[a] = {
                len: b.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * b.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6E3,
                speed: 300,
                setScroller: function () {
                    b.find(".scroller").html("");
                    b.find(".slide").size();
                    $.each(b.find(".slide"), function (a, c) {
                        b.find(".scroller").append('<div class="point" data-id="' + a + '"></div>')
                    })
                },
                goToSlide: function (a, c, e) {
                    var d = this.speed;
                    1 == c && (d = 0);
                    "right" != e && (e = "left");
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    this.current_id = a;
                    "left" == e ? (b.find(".point").hide(),
                        b.find(".slider_wrapper").animate({left: "-100%"}, d, function () {
                            b.find(".slider_wrapper").css({left: "100%"});
                            b.find(".slide").hide();
                            b.find(".slide").eq(a).show();
                            b.find(".point").removeClass("current");
                            b.find(".point").eq(a).addClass("current");
                            b.find(".slider_wrapper").animate({left: "0%"}, d, function () {
                                b.find(".point").show()
                            })
                        })) : (b.find(".point").hide(), b.find(".slider_wrapper").animate({left: "+100%"}, d, function () {
                        b.find(".slider_wrapper").css({left: "-100%"});
                        b.find(".slide").hide();
                        b.find(".slide").eq(a).show();
                        b.find(".point").removeClass("current");
                        b.find(".point").eq(a).addClass("current");
                        b.find(".slider_wrapper").animate({left: "0%"}, d, function () {
                            b.find(".point").show()
                        })
                    }))
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    b.unbind("swiperight");
                    b.unbind("swipeleft");
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide =
                            0;
                        clearInterval(a.auto_slide_interval)
                    });
                    b.find(".go_left, .go_right").unbind("click");
                    b.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        var d = "left";
                        $(this).hasClass("go_right") && (d = "right");
                        a.goToSlide(b, a.speed, d);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (b.on("swiperight", function () {
                        b.find(".go_right").click()
                    }), b.on("swipeleft", function () {
                        b.find(".go_left").click()
                    }))
                },
                init: function (a, c) {
                    console.log("init");
                    this.auto_slide = c;
                    b.find(".point").eq(0).addClass("current");
                    b.find(".slide").hide();
                    b.find(".slide").eq(0).show();
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var d = this;
                    "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                        d.autoSlide()
                    }, d.lag))
                }
            };
            window.tobiz.slider126array[a].init(c, e)
        }
    };
    $(".section126").each(function () {
        window.tobiz.slider126Init($(this).data("id"))
    });
    window.tobiz.slider129array = {};
    window.tobiz.slider129Init =
        function (a) {
            var c = 0, e = 1;
            if (!$("#b_" + a).hasClass("slider")) return !0;
            $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
            "undefined" !== typeof window.tobiz.slider129array[a] && ("undefined" !== typeof window.tobiz.slider129array[a].current_id && (c = window.tobiz.slider129array[a].current_id), e = window.tobiz.slider129array[a].auto_slide, "undefined" !== typeof window.tobiz.slider129array[a].auto_slide_interval && clearInterval(window.tobiz.slider129array[a].auto_slide_interval), delete window.tobiz.slider129array[a]);
            if ($("#b_" + a).size()) {
                var b = $("#b_" + a);
                window.tobiz.slider129array[a] = {
                    len: b.find(".slide").size(),
                    current_id: 0,
                    auto_slide: 1 * b.data("autoslide"),
                    auto_slide_interval: "timeout",
                    lag: 5E3,
                    speed: 500,
                    setScroller: function () {
                        b.find(".scroller").html("");
                        b.find(".slide").size();
                        $.each(b.find(".slide"), function (a, c) {
                            b.find(".scroller").append('<div class="point" data-id="' + a + '"></div>')
                        })
                    },
                    goToSlide: function (a, c, e) {
                        var d = this.speed;
                        1 == c && (d = 0);
                        "right" != e && (e = "left");
                        0 > a && (a = this.len - 1);
                        a > this.len - 1 && (a = 0);
                        this.current_id =
                            a;
                        "left" == e ? (b.find(".point").hide(), b.find(".slider_wrapper").animate({left: "-150%"}, d, function () {
                            b.find(".slider_wrapper").css({left: "150%"});
                            b.find(".slide").hide();
                            b.find(".slide").eq(a).show();
                            b.find(".point").removeClass("current");
                            b.find(".point").eq(a).addClass("current");
                            b.find(".slider_wrapper").animate({left: "0%"}, d, function () {
                                b.find(".point").show()
                            })
                        })) : (b.find(".point").hide(), b.find(".slider_wrapper").animate({left: "150%"}, d, function () {
                            b.find(".slider_wrapper").css({left: "-150%"});
                            b.find(".slide").hide();
                            b.find(".slide").eq(a).show();
                            b.find(".point").removeClass("current");
                            b.find(".point").eq(a).addClass("current");
                            b.find(".slider_wrapper").animate({left: "0%"}, d, function () {
                                b.find(".point").show()
                            })
                        }))
                    },
                    autoSlide: function () {
                        if (1 == this.auto_slide) {
                            var a = this.current_id;
                            a++;
                            a > this.len - 1 && (a = 0);
                            this.goToSlide(a)
                        }
                    },
                    eventListener: function () {
                        var a = this;
                        b.unbind("swiperight");
                        b.unbind("swipeleft");
                        b.find(".point").unbind("click");
                        b.find(".point").click(function () {
                            $(this).hasClass("current") ||
                            a.goToSlide($(this).data("id"));
                            a.auto_slide = 0;
                            clearInterval(a.auto_slide_interval)
                        });
                        b.find(".go_left, .go_right").unbind("click");
                        b.find(".go_left, .go_right").click(function () {
                            var b = a.current_id;
                            $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                            var d = "left";
                            $(this).hasClass("go_right") && (d = "right");
                            a.goToSlide(b, a.speed, d);
                            a.auto_slide = 0;
                            clearInterval(a.auto_slide_interval)
                        });
                        800 >= $(window).width() && (b.on("swiperight", function () {
                            b.find(".go_right").click()
                        }), b.on("swipeleft",
                            function () {
                                b.find(".go_left").click()
                            }))
                    },
                    init: function (a, c) {
                        this.auto_slide = c;
                        b.find(".point").eq(0).addClass("current");
                        b.find(".slide").hide();
                        b.find(".slide").eq(0).show();
                        this.setScroller();
                        this.eventListener();
                        this.goToSlide(a, 1);
                        var d = this;
                        "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                            d.autoSlide()
                        }, d.lag))
                    }
                };
                window.tobiz.slider129array[a].init(c, e)
            }
        };
    $(".section129").each(function () {
        console.log($(this));
        window.tobiz.slider129Init($(this).data("id"))
    });
    window.tobiz.slider151array = {};
    window.tobiz.slider151Init = function (a) {
        var c = 0, e = 1;
        if (!$("#b_" + a).hasClass("slider")) return !0;
        var b = ".slide", d = ".slider_wrapper";
        640 >= $(window).width() ? ($("#b_" + a).find(b).show(), b = ".col_4", d = ".slider_wrapper") : $("#b_" + a).find(".col_4").show();
        $("#b_" + a).find(b).eq(0).show();
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider151array[a] && ("undefined" !== typeof window.tobiz.slider151array[a].current_id && (c = window.tobiz.slider151array[a].current_id),
            e = window.tobiz.slider151array[a].auto_slide, delete window.tobiz.slider151array[a]);
        if ($("#b_" + a).size()) {
            var f = $("#b_" + a);
            window.tobiz.slider151array[a] = {
                len: f.find(b).size(),
                current_id: 0,
                auto_slide: 1 * f.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5E3,
                speed: 750,
                setScroller: function () {
                    f.find(".scroller").html("");
                    f.find(b).size();
                    $.each(f.find(b), function (a, b) {
                        f.find(".scroller").append('<div class="point" data-id="' + a + '"></div>')
                    })
                },
                goToSlide: function (a, c, e) {
                    var h = this.speed;
                    1 == c && (h = 0);
                    "right" !=
                    e && (e = "left");
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    this.current_id = a;
                    "left" == e ? f.find(d).animate({left: "-100%"}, h, function () {
                        f.find(d).css({left: "100%"});
                        f.find(b).hide();
                        f.find(b).eq(a).show();
                        f.find(".point").removeClass("current");
                        f.find(".point").eq(a).addClass("current");
                        f.find(d).animate({left: "0%"}, h)
                    }) : f.find(d).animate({left: "+100%"}, h, function () {
                        f.find(d).css({left: "-100%"});
                        f.find(b).hide();
                        f.find(b).eq(a).show();
                        f.find(".point").removeClass("current");
                        f.find(".point").eq(a).addClass("current");
                        f.find(d).animate({left: "0%"}, h)
                    })
                },
                autoSlide: function () {
                    if (1 == this.auto_slide && 900 < $(window).width()) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    f.unbind("swiperight");
                    f.unbind("swipeleft");
                    f.find(".point").unbind("click");
                    f.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    f.find(".go_left, .go_right").unbind("click");
                    f.find(".go_left, .go_right").click(function () {
                        var b =
                            a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        var d = "left";
                        $(this).hasClass("go_right") && (d = "right");
                        a.goToSlide(b, a.speed, d);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (f.on("swiperight", function () {
                        f.find(".go_right").click()
                    }), f.on("swipeleft", function () {
                        f.find(".go_left").click()
                    }))
                },
                init: function (a, d) {
                    this.auto_slide = d;
                    f.find(".point").eq(0).addClass("current");
                    f.find(b).hide();
                    f.find(b).eq(0).show();
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var c = this;
                    "undefined" === typeof window.tobiz.editor && (c.auto_slide_interval = setInterval(function () {
                        c.autoSlide()
                    }, c.lag))
                }
            };
            window.tobiz.slider151array[a].init(c, e)
        }
    };
    $(".section151").each(function () {
        window.tobiz.slider151Init($(this).data("id"))
    });
    window.tobiz.slider160array = {};
    window.tobiz.slider160Init = function (a) {
        var c = 0, e = 1;
        if (!$("#b_" + a).hasClass("slider")) return !0;
        var b = ".slide", d = ".slider_wrapper";
        640 >= $(window).width() ? ($("#b_" + a).find(b).show(), b =
            ".col_4", d = ".slider_wrapper") : $("#b_" + a).find(".col_4").show();
        $("#b_" + a).find(b).eq(0).show();
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider160array[a] && ("undefined" !== typeof window.tobiz.slider160array[a].current_id && (c = window.tobiz.slider160array[a].current_id), e = window.tobiz.slider160array[a].auto_slide, "undefined" !== typeof window.tobiz.slider160array[a].auto_slide_interval && clearInterval(window.tobiz.slider160array[a].auto_slide_interval), delete window.tobiz.slider160array[a]);
        if ($("#b_" + a).size()) {
            var f = $("#b_" + a);
            window.tobiz.slider160array[a] = {
                len: f.find(b).size(),
                current_id: 0,
                auto_slide: 1 * f.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5E3,
                speed: 500,
                setScroller: function () {
                    f.find(".scroller").html("");
                    f.find(b).size();
                    $.each(f.find(b), function (a, b) {
                        f.find(".scroller").append('<div class="point" data-id="' + a + '"></div>')
                    })
                },
                goToSlide: function (a, c, e) {
                    var h = this.speed;
                    1 == c && (h = 0);
                    "right" != e && (e = "left");
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    this.current_id = a;
                    "left" ==
                    e ? f.find(d).animate({top: "-10%", opacity: "0"}, h, function () {
                        f.find(d).css({top: "10%", opacity: "0"});
                        f.find(b).hide();
                        f.find(b).eq(a).show();
                        f.find(".point").removeClass("current");
                        f.find(".point").eq(a).addClass("current");
                        f.find(d).animate({top: "0%", opacity: "1"}, h)
                    }) : f.find(d).animate({top: "+10%"}, h, function () {
                        f.find(d).css({top: "-10%"});
                        f.find(b).hide();
                        f.find(b).eq(a).show();
                        f.find(".point").removeClass("current");
                        f.find(".point").eq(a).addClass("current");
                        f.find(d).animate({top: "0%"}, h)
                    })
                },
                autoSlide: function () {
                    if (1 ==
                        this.auto_slide && 900 < $(window).width()) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    f.find(".point").unbind("click");
                    f.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    f.find(".go_left, .go_right").unbind("click");
                    f.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 &&
                        (b = 0));
                        var d = "left";
                        $(this).hasClass("go_right") && (d = "right");
                        a.goToSlide(b, a.speed, d);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    })
                },
                init: function (a, d) {
                    this.auto_slide = d;
                    f.find(".point").eq(0).addClass("current");
                    f.find(b).hide();
                    f.find(b).eq(0).show();
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var c = this;
                    "undefined" === typeof window.tobiz.editor && (c.auto_slide_interval = setInterval(function () {
                        c.autoSlide()
                    }, c.lag))
                }
            };
            window.tobiz.slider160array[a].init(c, e)
        }
    };
    $(".section160").each(function () {
        window.tobiz.slider160Init($(this).data("id"))
    });
    window.tobiz.slider320array = {};
    window.tobiz.slider320Init = function (a) {
        var c = 0, e = 1;
        if (!$("#b_" + a).hasClass("slider")) return !0;
        $("#b_" + a).find(".slide").eq(0).show();
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider320array[a] && ("undefined" !== typeof window.tobiz.slider320array[a].current_id && (c = window.tobiz.slider320array[a].current_id), e = window.tobiz.slider320array[a].auto_slide, "undefined" !== typeof window.tobiz.slider320array[a].auto_slide_interval && clearInterval(window.tobiz.slider320array[a].auto_slide_interval),
            delete window.tobiz.slider320array[a]);
        if ($("#b_" + a).size()) {
            var b = $("#b_" + a);
            window.tobiz.slider320array[a] = {
                len: b.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * b.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5E3,
                speed: 750,
                setScroller: function () {
                    b.find(".scroller").html("");
                    b.find(".slide").size();
                    $.each(b.find(".slide"), function (a, c) {
                        b.find(".scroller").append('<div class="point" data-id="' + a + '"></div>')
                    })
                },
                goToSlide: function (a, c, e) {
                    var d = this.speed;
                    1 == c && (d = 0);
                    "right" != e && (e = "left");
                    0 >
                    a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    this.current_id = a;
                    "left" == e ? b.find(".slider_wrapper").animate({left: "-100%"}, d, function () {
                        b.find(".slider_wrapper").css({left: "100%"});
                        b.find(".slide").hide();
                        b.find(".slide").eq(a).show();
                        b.find(".point").removeClass("current");
                        b.find(".point").eq(a).addClass("current");
                        b.find(".slider_wrapper").animate({left: "0%"}, d)
                    }) : b.find(".slider_wrapper").animate({left: "+100%"}, d, function () {
                        b.find(".slider_wrapper").css({left: "-100%"});
                        b.find(".slide").hide();
                        b.find(".slide").eq(a).show();
                        b.find(".point").removeClass("current");
                        b.find(".point").eq(a).addClass("current");
                        b.find(".slider_wrapper").animate({left: "0%"}, d)
                    })
                },
                autoSlide: function () {
                    if (1 == this.auto_slide && 900 < $(window).width()) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    b.find(".slide").unbind("swiperight");
                    b.find(".slide").unbind("swipeleft");
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    b.find(".go_left, .go_right").unbind("click");
                    b.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        var d = "left";
                        $(this).hasClass("go_right") && (d = "right");
                        a.goToSlide(b, a.speed, d);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (b.find(".slide").on("swiperight", function () {
                        b.find(".go_right").click()
                    }), b.find(".slide").on("swipeleft",
                        function () {
                            b.find(".go_left").click()
                        }))
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    b.find(".point").eq(0).addClass("current");
                    b.find(".slide").hide();
                    b.find(".slide").eq(0).show();
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var d = this;
                    "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                        d.autoSlide()
                    }, d.lag))
                }
            };
            window.tobiz.slider320array[a].init(c, e)
        }
    };
    $(".section320").each(function () {
        window.tobiz.slider320Init($(this).data("id"))
    });
    window.tobiz.slider149array =
        {};
    window.tobiz.slider149Init = function (a) {
        var c = 0, e = 1;
        if (!$("#b_" + a).hasClass("slider")) return !0;
        var b = ".slide";
        640 >= $(window).width() ? ($("#b_" + a).find(b).show(), b = ".col_3") : $("#b_" + a).find(".col_3").show();
        $("#b_" + a).find(b).eq(0).show();
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider149array[a] && ("undefined" !== typeof window.tobiz.slider149array[a].current_id && (c = window.tobiz.slider149array[a].current_id), e = window.tobiz.slider149array[a].auto_slide,
        "undefined" !== typeof window.tobiz.slider149array[a].auto_slide_interval && clearInterval(window.tobiz.slider149array[a].auto_slide_interval), delete window.tobiz.slider149array[a]);
        if ($("#b_" + a).size()) {
            var d = $("#b_" + a);
            window.tobiz.slider149array[a] = {
                len: d.find(b).size(),
                current_id: 0,
                auto_slide: 1 * d.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5E3,
                speed: 750,
                setScroller: function () {
                    d.find(".scroller").html("");
                    d.find(b).size();
                    $.each(d.find(b), function (a, b) {
                        d.find(".scroller").append('<div class="point" data-id="' +
                            a + '"></div>')
                    })
                },
                goToSlide: function (a, c, e) {
                    var f = this.speed;
                    1 == c && (f = 0);
                    "right" != e && (e = "left");
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    this.current_id = a;
                    "left" == e ? (d.find(".point").hide(), d.find(".slider_wrapper").animate({left: "-100%"}, f, function () {
                            d.find(".slider_wrapper").css({left: "100%"});
                            d.find(b).hide();
                            d.find(b).eq(a).show();
                            d.find(".point").removeClass("current");
                            d.find(".point").eq(a).addClass("current");
                            d.find(".slider_wrapper").animate({left: "0%"}, f, function () {
                                d.find(".point").show()
                            })
                        })) :
                        (d.find(".point").hide(), d.find(".slider_wrapper").animate({left: "+100%"}, f, function () {
                            d.find(".slider_wrapper").css({left: "-100%"});
                            d.find(b).hide();
                            d.find(b).eq(a).show();
                            d.find(".point").removeClass("current");
                            d.find(".point").eq(a).addClass("current");
                            d.find(".slider_wrapper").animate({left: "0%"}, f, function () {
                                d.find(".point").show()
                            })
                        }))
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    d.unbind("swiperight");
                    d.unbind("swipeleft");
                    d.find(".point").unbind("click");
                    d.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    d.find(".go_left, .go_right").unbind("click");
                    d.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        var d = "left";
                        $(this).hasClass("go_right") && (d = "right");
                        a.goToSlide(b, a.speed, d);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (d.on("swiperight", function () {
                        d.find(".go_right").click()
                    }), d.on("swipeleft", function () {
                        d.find(".go_left").click()
                    }))
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    d.find(".point").eq(0).addClass("current");
                    d.find(b).hide();
                    d.find(b).eq(0).show();
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var e = this;
                    "undefined" === typeof window.tobiz.editor && (e.auto_slide_interval = setInterval(function () {
                        e.autoSlide()
                    }, e.lag))
                }
            };
            window.tobiz.slider149array[a].init(c, e)
        }
    };
    $(".section149").each(function () {
        window.tobiz.slider149Init($(this).data("id"))
    });
    window.tobiz.slider118array = {};
    window.tobiz.slider118Init = function (a) {
        var c = 0, e = 1;
        if (!$("#b_" + a).hasClass("slider")) return !0;
        var b = ".slide";
        800 >= $(window).width() ? ($("#b_" + a).find(b).show(), b = ".col_3") : $("#b_" + a).find(".col_3").show();
        $("#b_" + a).find(b).eq(0).show();
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider118array[a] && ("undefined" !== typeof window.tobiz.slider118array[a].current_id && (c = window.tobiz.slider118array[a].current_id), e = window.tobiz.slider118array[a].auto_slide,
        "undefined" !== typeof window.tobiz.slider118array[a].auto_slide_interval && clearInterval(window.tobiz.slider118array[a].auto_slide_interval), delete window.tobiz.slider118array[a]);
        if ($("#b_" + a).size()) {
            var d = $("#b_" + a);
            window.tobiz.slider118array[a] = {
                len: d.find(b).size(),
                current_id: 0,
                auto_slide: 1 * d.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 5E3,
                speed: 750,
                setScroller: function () {
                    d.find(".scroller").html("");
                    d.find(b).size();
                    $.each(d.find(b), function (a, b) {
                        d.find(".scroller").append('<div class="point" data-id="' +
                            a + '"></div>')
                    })
                },
                goToSlide: function (a, c, e) {
                    var f = this.speed;
                    1 == c && (f = 0);
                    "right" != e && (e = "left");
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    this.current_id = a;
                    "left" == e ? (d.find(".point").hide(), d.find(".slider_wrapper").animate({left: "-100%"}, f, function () {
                            d.find(".slider_wrapper").css({left: "100%"});
                            d.find(b).hide();
                            d.find(b).eq(a).show();
                            d.find(".point").removeClass("current");
                            d.find(".point").eq(a).addClass("current");
                            d.find(".slider_wrapper").animate({left: "0%"}, f, function () {
                                d.find(".point").show()
                            })
                        })) :
                        (d.find(".point").hide(), d.find(".slider_wrapper").animate({left: "+100%"}, f, function () {
                            d.find(".slider_wrapper").css({left: "-100%"});
                            d.find(b).hide();
                            d.find(b).eq(a).show();
                            d.find(".point").removeClass("current");
                            d.find(".point").eq(a).addClass("current");
                            d.find(".slider_wrapper").animate({left: "0%"}, f, function () {
                                d.find(".point").show()
                            })
                        }))
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    d.find(b).unbind("swiperight");
                    d.find(b).unbind("swipeleft");
                    d.find(".point").unbind("click");
                    d.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    d.find(".go_left, .go_right").unbind("click");
                    d.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        var d = "left";
                        $(this).hasClass("go_right") && (d = "right");
                        a.goToSlide(b, a.speed, d);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (d.find(b).on("swiperight", function () {
                        d.find(".go_right").click()
                    }), d.find(b).on("swipeleft", function () {
                        d.find(".go_left").click()
                    }))
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    d.find(".point").eq(0).addClass("current");
                    d.find(b).hide();
                    d.find(b).eq(0).show();
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var e = this;
                    "undefined" === typeof window.tobiz.editor && (e.auto_slide_interval = setInterval(function () {
                        e.autoSlide()
                    }, e.lag))
                }
            };
            window.tobiz.slider118array[a].init(c,
                e)
        }
    };
    $(".section118").each(function () {
        window.tobiz.slider118Init($(this).data("id"))
    });
    window.tobiz.slider312array = {};
    window.tobiz.slider312Init = function (a) {
        var c = 0, e = 1;
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider312array[a] && ("undefined" !== typeof window.tobiz.slider312array[a].current_id && (c = window.tobiz.slider312array[a].current_id), e = window.tobiz.slider312array[a].auto_slide, "undefined" !== typeof window.tobiz.slider312array[a].auto_slide_interval &&
        clearInterval(window.tobiz.slider312array[a].auto_slide_interval), delete window.tobiz.slider312array[a]);
        if ($("#b_" + a).size()) {
            var b = $("#b_" + a);
            window.tobiz.slider312array[a] = {
                width: b.find(".section_inner").width(),
                height: b.find(".slider").height(),
                len: b.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * b.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6E3,
                setScroller: function () {
                    b.find(".scroller").html("");
                    b.find(".slide").size();
                    $.each(b.find(".slide"), function (a, c) {
                        b.find(".scroller").append('<div class="point" data-id="' +
                            a + '"></div>')
                    })
                },
                goToSlide: function (a, c) {
                    var d = 500;
                    1 == c && (d = 0);
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    b.find(".point").removeClass("current");
                    c = -1 * a * this.width + "px";
                    b.find(".slider_wrapper").animate({left: c}, d);
                    this.current_id = a;
                    b.find(".point").eq(a).addClass("current")
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") ||
                        a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    b.find(".go_left, .go_right").unbind("click");
                    b.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        a.goToSlide(b);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    })
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    b.find(".point").eq(0).addClass("current");
                    b.find(".slider_wrapper").css({width: this.width * this.len, height: this.height});
                    b.find(".slide").css({width: this.width});
                    b.find(".arr1").css({width: this.width});
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var d = this;
                    "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                        d.autoSlide()
                    }, d.lag))
                }
            };
            window.tobiz.slider312array[a].init(c, e)
        }
    };
    $(".section312").each(function () {
        window.tobiz.slider312Init($(this).data("id"))
    });
    window.tobiz.slider334array = {};
    window.tobiz.slider334Init = function (a) {
        var c = 0, e = 1;
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider334array[a] &&
        ("undefined" !== typeof window.tobiz.slider334array[a].current_id && (c = window.tobiz.slider334array[a].current_id), e = window.tobiz.slider334array[a].auto_slide, "undefined" !== typeof window.tobiz.slider334array[a].auto_slide_interval && clearInterval(window.tobiz.slider334array[a].auto_slide_interval), delete window.tobiz.slider334array[a]);
        if ($("#b_" + a).size()) {
            var b = $("#b_" + a);
            window.tobiz.slider334array[a] = {
                width: b.find(".section_inner").width(),
                height: b.find(".slider").height(),
                len: b.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * b.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6E3,
                setScroller: function () {
                    b.find(".scroller").html("");
                    b.find(".slide").size();
                    $.each(b.find(".slide"), function (a, c) {
                        b.find(".scroller").append('<div class="point" data-id="' + a + '"></div>')
                    })
                },
                goToSlide: function (a, c) {
                    var d = 500;
                    1 == c && (d = 0);
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    b.find(".point").removeClass("current");
                    c = -1 * a * this.width + "px";
                    b.find(".slider_wrapper").animate({left: c}, d);
                    this.current_id = a;
                    b.find(".point").eq(a).addClass("current")
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    b.find(".go_left, .go_right").unbind("click");
                    b.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len -
                        1 && (b = 0));
                        a.goToSlide(b);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    })
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    b.find(".point").eq(0).addClass("current");
                    b.find(".slider_wrapper").css({width: this.width * this.len, height: this.height});
                    b.find(".slide").css({width: this.width});
                    b.find(".arr1").css({width: this.width});
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var d = this;
                    "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                        d.autoSlide()
                    }, d.lag))
                }
            };
            window.tobiz.slider334array[a].init(c, e)
        }
    };
    $(".section334").each(function () {
        window.tobiz.slider334Init($(this).data("id"))
    });
    window.tobiz.slider156array = {};
    window.tobiz.slider156Init = function (a) {
        var c = 0, e = 1;
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider156array[a] && ("undefined" !== typeof window.tobiz.slider156array[a].current_id && (c = window.tobiz.slider156array[a].current_id), e = window.tobiz.slider156array[a].auto_slide, "undefined" !== typeof window.tobiz.slider156array[a].auto_slide_interval &&
        clearInterval(window.tobiz.slider156array[a].auto_slide_interval), delete window.tobiz.slider156array[a]);
        if ($("#b_" + a).size()) {
            var b = $("#b_" + a);
            window.tobiz.slider156array[a] = {
                width: b.find(".section_inner").width(),
                height: b.find(".slider").height(),
                len: b.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * b.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6E3,
                setScroller: function () {
                    b.find(".scroller").html("");
                    b.find(".slide").size();
                    $.each(b.find(".slide"), function (a, c) {
                        b.find(".scroller").append('<div class="point" data-id="' +
                            a + '"></div>')
                    })
                },
                goToSlide: function (a, c) {
                    var d = 500;
                    1 == c && (d = 0);
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    b.find(".point").removeClass("current");
                    c = -1 * a * this.width + "px";
                    b.find(".slider_wrapper").animate({left: c, opacity: 1}, d);
                    this.current_id = a;
                    b.find(".point").eq(a).addClass("current")
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    b.unbind("swiperight");
                    b.unbind("swipeleft");
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    b.find(".go_left, .go_right").unbind("click");
                    b.find(".go_left, .go_right").click(function () {
                        console.log("fff");
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        a.goToSlide(b);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (b.on("swiperight", function () {
                        b.find(".go_right").click()
                    }),
                        b.on("swipeleft", function () {
                            b.find(".go_left").click()
                        }))
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    b.find(".point").eq(0).addClass("current");
                    b.find(".slider_wrapper").css({width: this.width * this.len, height: this.height});
                    b.find(".slide").css({width: this.width});
                    b.find(".arr1").css({width: this.width});
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var d = this;
                    "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                        d.autoSlide()
                    }, d.lag))
                }
            };
            window.tobiz.slider156array[a].init(c,
                e)
        }
    };
    $(".section156").each(function () {
        window.tobiz.slider156Init($(this).data("id"))
    });
    window.tobiz.slider1156array = {};
    window.tobiz.slider1156Init = function (a) {
        var c = 0, e = 1;
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider1156array[a] && ("undefined" !== typeof window.tobiz.slider1156array[a].current_id && (c = window.tobiz.slider1156array[a].current_id), e = window.tobiz.slider1156array[a].auto_slide, "undefined" !== typeof window.tobiz.slider1156array[a].auto_slide_interval &&
        clearInterval(window.tobiz.slider1156array[a].auto_slide_interval), delete window.tobiz.slider1156array[a]);
        if ($("#b_" + a).size()) {
            var b = $("#b_" + a);
            window.tobiz.slider1156array[a] = {
                width: b.find(".section_inner").width(),
                height: b.find(".slider").height(),
                len: b.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * b.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6E3,
                setScroller: function () {
                    b.find(".scroller").html("");
                    b.find(".slide").size();
                    $.each(b.find(".slide"), function (a, c) {
                        b.find(".scroller").append('<div class="point" data-id="' +
                            a + '"></div>')
                    })
                },
                goToSlide: function (a, c) {
                    var d = 500;
                    1 == c && (d = 0);
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    b.find(".point").removeClass("current");
                    c = -1 * a * this.width + "px";
                    b.find(".slider_wrapper").animate({left: c, opacity: 1}, d);
                    this.current_id = a;
                    b.find(".point").eq(a).addClass("current")
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    b.unbind("swiperight");
                    b.unbind("swipeleft");
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    b.find(".go_left, .go_right").unbind("click");
                    b.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        a.goToSlide(b);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (b.on("swiperight", function () {
                        b.find(".go_left").click()
                    }), b.on("swipeleft",
                        function () {
                            b.find(".go_right").click()
                        }))
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    b.find(".point").eq(0).addClass("current");
                    b.find(".slider_wrapper").css({width: this.width * this.len, height: this.height});
                    b.find(".slide").css({width: this.width});
                    b.find(".arr1").css({width: this.width});
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var d = this;
                    "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                        d.autoSlide()
                    }, d.lag))
                }
            };
            window.tobiz.slider1156array[a].init(c,
                e)
        }
    };
    $(".section1156").each(function () {
        window.tobiz.slider1156Init($(this).data("id"))
    });
    window.tobiz.slider166array = {};
    window.tobiz.slider166Init = function (a) {
        var c = 0, e = 1;
        $("#b_" + a).size() && (e = 1 * $("#b_" + a).data("autoslide"));
        "undefined" !== typeof window.tobiz.slider166array[a] && ("undefined" !== typeof window.tobiz.slider166array[a].current_id && (c = window.tobiz.slider166array[a].current_id), e = window.tobiz.slider166array[a].auto_slide, "undefined" !== typeof window.tobiz.slider166array[a].auto_slide_interval &&
        clearInterval(window.tobiz.slider166array[a].auto_slide_interval), delete window.tobiz.slider166array[a]);
        if ($("#b_" + a).size()) {
            var b = $("#b_" + a);
            window.tobiz.slider166array[a] = {
                width: b.find(".section_inner").width(),
                height: b.find(".slider").height(),
                len: b.find(".slide").size(),
                current_id: 0,
                auto_slide: 1 * b.data("autoslide"),
                auto_slide_interval: "timeout",
                lag: 6E3,
                setScroller: function () {
                    b.find(".scroller").html("");
                    b.find(".slide").size();
                    $.each(b.find(".slide"), function (a, c) {
                        b.find(".scroller").append('<div class="point" data-id="' +
                            a + '"></div>')
                    })
                },
                goToSlide: function (a, c) {
                    var d = 500;
                    1 == c && (d = 0);
                    0 > a && (a = this.len - 1);
                    a > this.len - 1 && (a = 0);
                    b.find(".point").removeClass("current");
                    c = -1 * a * this.width + "px";
                    b.find(".slider_wrapper").animate({left: c, opacity: 1}, d);
                    this.current_id = a;
                    b.find(".point").eq(a).addClass("current")
                },
                autoSlide: function () {
                    if (1 == this.auto_slide) {
                        var a = this.current_id;
                        a++;
                        a > this.len - 1 && (a = 0);
                        this.goToSlide(a)
                    }
                },
                eventListener: function () {
                    var a = this;
                    b.unbind("swiperight");
                    b.unbind("swipeleft");
                    b.find(".point").unbind("click");
                    b.find(".point").click(function () {
                        $(this).hasClass("current") || a.goToSlide($(this).data("id"));
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    b.find(".go_left, .go_right").unbind("click");
                    b.find(".go_left, .go_right").click(function () {
                        var b = a.current_id;
                        $(this).hasClass("go_left") ? (b--, 0 > b && (b = a.len - 1)) : (b++, b > a.len - 1 && (b = 0));
                        a.goToSlide(b);
                        a.auto_slide = 0;
                        clearInterval(a.auto_slide_interval)
                    });
                    800 >= $(window).width() && (b.on("swiperight", function () {
                        b.find(".go_right").click()
                    }), b.on("swipeleft",
                        function () {
                            b.find(".go_left").click()
                        }))
                },
                init: function (a, c) {
                    this.auto_slide = c;
                    b.find(".point").eq(0).addClass("current");
                    b.find(".slider_wrapper").css({width: this.width * this.len, height: this.height});
                    b.find(".slide").css({width: this.width});
                    b.find(".arr1").css({width: this.width});
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(a, 1);
                    var d = this;
                    "undefined" === typeof window.tobiz.editor && (d.auto_slide_interval = setInterval(function () {
                        d.autoSlide()
                    }, d.lag))
                }
            };
            window.tobiz.slider166array[a].init(c,
                e)
        }
    };
    window.tobiz.section1307Init = function (a) {
        var c = "#b_" + a, e = $(c).find(".calc_result"), b = [];
        $.each(e, function (a, d) {
            var e = $(d).data("formula");
            e = e.toLowerCase();
            var f = JSON.parse(decodeURIComponent($(d).data("params")));
            $.each(f, function (a, b) {
                if ("select" == b.type || "checkbox" == b.type || "radio" == b.type || "number" == b.type || "range" == b.type) {
                    var d = String.fromCharCode(97 + a);
                    if ("number" == b.type) {
                        var f = parseFloat($(c).find(".field").eq(a).find("input").val());
                        f || (f = 0);
                        f += ""
                    }
                    "checkbox" == b.type && (f = 0, _.each($(c).find(".field").eq(a).find("input:checked"),
                        function (a) {
                            $(a).val() && (f += parseFloat($(a).val()))
                        }), f += "");
                    "radio" == b.type && ((f = parseFloat($(c).find(".field").eq(a).find("input:checked").val())) || (f = 0), f += "");
                    "range" == b.type && ((f = parseFloat($(c).find(".field").eq(a).find("input").val())) || (f = 0), f += "");
                    "select" == b.type && ((f = parseFloat($(c).find(".field").eq(a).find("option:selected").val())) || (f = 0), f += "");
                    e = e.replace(new RegExp(d, "gi"), f)
                }
            });
            $.each(b, function (a, c) {
                e = e.replace(new RegExp("r" + (a + 1), "gi"), b[a])
            });
            f = "\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b";
            try {
                f = Math.round(100 * parseFloat(eval(e))) / 100
            } catch (m) {
            }
            b[a] = Math.round(100 * parseFloat(f)) / 100;
            $(d).text(f)
        });
        e = $(c).find('.total_block input[type="hidden"]');
        var d = [];
        $.each(e, function (a, b) {
            var e = $(b).data("formula");
            e = e.toLowerCase();
            var f = JSON.parse(decodeURIComponent($(b).data("params")));
            $.each(f, function (a, b) {
                if ("select" == b.type || "checkbox" == b.type || "radio" == b.type || "number" == b.type || "range" == b.type) {
                    var d = String.fromCharCode(97 + a);
                    if ("number" == b.type) {
                        var f = parseFloat($(c).find(".field").eq(a).find("input").val());
                        f || (f = 0);
                        f += ""
                    }
                    "checkbox" == b.type && (f = 0, _.each($(c).find(".field").eq(a).find("input:checked"), function (a) {
                        $(a).val() && (f += parseFloat($(a).val()))
                    }), f += "");
                    "radio" == b.type && ((f = parseFloat($(c).find(".field").eq(a).find("input:checked").val())) || (f = 0), f += "");
                    "range" == b.type && ((f = parseFloat($(c).find(".field").eq(a).find("input").val())) || (f = 0), f += "");
                    "select" == b.type && ((f = parseFloat($(c).find(".field").eq(a).find("option:selected").val())) || (f = 0), f += "");
                    e = e.replace(new RegExp(d, "gi"), f)
                }
            });
            $.each(d,
                function (a, b) {
                    e = e.replace(new RegExp("r" + (a + 1), "gi"), d[a])
                });
            f = "";
            try {
                f = Math.round(100 * parseFloat(eval(e))) / 100
            } catch (m) {
            }
            d[a] = Math.round(100 * parseFloat(f)) / 100;
            $(b).val(f);
            $(b).hasClass("default_result") && $(b).parent().parent().find("[data-amount]").eq(0).attr("data-amount", f)
        });
        window.tobiz.section1307Descr(a)
    };
    window.tobiz.section1307Descr = function (a) {
        console.log(8);
        a = $("#b_" + a).find("form");
        a.find("input.select_descr___").remove();
        $.each(a.find("select"), function (a, e) {
            a = $(e).closest(".field").find(".field_title").text() ||
                "\u0412\u044b\u0431\u0440\u0430\u043d\u0430 \u043e\u043f\u0446\u0438\u044f " + a;
            var b = $(e).find("option:selected").eq(0).text();
            $(e).after('<input type="hidden" class="select_descr___" name="\u0412\u044b\u0431\u0440\u0430\u043d\u0430 \u043e\u043f\u0446\u0438\u044f (' + a + ')" value="' + b + '">')
        });
        a.find("input.radio_descr___").remove();
        $.each(a.find('input[type="radio"]'), function (a, e) {
            if ($(e).prop("checked")) {
                a = $(e).closest(".field").find(".field_title").text() || "\u0412\u044b\u0431\u0440\u0430\u043d\u0430 \u043e\u043f\u0446\u0438\u044f " +
                    a;
                var b = $(e).parent().find(".data_title").eq(0).text();
                $(e).siblings("label").after('<input type="hidden" class="radio_descr___" name="\u0412\u044b\u0431\u0440\u0430\u043d\u0430 \u043e\u043f\u0446\u0438\u044f (' + a + ')" value="' + b + '">')
            }
        })
    };
    $(".section166").each(function () {
        window.tobiz.slider166Init($(this).data("id"))
    });
    $(".section1307").each(function () {
        window.tobiz.section1307Init($(this).data("id"))
    });
    $(".section1226").size() && $(".section1226").each(function () {
        var a = $(this);
        a.find(".section_inner").css({
            minHeight: a.find(".arr_wrapp").outerHeight() +
                "px"
        })
    });
    $(window).resize(function () {
        this.resizeTO && clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger("resizeComplete")
        }, 500)
    });
    $(window).bind("resizeComplete", function () {
        G();
        C();
        if (840 >= $(window).width()) {
            var a = $(".section_inner").width();
            $(".table").each(function (c, e) {
                $(e).width() > a && !$(this).parent().hasClass("table_wrap") && ($(e).wrap('<div class="table_wrap table_wrap_' + c + '" style="overflow-y: scroll;overflow-x: visible; padding-top: 25px"></div>'), $(".table_wrap_" +
                    c).prepend('<div style="display: flex; display: -webkit-flex; display: -webkit-box; position: absolute; top: 0px; left: 50%; -webkit-transform: translateX(-50%); transform: translateX(-50%); align-items: center;"><span style="display:block; -webkit-transform: rotate(90deg); margin-right: 10px;  transform: rotate(90deg); width: 15px; height: 15px; background:url(/img/editor_icons/downwards-pointer_1.svg) no-repeat center;  background-size: 100%;"></span><span class="finger_tap" style="display:block; width: 20px; height: 20px; background:url(/img/editor_icons/finger-tap.svg) no-repeat center; background-size: 100%;"></span><span style="display:block; margin-left: 10px; -webkit-transform: rotate(-90deg);   transform: rotate(-90deg); width: 15px; height: 15px; background:url(/img/editor_icons/downwards-pointer_1.svg) no-repeat center;  background-size: 100%;"></span> </div>'))
            })
        }
        $(".section320").each(function () {
            window.tobiz.slider320Init($(this).data("id"))
        });
        $(".section312").each(function () {
            window.tobiz.slider312Init($(this).data("id"))
        });
        $(".section334").each(function () {
            window.tobiz.slider334Init($(this).data("id"))
        });
        $(".section156").each(function () {
            window.tobiz.slider156Init($(this).data("id"))
        });
        $(".section1156").each(function () {
            window.tobiz.slider1156Init($(this).data("id"))
        });
        $(".section166").each(function () {
            window.tobiz.slider166Init($(this).data("id"))
        });
        $(".section160").each(function () {
            window.tobiz.slider160Init($(this).data("id"))
        });
        $(".section126").each(function () {
            window.tobiz.slider126Init($(this).data("id"))
        });
        $(".section1011").each(function () {
            window.tobiz.slider1011Init($(this).data("id"))
        });
        $(".section129").each(function () {
            window.tobiz.slider129Init($(this).data("id"))
        });
        $(".section151").each(function () {
            window.tobiz.slider151Init($(this).data("id"))
        });
        $(".section149").each(function () {
            window.tobiz.slider149Init($(this).data("id"))
        });
        $(".section118").each(function () {
            window.tobiz.slider118Init($(this).data("id"))
        });
        640 < $(window).width() ? $(".section116").find(".menu1").show() : $(".section116").find(".menu1").hide();
        $(".section1226").size() && $(".section1226").each(function () {
            var a = $(this);
            a.find(".section_inner").css({minHeight: a.find(".arr_wrapp").outerHeight() + "px"})
        })
    });
    setInterval(function () {
            $({temporary_x: -151, temporary_y: 0}).animate({temporary_x: 500, temporary_y: 0}, {
                duration: 1E3,
                step: function () {
                    var a = Math.round(this.temporary_x) + "px " + Math.round(this.temporary_y) + "px";
                    $(".btn.animation, .btn1.animation, .btn2.animation, .btn3.animation, .btn4.animation, .btn5.animation").css("background-position", a)
                }
            })
        },
        2E3);
    $("body").on("click", ".menu_mobile_btn", function (a) {
        $(this).next(".menu1").toggleClass("active");
        $("body").toggleClass("modal");
        $(this).toggleClass("active")
    });
    $("body").on("click", ".menu-toogler_widget", function (a) {
        $(this).parent(".section1116").addClass("view_menu");
        $(this).next(".menu-toogler_widget_close").show();
        $(this).hide()
    });
    $("body").on("change", ".section1307 input, .section1307 select", function (a) {
        a = $(this).closest(".section").data("id") + "";
        window.tobiz.section1307Init(a)
    });
    $("body").on("click",
        ".menu-toogler_widget_close", function () {
            $(this).parent(".section1116").removeClass("view_menu");
            $(this).prev(".menu-toogler_widget").show();
            $(this).hide()
        });
    $("body").on("click", ".for_view", function () {
        $(this).parent(".section1116").addClass("view_menu");
        $(this).hide();
        $(".type_id_1116 .for_hide").show()
    });
    $("body").on("click", ".for_hide", function () {
        $(this).parent(".section1116").removeClass("view_menu");
        $(this).hide();
        $(".type_id_1116 .for_view").show()
    });
    $("body").on("click", ".section1117 .menu-toogler_widget",
        function (a) {
            $(this).parent(".section1117").addClass("view_menu");
            $(this).next(".menu-toogler_widget_close").show();
            $(this).siblings(".section_inner").children(".menu1").show();
            $(this).hide()
        });
    $("body").on("click", ".menu-toogler_widget_close", function () {
        $(this).parent(".section1117").removeClass("view_menu");
        $(this).prev(".menu-toogler_widget").show();
        $(this).hide()
    });
    $("body").on("click", ".section1302 .level0,.section1302 .level1", function (a) {
        console.log(1);
        $(this).parents(".section_inner").removeClass("active");
        $(this).parents(".menu1").removeClass("active")
    });
    $("body").on("click", ".section1302 .menu_mobile_btn2", function (a) {
        $(this).toggleClass("active");
        $(this).next(".menu1").toggleClass("active")
    });
    $("body").on("click", ".formula", function () {
        $(".formula").removeClass("active");
        $(this).addClass("active")
    });
    var Q = $(".section159 .video"), L = $(".section159 .play");
    L.click(function () {
        L.toggleClass("active");
        Q.toggleClass("play_active");
        return !1
    });
    setTimeout(function () {
        $(".section1117").length ? $("#wrapper").addClass("padding_wrapper") :
            $("#wrapper").removeClass("padding_wrapper");
        $(".section1126").length && 1300 < $(window).width() ? $("#wrapper").addClass("padding_wrapper_right") : $("#wrapper").removeClass("padding_wrapper_right")
    }, 300);
    $(document).on("click", ".filter_btns button", function () {
        $(this).parent().css({order: "-1"});
        $(this).parent().find("button").removeClass("current_btn");
        $(this).addClass("current_btn");
        var a = $(this).parent().parent().children(".arr1");
        "to_max" === $(this).data("sort_dir") ? a.sort(N) : a.sort(O);
        a.each(function (a,
                         e) {
            $(e).css({order: a})
        })
    });
    $(function () {
        var a = 0;
        try {
            a = $(".table").offset().top
        } catch (b) {
        }
        var c = 0, e = $(window);
        e.on("load scroll", function () {
            var b = e.scrollTop(), d = e.height();
            b + d - 200 >= a && 0 == c && ($(".table").prev().addClass("this"), c = 1)
        })
    });
    $("body").on("click", ".section321 .tab_btn", function () {
        $(".section321 .tab_btn").removeClass("active");
        $(this).addClass("active");
        $(".section321 .tabs__content").removeClass("active");
        $(this).next().addClass("active")
    });
    $(".calculator textarea").click(function () {
        this.style.height =
            "1px";
        this.style.height = 25 + this.scrollHeight + "px"
    });
    setTimeout(function () {
        $(".section321 .arr1:nth-of-type(1) .tab_btn").click()
    }, 100);
    setTimeout(function () {
        $(".calculator textarea").click()
    }, 100);
    $("body").on("input change mousemove", ".field_input_range input", function () {
        var a = $(this).val();
        $(this).siblings(".change_val").text(a)
    });
    $("body").on("mousemove", '#btn_config input[name="btn_radius"]', function () {
        var a = $(this).val();
        $(this).parent().siblings(".val_range").html(" " + a + " em")
    });
    $("body").on("click",
        ".x_pattern_new .spoiler-title, .x_pattern .spoiler-title", function () {
            $(this).siblings(".spoiler-content").toggle()
        });
    $("body").on("change", '.section1011 .slides input[type="checkbox"]', function () {
        $(this).parent(".checkbox_field").toggleClass("active")
    });
    $("body").on("change", '.section1011 .slides input[type="radio"]', function () {
        $(this).parents(".field_input").find(".checkbox_field").removeClass("active");
        $(this).parent(".checkbox_field").addClass("active")
    });
    $("body").on("click", ".section1011 .slides .prev, .section1011 .slides .next",
        function () {
            var a = $(this).closest(".section1011").offset().top;
            810 > $(window).width() && $(window).scrollTop(a)
        });
    $("body").on("change", ".section1011 .slides input", function () {
        $(this).parents(".field_input").children(".checkbox_field").each(function (a, c) {
            if ($(this).children("input").prop("checked")) return $(".section1011 .next").addClass("show"), !1;
            $(".section1011 .next").removeClass("show")
        })
    });
    $("body").on("change input", '.section1011 .slides input[type="range"]', function () {
        $(".section1011 .next").addClass("show")
    });
    $("body").on("change input", '.section1011 .slides input[type="text"], .section1011 .slides textarea', function () {
        $(this).parent(".field_input").each(function () {
            0 !== $(this).children('input[type="text"]').val() ? $(".section1011 .next").addClass("show") : 0 !== $(this).children("textarea").val() ? $(".section1011 .next").addClass("show") : $(".section1011 .next").removeClass("show")
        })
    });
    $("body").on("click", ".data_title", function () {
        $(this).siblings("input").click()
    });
    $("body").on("click", ".x_pattern_new .spoiler-title",
        function () {
            $(this).parent().siblings(".x_pattern_opacity").toggle();
            $(this).parent().siblings(".x_pattern_fixed").toggle()
        });
    $("body").on("click", ".section2120 .search button", function () {
        $(this).siblings("input").addClass("active");
        $(this).parent().parent().siblings(".logo_img").addClass("search_active")
    });
    $("body").on("click", ".send.next", function () {
        var a = $(this).closest(".section"), c = "";
        a.find(".quiz_wrapper .field").each(function () {
            c += "| \u0412\u043e\u043f\u0440\u043e\u0441: " + $(this).data("question") +
                " |\n";
            c += " \u041e\u0442\u0432\u0435\u0442: ";
            var a = [];
            $(this).find('input:checked, select option:selected, input[type="range"], input[type="text"], textarea').each(function () {
                a.push($(this).val())
            });
            c += a.join(", ") + "  | | \n\n"
        });
        a.find("form textarea.quiz_report").remove();
        a.find("form").append('<textarea style="display:none;" name="QUIZ_RESULT">' + c + "</textarea>")
    });
    $(".section333 ul li").each(function (a, c) {
        $(this).children("a").html(a + 1)
    });
    $(document).on("click", document, function (a) {
        810 > $(window).width() &&
        !$(a.target).closest(".menu-toogler, .menu_mobile_btn, .menu1, .menu2").length && ($(".level1").hide(), $(".menu1").hide(), $(".menu2").hide(), $(".section311 .menu1, .section2120 .menu1, .section2120 .menu2").show(), $(".section").removeClass("menu_open"), a.stopPropagation())
    });
    G();
    setInterval(function () {
        var a = $(".section1163");
        300 < $(window).scrollTop() ? a.show() : a.hide()
    }, 300);
    $(".section1163").on("click", function () {
        $("html, body").animate({scrollTop: 0}, 500)
    });
    $("body").on("click", ".section1130 .btns_wrapp > div",
        function (a) {
            tobiz.editor || (-1 !== a.currentTarget.className.indexOf("open_card") ? $("body").addClass("noscroll") : $("body").addClass("modal"))
        });
    $("body").on("click", ".section2120 .menu a", function (a) {
        $(this).parents(".section").removeClass("view_menu");
        $(this).parents(".section").removeClass("menu_open_new");
        $(this).parents(".section").removeClass("menu_open");
        $(this).parents(".section").find(".menu_content").hide();
        $("body").removeClass("modal");
        $(this).parents(".section").find(".menu-toogler ").removeClass("active")
    });
    $("body").on("click", ".menu1 a, .menu a", function (a) {
        960 > $(window).width() && ($(this).parents(".menu1").removeClass("active"), $("body").removeClass("modal"), $(this).parents(".section").removeClass("view_menu"), $(this).parents(".section").removeClass("menu_open_new"), $(this).parents(".section").removeClass("menu_open"), $(this).parents(".section").find(".menu_content").hide(), $(this).parents(".section").find(".menu-toogler_widget").show(), $(this).parents(".section").find(".menu_mobile_btn").removeClass("active"),
            $(this).parents(".section").find(".menu-toogler ").removeClass("active"))
    });
    $("body").on("click", '[href^="#"]', function (a) {
        a = $(this).attr("href").substr(1);
        a = $('a[name="' + a + '"]');
        if (0 < a.length && 1E3 < $(window).width()) return $("html,body").stop().animate({scrollTop: a.offset().top}, 1E3), !1
    });
    $(".menu1").each(function (a, c) {
        $(c).children().children().length || ($(this).siblings(".menu-toogler").hide(), $(this).hide())
    });
    setTimeout(function () {
        $(".section1011 .field_input_text input, .section1011 .field_input_textarea textarea").val("");
        $(".field input").attr("autocomplete", "off")
    }, 300);
    $(".section1128").length && (setTimeout(function () {
        $(".section1128").hide()
    }, 2200), $(".section1128").animate({opacity: 0}, 2E3));
    $(".section1550").size() && $(".section1550").each(function () {
        var a = $(this).closest(".section").attr("id"), c = "";
        c += "<ul>";
        $("body").find("h1, h2, h3, h4, h5, h6").each(function (e, b) {
            b = 1;
            "H1" == $(this).prop("tagName") && (b = 1);
            "H2" == $(this).prop("tagName") && (b = 2);
            "H3" == $(this).prop("tagName") && (b = 3);
            "H4" == $(this).prop("tagName") &&
            (b = 4);
            "H5" == $(this).prop("tagName") && (b = 5);
            "H6" == $(this).prop("tagName") && (b = 6);
            $(this).prepend('<a id="t_shema_' + a + "_" + e + '"></a>');
            c += '<li class="level_' + b + '"><a href="#t_shema_' + a + "_" + e + '">' + $(this).text() + "</a></li>"
        });
        c += "</ul>";
        $(this).find(".shema").html(c)
    });
    if ($(".section1400").size()) {
        var M;
        $(".section1400").each(function () {
            function a(a) {
                for (var b = [], c = 0; c < a.length; c++) b.push($(a[c]).text());
                return b
            }

            var c = $(this).attr("id");
            $(this).find(".chart").each(function () {
                M = this.getContext("2d")
            });
            var e = $("#" + c + " .arr_color"), b = $("#" + c + " .arr_title"), d = $("#" + c + " .arr_value");
            c = $("#" + c + " .graph").data("type");
            new Chart(M, {
                type: c,
                data: {labels: a(b), datasets: [{label: "", data: a(d), backgroundColor: a(e)}]},
                options: {legend: {position: "right", labels: {fontSize: 14}}}
            })
        })
    }
    $('#basket_make_order input[name="tel"]').each(function () {
        var a = $(this).data("mask");
        $(this).mask(a)
    });
    if ($(".section1302").size()) {
        var R = window.location.href;
        $(".section1302 li").each(function (a, c) {
            a = $(this).children("a").attr("href");
            -1 !== R.indexOf(a) ? $(this).addClass("this_page") : $(this).removeClass("this_page")
        })
    }
    $('input[type="search"]').each(function (a, c) {
        $(this).blur()
    });
    $(".field_input_phone input").each(function () {
        var a = String($(this).data("mask"));
        "undefined" !== a && $(this).mask(a)
    });
    $("body").on("click", ".tobiz_auth .user", function (a) {
        $(".popup_user").toggleClass("active")
    });
    $(".menu1 a").hover(function (a) {
        $(this).removeAttr("title")
    });
    C();
    $(".section146 .image_box img").click(function (a) {
        a = $(this).next(".overlay_image_box").data("link");
        var c = $(this).next(".overlay_image_box").data("link-target");
        "" != a && (1 == c ? window.open(a, "_blank") : window.open(a, "_self"))
    });
    $("body").find(".gotoitempage").each(function () {
        $(this).attr("style2", $(this).attr("style"))
    });
    $(".gotoitempage").click(function (a) {
        a.preventDefault();
        a = JSON.parse(localStorage.getItem("itempage"));
        null == a && (a = {});
        var c = $(this).data("id"), e = $(this).attr("style"), b = $(this).attr("style2"), d = 0;
        $(this).hasClass("surround") && (d = 1);
        a[c] = {style: e, style2: b, surround: d, url: window.location.href};
        localStorage.setItem("itempage", JSON.stringify(a));
        window.location.href = $(this).attr("href")
    });
    $(document).keyup(function (a) {
        27 === a.keyCode && $(".extra_info_block .close").click()
    });
    $('.section146 .overlay_image_box[data-link]:not([data-link=""])').parent().children("img").css({cursor: "pointer"});
    $("body").on("click", '.flexblock_wrapper_btn .flexblock_content[data-action="2"]', function () {
        if (!tobiz.editor) {
            var a = $(this).parent().children(".flexblock_popup_form").html(),
                c = $(this).parent().children(".flexblock_popup_form").find("form > .flexblock_popup_title").text();
            window.modal.getModal(c, a, "flexblock_popup")
        }
    })
});

tobiz.blocks = [];

$(function () {


    (function () {
        var app = {
            cookie: {
                set: function (name, value, days) {
                    var expires = "";
                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                        expires = "; expires=" + date.toUTCString();
                    }
                    document.cookie = name + "=" + (value || "") + expires + "; path=/";
                },
                get: function (name) {
                    var nameEQ = name + "=";
                    var ca = document.cookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                    }
                    return null;
                },
                remove: function (name) {
                    document.cookie = name + '=; Max-Age=-99999999;';
                }
            },
            url: {
                getParams: function (u) {
                    var url = u || window.location.search,
                        queryString = url.split('?')[1],
                        urlParams = {};
                    url = url.split('#')[0];
                    if (!queryString) {
                        if (url.search('=') !== false) {
                            queryString = url;
                        }
                    }
                    if (queryString) {
                        var keyValuePairs = queryString.split('&')
                        for (var i = 0; i < keyValuePairs.length; i++) {
                            var keyValuePair = keyValuePairs[i].split('=')
                            var paramName = keyValuePair[0]
                            var paramValue = keyValuePair[1] || ''
                            urlParams[paramName] = decodeURIComponent(paramValue.replace(/\+/g, ' '));
                        }
                    }
                    return urlParams;
                }
            },
            int: function () {
//                                var get = $.extend({}, JSON.parse(app.cookie.get('tobiz_get_params')), app.url.getParams());
//                                app.cookie.set('tobiz_get_params', JSON.stringify(get));


                if (app.cookie.get('tobiz_enter_point') === null) {
                    app.cookie.set('tobiz_enter_point', window.location.href);
                }


            }
        }
        app.int();
        window.app = app;

    })();


    $('body').on('submit', 'form[action="handler.php"]', function (event) {
        event.preventDefault();


        var send = 1;
        if (!event.target.checkValidity()) {
            $('form input:visible[required="required"]').each(function () {
                if (!send) return false;
                if (!this.validity.valid) {
                    $(this).focus();
                    send = 0;
                }
            });
            if (!send) return;
        }


        var this_form = $(this);
        if (!$(this).children("input[name=project_id]").length)
            $(this).prepend('<input type="hidden" name="project_id" value="' + window.tobiz.project_id + '">');
        if (!$(this).children("input[name=page_id]").length)
            $(this).prepend('<input type="hidden" name="page_id" value="' + window.tobiz.rep_id + '">');
        if (!$(this).children("input[name=referrer]").length)
            $(this).prepend('<input type="hidden" name="referrer" value="' + document.referrer + '">');
        if (!$(this).children("input[name=user_id]").length)
            $(this).prepend('<input type="hidden" name="user_id" value="' + window.tobiz.user_id + '">');

        if ($(this).find("[data-action]").size()) {
            $(this).prepend('<input type="hidden" name="product_name" value="' + $(this).find("[data-product_name]").data('product_name') + '">');
            $(this).prepend('<input type="hidden" name="action" value="' + $(this).find("[data-action]").data('action') + '">');
            $(this).prepend('<input type="hidden" name="amount" value="' + $(this).find("[data-action]").data('amount') + '">');
            $(this).prepend('<input type="hidden" name="url" value="' + $(this).find("[data-action]").data('url') + '">');
        } else {
            console.log('not found');
        }

        if (typeof (VK) != 'undefined' && $(this).find("[data-vk_pixel]").size() && $(this).find("[data-vk_pixel]").data('vk_pixel') != 'undefined' && $(this).find("[data-vk_pixel]").data('vk_pixel') != '') {
            console.log('vk_pixel_event: ' + $(this).find("[data-vk_pixel]").data('vk_pixel'));
            VK.Retargeting.Event($(this).find("[data-vk_pixel]").data('vk_pixel'));
        } else {
            console.log('vk_pixel not found');
        }


        if (typeof (gtag) != 'undefined' && $(this).find("[data-gtag_event]").size() && $(this).find("[data-gtag_event]").data('gtag_event') != 'undefined' && $(this).find("[data-gtag_event]").data('gtag_event') != '') {
            console.log('gtag_event: ' + $(this).find("[data-gtag_event]").data('gtag_event'));
            gtag('event', $(this).find("[data-gtag_event]").data('gtag_event') + '');
        } else {
            console.log('gtag_event not found');
        }


        if (typeof (fbq) != 'undefined' && $(this).find("[data-fb_pixel]").size() && $(this).find("[data-fb_pixel]").data('fb_pixel') != 'undefined' && $(this).find("[data-fb_pixel]").data('fb_pixel') != '') {
            console.log('fb_pixel_event: ' + $(this).find("[data-fb_pixel]").data('fb_pixel'));
            fbq('trackCustom', $(this).find("[data-fb_pixel]").data('fb_pixel'));
        } else {
            console.log('fb_pixel not found');
        }


        try {

            var ya_counter_id = '';
            if (ya_counter_id != '') {
                ya_counter_id = eval(ya_counter_id);
                if ($(this).find("[data-metrica_event]").size() && $(this).find("[data-metrica_event]").data('metrica_event') != 'undefined' && $(this).find("[data-metrica_event]").data('metrica_event') != '') {
                    ya_counter_id.reachGoal($(this).find("[data-metrica_event]").data('metrica_event'));
                    console.log('ym_target_event: ' + $(this).find("[data-metrica_event]").data('metrica_event'));
                } else {
                    console.log('ym_target_event not found');
                }
            }

        } catch (e) {

        }

        var formData = new FormData($(this)[0]);
        var this_block = $(this).closest('.section');
        $.ajax({
            dataType: "json",
            type: "POST",
            url: "/handler.php",
            data: formData,
//                            async: false,
            cache: false,
            contentType: false,
            processData: false
        }).done(function (data) {
            if (data.status == 'OK') {
                window.modal.getModal('Успех', data.msg);
                //alert(data.msg);
                this_form.each(function () {
                    $(this)[0].reset();
                })
                $('.popup_form').hide();
            }
            if (data.status == 'ERROR') {
                window.modal.getModal('Ошибка', data.msg);
                //alert(data.msg);
            }
            if (data.status == 'JC') {

                $('body').append(data.form);
                $('#jc_form').submit();
                this_form.each(function () {
                    $(this)[0].reset();
                })
            }

            if (data.status == 'PAYEER') {
                $('body').append(data.form);
                $('#payeer_form').submit();
                this_form.each(function () {
                    $(this)[0].reset();
                })
            }


            if (data.status == 'SR') {
                $('body').append(data.form);
                $('#sr_form').submit();
                this_form.each(function () {
                    $(this)[0].reset();
                })
            }
            if (data.status == 'GR') {
                $('body').append(data.form);
                $('#gr_form').submit();
                this_form.each(function () {
                    $(this)[0].reset();
                })
            }
            if (data.status == 'RK') {
                this_form.each(function () {
                    $(this)[0].reset();
                })
                window.location.href = data.url;
            }
            if (data.status == 'SB') {
                this_form.each(function () {
                    $(this)[0].reset();
                })

                window.basket.clean();
                window.basket.hideForm();

                window.location.href = data.link;
            }
            if (data.status == 'INTERKASSA') {
                this_form.each(function () {
                    $(this)[0].reset();
                })
                window.location.href = data.url;
            }
            if (data.status == 'INTERKASSA') {
                this_form.each(function () {
                    $(this)[0].reset();
                })
                window.location.href = data.url;
            }
            if (data.status == 'redirect') {
                this_form.each(function () {
                    $(this)[0].reset();
                })


                window.basket.clean();
                window.basket.hideForm();
//                                window.basket.renderForm();
//                                window.basket.renderBtn();
//                                window.basket.hideBtn();
                $('.popup_form').hide();

                window.location.href = data.url;
            }
            if (data.status == 'thanks') {
                this_block.find('.popup_thanks').show();
                this_form.each(function () {
                    $(this)[0].reset();
                })
                $('.popup_form').hide();
                this_block.find('.extra_info_block_wrapper').hide();
            }
            if (data.status == 'flexThanks') {
                console.log('flexThanks');
                $('body').find('.modal_close').click();

                window.modal.getModal('Спасибо', 'Сообщение успешно отправлено.');
            }
            if (data.status == 'thanks_order_complete') {
                this_block.find('.popup_thanks').show();
                this_form.each(function () {
                    $(this)[0].reset();
                })
                window.basket.clean();
                window.basket.hideForm();
                window.basket.renderForm();
                window.basket.renderBtn();
                window.basket.hideBtn();
                //alert('Спасибо ваш заказ успешно оформлен!');
                $('.popup_form').hide();
                window.basket.renderThanks();
            }
            if (data.status == 'already_sent') {
                this_form.each(function () {
                    $(this)[0].reset();
                })
                $('.popup_form').hide();
                window.modal.getModal('Ошибка', data.msg);
                //alert(data.msg);
            }
        }).error(function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError)
        });
        console.log('wrf');
        return false;
    })
})
