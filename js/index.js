$(document).ready(function(){

    var descriptions = {monaLisa: "The Mona Lisa (Italian: Monna Lisa or La Gioconda, French: La Joconde) or La Gioconda is a half-length portrait of a woman by the Italian artist Leonardo da Vinci, which has been acclaimed as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\".The painting, thought to be a portrait of Lisa Gherardini, the wife of Francesco del Giocondo, is in oil on a whiteLombardy poplar panel, and is believed to have been painted between 1503 and 1506. Leonardo may have continued working on it as late as 1517. It was acquired by King Francis I of France and is now the property of theFrench Republic, on permanent display at the Louvre Museum in Paris since 1797. The subject's expression, which is frequently described as enigmatic, the monumentality of the composition, the subtle modeling of forms, and the atmospheric illusionism were novel qualities that have contributed to the continuing fascination and study of the work."}
    console.log(descriptions)

    $('#thumbnail').attr('src', 'assets/mona_lisa.jpg');

    $('#title p').html(descriptions.monaLisa);

    $('.element').click(function(){
        $('.overlay').css({'left': '0', 'visibility': 'visible'}).fadeIn(100, function() {
            $(this).addClass('visible');
        });
        $('#content').css({'margin': '25vh 25% 0'});


        $('#content p').html($(this).find('.text').html());
        //$('#content .image').css('background-image', 'url("assets/lisasmall.png")');
        $('#content img').attr('src', 'assets/mona_lisa.jpg');
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