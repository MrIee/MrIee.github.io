$(document).ready(function() {
    $(".menu__button").on("click", function() {
        $(".menu").show();
        $(".menu").toggleClass("tw-translate-y-full");
    });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        $(".menu").toggle();
        $(".menu").toggleClass("tw-translate-y-full");

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