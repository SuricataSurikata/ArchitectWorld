$(document).ready(function(){

    $('#thumbnail').attr('src', 'assets/lisasmall.png');

    //var elements = [{img: '', }, [], []];
    //
    //$('#elements div').each(function() {
    //
    //});



    $('#elements div').click(function(){
        $('.overlay').fadeIn(200);
        $('#content p').html($(this).html());
        $('#content img').attr('src', 'assets/lisasmall.png');
        $('.close-window').hide();
    });

    $('#content .close, #overlay').click(function(){
       $('.overlay').fadeOut(200, function() {
           $('.close-window').show();
       });
    });


});