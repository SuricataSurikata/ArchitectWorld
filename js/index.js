$(document).ready(function(){

    $('#thumbnail').attr('src', 'assets/lisasmall.png');

    $('.element').click(function(){
        $('.overlay').css({'left': '0', 'visibility': 'visible'}).fadeIn(100, function() {
            $(this).addClass('visible');
        });
        $('#content').css({'margin': '25vh 25% 0'})

        $('#content p').html($(this).find('.text').html());
        $('#content .image').css('background-image', 'url("assets/lisasmall.png")');
        $('.close-window').hide();
    });

    $("#content").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        if (!$('.overlay').hasClass('visible'))
            $('.overlay').fadeOut(100, function() {
                $('.close-window').show();
            });
    });


    $('#content .close, #overlay').click(function(){
        $('.overlay').removeClass('visible');
        $('#content').css({'margin': '25vh 100% 0'})

    });


});