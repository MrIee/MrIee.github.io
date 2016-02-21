$(document).ready(function() {
    $(".menu-button").on("click", function() {
        $(".menu").show();
        $(".menu").toggleClass("menu-dropdown");
        $(".menu-button").toggleClass("menu-white");
    });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        $(".menu").toggle();
        $(".menu").toggleClass("menu-dropdown");
        $(".menu-button").toggleClass("menu-white");

        var target = this.hash,
        $target = $(target);
        var time = Math.abs(window.top.pageYOffset - $target.offset().top);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, time, 'swing', function () {
            window.location.hash = target;
        });
    });
});