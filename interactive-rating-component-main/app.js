const rate = document.getElementById('rt');
const rated = document.getElementById('rtd');
const selection = document.getElementById('rtng');
const submit = document.getElementById('rate-btn');
const r1 = document.getElementById('s1');
const r2 = document.getElementById('s2');
const r3 = document.getElementById('s3');
const r4 = document.getElementById('s4');
const r5 = document.getElementById('s5');
const rating = document.getElementsByClassName('active');
let stars = null;

submit.addEventListener('click',() => {
    selection.innerText = 'You selected ' + stars + ' out of 5'
    if(stars !== null){
        rate.classList.add('deactive');
        rated.classList.remove('deactive');
    }else{
        return;
    }
});

r1.addEventListener('click',() => {
    r1.classList.add('active');
    r2.classList.remove('active');
    r3.classList.remove('active');
    r4.classList.remove('active');
    r5.classList.remove('active');
    stars = 1;
});

r2.addEventListener('click',() => {
    r2.classList.add('active');
    r1.classList.remove('active');
    r3.classList.remove('active');
    r4.classList.remove('active');
    r5.classList.remove('active');
    stars = 2;
});

r3.addEventListener('click',() => {
    r3.classList.add('active');
    r1.classList.remove('active');
    r2.classList.remove('active');
    r4.classList.remove('active');
    r5.classList.remove('active');
    stars = 3;
});

r4.addEventListener('click',() => {
    r4.classList.add('active');
    r1.classList.remove('active');
    r2.classList.remove('active');
    r3.classList.remove('active');
    r5.classList.remove('active');
    stars = 4;
});

r5.addEventListener('click',() => {
    r5.classList.add('active');
    r1.classList.remove('active');
    r2.classList.remove('active');
    r3.classList.remove('active');
    r4.classList.remove('active');
    stars = 5;
});
