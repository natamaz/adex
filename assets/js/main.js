
$(document).ready(function(){
    <!-- плагины -->
    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    });
    <!-- конец плагины -->


    <!-- скролл-->
    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    <!-- конец скролл -->

    <!-- меню -->
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
        $(".text_anime").toggleClass("none");

    });
    <!-- конец мею -->

    <!-- меню-->
    $('.user').on("click", function () {
        $('.user').toggleClass('active')
    });
    <!-- конец мею -->


    <!-- Попап-->
    $('.sign-form').on("click", function () {
        $('.signPopup').addClass('active fadeInDown');
        $('.signPopup ').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.signPopup .close,.close-popup').on("click", function () {
        $('.signPopup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.signPopup').removeClass('active');
        }, 500);
    });
    $('.signPopup .closeBtn').on("click", function () {
        $('.signPopup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });



    $('.Account-form').on("click", function () {
        $('.AccountPopup').addClass('active fadeInDown');
        $('.AccountPopup ').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.AccountPopup .close,.close-popup').on("click", function () {
        $('.AccountPopup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.AccountPopup').removeClass('active');
        }, 500);
    });
    $('.AccountPopup .closeBtn').on("click", function () {
        $('.AccountPopup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.recovery-form').on("click", function () {
        $('.recoveryPopup').addClass('active fadeInDown');
        $('.recoveryPopup ').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.recoveryPopup .close,.close-popup').on("click", function () {
        $('.recoveryPopup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.recoveryPopup').removeClass('active');
        }, 500);
    });
    $('.recoveryPopup .closeBtn').on("click", function () {
        $('.recoveryPopup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.valid-form').on("click", function () {
        $('.validPopup').addClass('active fadeInDown');
        $('.validPopup ').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.validPopup .close,.close-popup,.Confirm').on("click", function () {
        $('.validPopup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.validPopup').removeClass('active');
        }, 500);
    });
    $('.validPopup .closeBtn').on("click", function () {
        $('.validPopup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.valid-2form').on("click", function () {
        $('.valid2Popup').addClass('active fadeInDown');
        $('.valid2Popup ').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.valid2Popup .close,.close-popup,.Confirm').on("click", function () {
        $('.valid2Popup ').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.valid2Popup').removeClass('active');
        }, 500);
    });
    $('.valid2Popup .closeBtn').on("click", function () {
        $('.valid2Popup').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });
    <!-- конец Попап-->
    $(window).on("load",function(){
        $(".scroll").mCustomScrollbar({
            axis: "x",

        });
    });
    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

