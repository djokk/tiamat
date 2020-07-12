$(document).ready(function(){
    $('.slider-header').slick({
        dots: true,
        arrows : false,
        infinite: true,
        speed: 1500,
        // autoplay: true,
        // autoplaySpeed: 1500
    });

    $('.slider-hit').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-next" aria-hidden="true"></i></button>',
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1
    });
});