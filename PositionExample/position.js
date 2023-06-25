let con = document.getElementById('box');
let active = document.getElementsByClassName('active');
let prevButton = null;
const wrapper = document.getElementById("wrapper");

function setContainerClass(className) {
    con.classList.remove('container', 'container-1', 'container-2', 'container-3', 'container-4', 'container-5', 'container-6', 'container-7','container-8','container-9');
    con.classList.add(className);
}

btn1.addEventListener('click', function () {
    setContainerClass('container-1');
});

btn2.addEventListener('click', function () {
    setContainerClass('container-2');
});

btn3.addEventListener('click', function () {
    setContainerClass('container-3');
});

btn4.addEventListener('click', function () {
    setContainerClass('container-4');
});

btn5.addEventListener('click', function () {
    setContainerClass('container-5');
});

btn6.addEventListener('click', function () {
    setContainerClass('container-6');
});

btn7.addEventListener('click', function () {
    setContainerClass('container-7');
});

btn8.addEventListener('click', function () {
    setContainerClass('container-8');
});

btn9.addEventListener('click', function () {
    setContainerClass('container-9');
});


wrapper.addEventListener('click', (e) => {

    const isButton = e.target.nodeName === 'BUTTON';

    if (!isButton) {
        return;
    }

    e.target.classList.add('active'); // Add .active CSS Class

    if (prevButton !== null) {
        prevButton.classList.remove('active');  // Remove .active CSS Class
    }

    prevButton = e.target;

});