$('nav a').click(function(e){
    e.preventDefault;
    var href = $(this).attr('href'),
        targetOffset = $(href).offset().top,
        headerHeight = $('header').innerHeight() + 45;
    $('html, body').animate({
        scrollTop: targetOffset - headerHeight
    }, 1000)
});
