$(document).ready(function(){

    var resizeModalImage = function(height) {
        height = $('#content img').height() - 5;
        var width = $('#content').width() - 75 - $('#content img').width();
        $('.overlay #content .container').height(height).width(width);
    };

    var img = new Image();
    img.onload = function() {
        $('#content img').attr('src', this.src);
        resizeModalImage();
    };
    img.src = 'assets/mona_lisa.jpg';

    (setLeftSidebarPadding = function() {
        console.log('padding');
        var windowH = $(window).height();
        var sidebarH = $('#left-sidebar').height()
        var padding = (windowH - sidebarH) / 2;
        if (padding > 0)
            if (padding >= 30)
                $('#left-sidebar').height(sidebarH + padding * 2 - 60);
                padding = 30;
            $('#left-sidebar').css({'padding-top': padding, 'padding-bottom': padding});
    })();

    $(window).resize(function() {
        resizeModalImage();
        setLeftSidebarPadding();
    });



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