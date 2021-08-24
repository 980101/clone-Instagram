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

let search = document.querySelector('.search_input');
let search_input = search.querySelector('.search_input>input');

search_input.onfocus = inputFocus;
search_input.onblur = inputBlur;

function inputFocus() {
    search.classList.toggle('active');
}

function inputBlur() {
    // 입력 문자열이 있을 경우, 빈 문자열로 초기화
    search_input.value = "";
    
    search.classList.toggle('active');
}