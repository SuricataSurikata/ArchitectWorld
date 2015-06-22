$(document).ready(function(){
    
    var resizeModalImage = function(height) {
        height = height || $('#content img').height();
        height = height - 5;
        var width = $('#content').width() - 75 - $('#content img').width();
        $('.overlay #content .container').height(height).width(width);
        console.log('resize');
    };

    var img = new Image();
    img.onload = function() {
        var height = $('#content img').attr('src', this.src).height();
        resizeModalImage(height);
    };
    img.src = 'assets/mona_lisa.jpg';

    $(window).resize(function() {resizeModalImage()});



    $('#thumbnail').attr('src', 'assets/mona_lisa.jpg');


    $('.element').click(function(){
        $('.overlay').css({'left': '0', 'visibility': 'visible'}).fadeIn(100, function() {
            $(this).addClass('visible');
        });
        $('#content').css({'margin': '25vh 25% 0'});


        $('#content p').html($(this).find('.text').html());
        //$('#content .image').css('background-image', 'url("assets/lisasmall.png")');
        //$('#content img').attr('src', 'assets/mona_lisa.jpg');
    });

    $("#content").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        if (!$('.overlay').hasClass('visible'))
            $('.overlay').fadeOut(100);
    });


    $('#content .close, #overlay').click(function(){
        $('.overlay').removeClass('visible');
        $('#content').css({'margin': '25vh 100% 0'})

    });


    $('.close-window').click(function(){
        document.location = "architectsdk://closearview";
    });


});