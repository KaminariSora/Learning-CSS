let picture1 = document.getElementById('picture1');
let floor = document.getElementById('floor');
let car = document.getElementsByClassName('car');

window.addEventListener('scroll', function () {
    let value = window.scroll;
    picture1.style.top = value * 2 + 'px';
    floor.style.left = value * 50 + 'px';
    car.style.left = 10 *2 + 'px';
})