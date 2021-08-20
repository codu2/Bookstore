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

$('.book-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 1500
});
/*.book-slider를 jquery로 불러온 다음 무한대로 슬라이드 할 수 있도록 하고
화면에 보여지는 item의 갯수는 3개이며, 스크롤 할때마다 2개의 item이 이동하도록 함*/

const countDownTimer = function (id, date) {
    let myTime = new Date(date);
    let mySec = 1000;
    let myMin = mySec * 60;
    let myHour = myMin * 60;
    let myDay = myHour * 24;
    let timer;

    function showRemaining() {
        const now = new Date();
        let distDt = myTime - now;

        if(distDt < 0) {
            clearInterval(timer);
            /*document.querySelector('id').textContent='해당 이벤트가 종료되었습니다.';
            인수를 (id, date)로 바꿔야함*/
            return;
        }

        let days = Math.floor(distDt / myDay);
        let hours = Math.floor((distDt % myDay) / myHour);
        let minutes = Math.floor((distDt % myHour) / myMin);
        let seconds = Math.floor((distDt % myMin) / mySec); 
        /*Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환함*/

        // document.getElementById(id).textContent = date.toLocalestring() + "까지 : ";
        document.getElementById('day').textContent = days + ' days';
        document.getElementById('hour').textContent = hours + ' hours';
        document.getElementById('min').textContent = minutes + ' minutes';
        document.getElementById('sec').textContent = seconds + ' seconds';
    }

    timer = setInterval(showRemaining, 1000);
}

countDownTimer('time-sale-clock', '09/29/2021');

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