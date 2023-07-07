let MyDiv = document.getElementById('test');
let btn = document.getElementById('btn');
let next_1 = document.getElementById('next_1');
let bk = document.getElementById('back');

document.addEventListener('DOMContentLoaded', function() { // check state of back button
  if (next_1.classList.contains('active')) {
    bk.style.display = "none";
  }
});

next_1.addEventListener('click', function() {

  if (next_1.classList.contains('active')) { // page 1 => page 2
    next_1.classList.remove('active');
    next_1.classList.add('active2');
    bk.style.display = "block";
    location.href = "#second";
  }else if (next_1.classList.contains('active2')){ //page 2 => page 3
    next_1.classList.add('active');
    next_1.classList.remove('active2');
    bk.style.display = "block";
    next_1.style.display = "none";
    location.href = "#third";
    location.reload();
  }
});

bk.addEventListener('click', () => {
  window.history.back();
  if(next_1.classList.contains('active')) { //page 1
    next_1.classList.remove('active');
    next_1.classList.add('active2');
    bk.style.display = "none";
  }
})

/*
  forward active = back hide
  forward active2 = back active
  forward active3 = back active2


*/