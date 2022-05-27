$('nav a, #content a').click(function(e){
    e.preventDefault;
    var href = $(this).attr('href'),
        targetOffset = $(href).offset().top,
        headerHeight = $('header').innerHeight() + 45;
    $('html, body').animate({
        scrollTop: targetOffset - headerHeight
    }, 1000)
});

function sendMail() {

    let name = document.querySelector('input[name="contact-name"]').value
    let from = document.querySelector('input[name="contact-email"').value
    let subject = document.querySelector('input[name="contact-title"]').value
    let body = document.querySelector('textarea[name="contact-message"]').value

    console.log(name+'\n'+from+'\n'+subject+'\n'+body)
 
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sda.sys.2022@gmail.com",
        Password : "Senha@sdasys#2022",
        To : "sda.sys.2022@gmail.com",
        From : from,
        Subject : subject,
        Body : body+'\n Ass. '+name
    }).then(
      message => alert('E-mail enviado!')
    );
    document.querySelector('input, textarea').reset()
}
