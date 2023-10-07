// Templatemo 467 Easy Profile

// Preloader
$(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut('slow'); // Set duration in brackets
});

// Home Background Slideshow
$(function () {
    $(document).ready(function () {
        const backgroundImages = [
            "images/tm-bg-slide-1.jpg",
            "images/tm-bg-slide-2.jpg",
            "images/tm-bg-slide-3.jpg"
        ];

        $('body').backstretch(backgroundImages, {
            duration: 3200,
            fade: 1300
        });
    });
});
