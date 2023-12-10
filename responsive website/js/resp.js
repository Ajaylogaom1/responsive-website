navbar = document.querySelector('.navbar');
burgur = document.querySelector('.burgur');
navleft = document.querySelector('.nav-left');
navright = document.querySelector('.nav-right');

burgur.addEventListener('click', ()=> {
    navright.classList.toggle('v-class-resp');
    navleft.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})