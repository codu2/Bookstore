const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const searchBtn = document.getElementById('search-btn');
const search = document.getElementById('search');

searchBtn.addEventListener('click', () => {
    search.classList.toggle('show');
});

const currentBtn = document.getElementById('current__btn');
const current = document.getElementById('current');

currentBtn.addEventListener('click', () => {
    current.classList.toggle('show');
});

const userBtn = document.getElementById('user__btn');
const user = document.getElementById('user');

userBtn.addEventListener('click', () => {
    user.classList.toggle('show');
});

const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');
const signIn = document.querySelector('.sign-in-container');
const signUp = document.querySelector('.sign-up-container');

signInBtn.addEventListener('click', () => {
    signIn.classList.add('active');
    signUp.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
    signUp.classList.add('active');
    signIn.classList.remove('active');
});

const searchClose = document.querySelector('.search-close');
const signInClose = document.querySelector('.sign-in-close');
const signUpClose = document.querySelector('.sign-up-close');
const currentClose = document.querySelector('.current-close');

searchClose.addEventListener('click', () => {
    search.classList.remove('show');
});

signInClose.addEventListener('click', () => {
    user.classList.remove('show');
});

signUpClose.addEventListener('click', () => {
    user.classList.remove('show');
});

currentClose.addEventListener('click', () => {
    current.classList.remove('show');
});

searchBtn.onclick = () => {
    if(current.classList.contains('show')) {
        current.classList.remove('show');
    }

    if(user.classList.contains('show')) {
        user.classList.remove('show');
    }
}

currentBtn.onclick = () => {
    if(search.classList.contains('show')) {
        search.classList.remove('show');
    }

    if(user.classList.contains('show')) {
        user.classList.remove('show');
    }
}

userBtn.onclick = () => {
    if(current.classList.contains('show')) {
        current.classList.remove('show');
    }

    if(search.classList.contains('show')) {
        search.classList.remove('show');
    }
}