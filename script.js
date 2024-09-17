let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
ScrollReveal({

    distance: '80px',
    duration: 1800,
    delay: 100
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .skill-container, .portfolio-box, .icons', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 ,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p ,.about-content', { origin: 'right' });
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'IT Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true

});