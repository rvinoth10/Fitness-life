// navabar 
let nav = document.querySelector('.nav-top');
let home = document.querySelector('#home');
let img = document.querySelector('.nav-brand');
// top-btn
let top_btn = document.querySelector('.top');
let about = document.querySelector('#home');

window.onscroll = () => {
    if (window.pageYOffset >= home.offsetTop) {
        nav.classList.add('sticky');
        img.classList.add('width');
    } else {
        nav.classList.remove('sticky');
        img.classList.remove('width');
    }

    if (window.pageYOffset >= about.offsetTop) {
        top_btn.classList.add('top-btn');
    } else {
        top_btn.classList.remove('top-btn');
    }
}


// scroll behavior

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    DelayNode: 400

});

ScrollReveal().reveal('#well .btn', { DelayNode: 500, origin: 'top' });
ScrollReveal().reveal('#home .row-1,#about .card-img-top,#about .year,#feature .card,#about .card-body img, .title,#contact .map,#footer .nav-brand,#footer .row .box h6', { DelayNode: 500, origin: 'left' });
ScrollReveal().reveal('#home .img, #about .a-title,#feature .img,#team .content-2 .img,#about .about-content', { DelayNode: 500, origin: 'right' });
ScrollReveal().reveal('#home .row-2,#service,#team .team-left,#team .card,#footer .sub-footer h5', { DelayNode: 500, origin: 'bottom' });
ScrollReveal().reveal('#contact .form .form-outline,#contact .form #submit', { DelayNode: 500, origin: 'right', interval: 400 });
ScrollReveal().reveal('#service .row .col-12,#portfolio .row .col-6,#team .content,#contact .form,#blog .row .card,#footer .social a', { DelayNode: 500, origin: 'bottom', interval: 300 });