let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_front = document.getElementById('mountain_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_behind = document.getElementById('mountains_behind');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountain_front.style.top = value * 0. + 'px';
    text.style.marginRight = value * 0.75 + 'px';
    btn.style.marginTop = value * 0.75 + 'px';
    header.style.top = value * 0.5 + 'px';
})