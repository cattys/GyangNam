'use strict';

window.addEventListener('load', () => {
    console.log('page is fully loaded');
});

// scroll header
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    const mainContent = document.querySelector('.mainContent');
    if (window.scrollY > headerHeight) {
        header.classList.add('on');
    } else if (!mainContent) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
});

// 메인화면 + 버튼
if (document.querySelector('.main-btn')) {
    console.log('없음');
    const mainBtn1 = document.querySelector('.btn1');
    const mainBtn2 = document.querySelector('.btn2');
    const mainBtn3 = document.querySelector('.btn3');
    const mainBtn4 = document.querySelector('.btn4');
    const plusBtn = document.querySelector('#plusBtn');
    const btnWrap1 = document.querySelector('.btn-wrap1')
    const btnWrap2 = document.querySelector('.btn-wrap2')
    const btnWrap3 = document.querySelector('.btn-wrap3')
    const btnWrap4 = document.querySelector('.btn-wrap4')
    // document.addEventListener('scroll', ()=>{
    //     if(window.scrollY>headerHeight/2){
    //     }
    // })
    
    mainBtn1.addEventListener('click', (e) => {
        console.log('daf')
        plusBtn.classList.add('on');
        btnWrap1.style.display = 'none';
    })
    mainBtn2.addEventListener('click', () => {
        plusBtn.classList.remove('on');
        btnWrap1.style.display = 'block';
    })
    
    mainBtn3.addEventListener('click', () => {
        btnWrap3.classList.toggle('active');
    })
    
    mainBtn4.addEventListener('click', () => {
        btnWrap4.classList.toggle('active');
    })
}

// srch
let srch = document.querySelector('.srch');
let srchModal = document.querySelector('.srch__modal--layer');
srch.addEventListener('click', ()=>{
    srchModal.classList.add('on');
})
let closeModal = document.querySelector('.modal__close')
closeModal.addEventListener('click', ()=>{
    srchModal.classList.remove('on');
})
// GNB 창
const hbr = document.querySelector('.hbr');
const exit = document.querySelector('.exit');
const gnb = document.querySelector('.gnb');
hbr.addEventListener('click', () => {
    gnb.classList.add('on');
})
exit.addEventListener('click', () => {
    gnb.classList.remove('on');
})


let prev = document.querySelector('.prev');
prev.addEventListener('click', ()=>{
    window.history.back();
})

const PageNone = () => {
    alert('준비중입니다.');
    // history.back();
}



// 요리법별로 뜨게 -> 뭘써야하지??
// 로그인 유효성 검사
// 검색창 구현
// 터치 -> 스크롤
