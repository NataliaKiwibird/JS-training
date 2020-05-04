const openIcon = document.querySelector('.fa-bars');
const exitIcon = document.querySelector('.fa-times');
const burger = document.querySelector('.burger')
const nav = document.querySelector('nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
        openIcon.classList.add('hide');
        exitIcon.classList.remove('hide');
    } else {
        openIcon.classList.remove('hide');
        exitIcon.classList.add('hide');
    }
});


// MÔJ KOD:

// const hamburger = document.querySelector('.fa-bars');
// const exit = document.querySelector('.fa-times');
// const nav = document.querySelector('nav');

// hamburger.addEventListener('click', function () {
//     nav.style.transform = 'translateX(350px)';
//     exit.style.transform = 'translateX(300px)';
// });

// exit.addEventListener('click', function () {
//     nav.style.transform = 'translateX(-350px)';
//     exit.style.transform = 'translateX(-350px)';
// });