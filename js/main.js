$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});
$(document).ready(function () {
    new WOW().init();
    if ($(window).scrollTop() >= 40) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $("header").addClass("scroll");
        } else {
            $("header").removeClass("scroll");
        }
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 4,
        autoplay: false,
        margin: 14,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    ////////////////////////////////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    ////////////////////
    $('.mo-menu-icon').click(function () {
        $(".mo-sidebar").fadeIn(300);
        $(".sec-header").addClass("nav-in");
        $("body").addClass("overflow");
    });

    $('.mo-sidebar').click(function () {
        $(".mo-sidebar").fadeOut(400);
        $(".sec-header").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.sec-header').click(function (e) {
        e.stopPropagation();
    });
    $('.close-btn').click(function () {
        $(".mo-sidebar").fadeOut(400);
        $(".sec-header").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    if ($(window).width() <= 767) {
        $("header").wrap("<div class='xs-head'></div>");
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }


    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
});