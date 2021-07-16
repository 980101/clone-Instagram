let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

let firstToken  = document.querySelector('.firstToken');
let secondToken = document.querySelector('.secondToken');;

let photos = document.querySelectorAll('.photos')[1];
let firstImg = document.querySelector('img[scr="images/img2-1.jpg"]');
let secondImg = document.querySelector('img[scr="images/img2-2.jpg"]');

prevBtn.addEventListener('click', () => {
    photos.style.transform = 'translate(0px)';

    firstToken.classList.toggle('active');
    secondToken.classList.toggle('active');

    prevBtn.style.display = 'none';
    nextBtn.style.display = 'block';
});

nextBtn.addEventListener('click', () => {
    photos.style.transform = 'translate(-614px)';

    firstToken.classList.toggle('active');
    secondToken.classList.toggle('active');

    prevBtn.style.display = 'block';
    nextBtn.style.display = 'none';
});