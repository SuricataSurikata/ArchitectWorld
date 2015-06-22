$(document).ready(function(){

    var resizeModalImage = function() {
        var height;
        if ((height = $('#content img').height() - 5) < 0)
            setTimeout(resizeModalImage, 200);
        else {
            var width = $('#content').width() - 75 - $('#content img').width();
            $('.overlay #content .container').height(height).width(width);
        }
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
        var sidebarH = $('#left-sidebar').css('height', '').height()
        var padding = (windowH - sidebarH) / 2;
        if (padding > 0) {
            if (padding > 30)
                padding = 30;
            $('#left-sidebar').css({'padding-top': padding, 'padding-bottom': padding, 'height': 'calc(100vh - ' + 2 * padding + 'px)'});
        } else
            $('#left-sidebar').css({'padding-top': 0, 'padding-bottom': 0, 'height': ''});
    })();

    $(window).resize(function() {
        setLeftSidebarPadding();
        resizeModalImage();
    });


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