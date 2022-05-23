$('nav a').click(function(e){
    e.preventDefault;
    var href = $(this).attr('href'),
        targetOffset = $(href).offset().top,
        headerHeight = $('header').innerHeight() + 35;
    $('html, body').animate({
        scrollTop: targetOffset - headerHeight
    }, 500)
});
