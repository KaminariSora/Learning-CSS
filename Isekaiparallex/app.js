let zoom_in = document.getElementById('in');
let zoom_out = document.getElementById('out');
let pos = document.getElementById('isekai');
let txt = document.getElementById('in');
const delayInMilliseconds = 500;

zoom_in.addEventListener('click',function zoom_in(){
    setTimeout(function() {
        pos.style.scale = 2;
        pos.style.left = 300 + 'px';
        document.getElementById('out').classList.remove('display');
    }, delayInMilliseconds);
    document.getElementById('in').classList.add('fade');
    
})
zoom_out.addEventListener('click', function zoom_out(){
    setTimeout(function() {
        pos.removeAttribute('style');
        document.getElementById('in').classList.remove('fade');
      }, delayInMilliseconds);
      document.getElementById('out').classList.add('display');
})