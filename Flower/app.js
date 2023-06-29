let flower = document.getElementById('flower');
let btn = document.getElementById('btn');
let image = document.getElementById('image');
let txt = document.getElementById('text');

flower.addEventListener('click', function () {
    // alert("kuru kuru");
    flower.innerHTML = "<h1>เหงาเว้ยยยยยยยยยยยย</h1>";
    flower.classList.remove('wrap');
    flower.classList.add('alone');
    btn.classList.add('show');
    txt.classList.remove('show');
    txt.classList.add('hide');
});

btn.addEventListener('click', function () {
    // alert("ไม่สนใจหน่อยเบ๋อ;-;");
    image.classList.remove('hide');
    image.classList.add('showImg');
    setTimeout(() => {
        location.reload();
    }, 500);
})