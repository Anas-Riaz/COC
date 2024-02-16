const sr = ScrollReveal({
    distance: '65px',
    duration: 3600,
    delay: 450, 
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin: 'top'});
sr.reveal('.hero-img', {delay:350, origin: 'top'});
sr.reveal('.icons', {delay:300, origin:'left'});
sr.reveal('.scroll-down', {delay:300, origin:'right'});


let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = ()=> {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
    
};

const instagramLink = document.getElementById('instagram-link');
const linkedinLink = document.getElementById('linkedin-link');
const behanceLink = document.getElementById('behance-link');

instagramLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://www.instagram.com/_anas_468/', '_blank');
});

linkedinLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://www.linkedin.com/in/syed-anas-riaz-58b16a235/', '_blank');
});

behanceLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://www.behance.net/anasriaz1', '_blank');
});





