ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    DelayNode: 400

});

ScrollReveal().reveal('#well .btn', { DelayNode: 500, origin: 'top' });
ScrollReveal().reveal('#navbar .nav-brand,#home .row-1,#about .card-img-top,#about .year,#feature .card,#about .card-body img, .title,#contact .map', { DelayNode: 500, origin: 'left' });
ScrollReveal().reveal('#home .img, #about .a-title,#feature .img,#team .content-2 .img,#navbar .meu-bar,#about .about-content', { DelayNode: 500, origin: 'right' });
ScrollReveal().reveal('#home .row-2,#service,#team .team-left,#team .card', { DelayNode: 500, origin: 'bottom' });
ScrollReveal().reveal('#contact .form .form-outline,#contact .form #submit', { DelayNode: 500, origin: 'right', interval: 400 });
ScrollReveal().reveal('#service .row .col-6,#portfolio .row .col-6,#navbar .nav,#team .content,#contact .form,#blog .row .card', { DelayNode: 500, origin: 'bottom', interval: 300 });