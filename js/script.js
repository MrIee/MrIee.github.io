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

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });
});