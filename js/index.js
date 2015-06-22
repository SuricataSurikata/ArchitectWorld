$(document).ready(function(){

    (setLineHeight = function() {
        var font = parseInt($('.text').css('font-size'), 10);
        var height = parseInt($('.text').css('height'), 10);
        $('.text').css('line-height', height/Math.floor(height/font) + 'px');

        $('.text').each(function(){
            if (this.offsetHeight < this.scrollHeight) {
                console.log(this);
                console.log('has overflov')
                $(this).css({'content': '...', 'display': 'block'})
            }
        });

    })();

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
    img.src = 'assets/lisa/mona_lisa.jpg';

    (setLeftSidebarPadding = function() {
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
        setLineHeight();
    });


    $('.element').click(function(){
        $('.overlay').css({'left': '0', 'visibility': 'visible'}).fadeIn(100, function() {
            $(this).addClass('visible');
        });
        $('#content').addClass('modalMargin');
        $('#content p').html($(this).find('.text').html());
    });

    $("#content").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
        if (!$('.overlay').hasClass('visible'))
            $('.overlay').fadeOut(100);
    });


    $('#content .close, #overlay').click(function(){
        $('.overlay').removeClass('visible');
        $('#content').removeClass('modalMargin');
    });


    $('.close-window').click(function(){
        document.location = "architectsdk://closearview";
    });


});