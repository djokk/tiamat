$(document).ready(function () {
    $('.bg-menu').click(function (e) {
        e.preventDefault();
        if($('.menu').hasClass('show')){
            $('.menu').slideUp().removeClass('show');
            $('.bg-menu .fa').removeClass('fa-times');
            $('.bg-menu .fa').addClass('fa-bars');
            $('.menuAll').css('display','none');
        }else{
            $('.menu').slideDown().addClass('show');
            $('.bg-menu .fa').removeClass('fa-bars');
            $('.bg-menu .fa').addClass('fa-times');
            $('.menuAll').css('display','block');
        }
    })

    $('.menuAll').click(function(){
        if($('.menu').hasClass('show')){
            $('.menu').slideUp().removeClass('show');
            $('.bg-menu .fa').removeClass('fa-times');
            $('.bg-menu .fa').addClass('fa-bars');
            $('.menuAll').css('display','none');
        }
    })

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if (scroll > 400){
            $('#top').fadeIn();
        }
        else{
            $('#top').fadeOut();
        }
    })

    $('#top').click(function(){
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })

    $(window).on('resize', function(e){
        if(window.innerWidth > 990){
            $('.menu').attr('style','');
        }
    })
});