'use strict';

// tab창 구현
// if (document.querySelector('.tabCont')) {
//     console.log('탭 1단계 성공');
//     const tabBtn = document.querySelector('.tabTit');
//     const tabItm = document.querySelectorAll('.tab__item');
//     tabBtn.addEventListener('click', (e) => {
//         // console.log('adfa')
//         const btnOn = document.querySelector('.tab.on');
//         e.preventDefault();
//         btnOn.classList.remove('on');
//         e.target.classList.add('on');
//         const target = e.target.dataset.cuisine;
//         tabItm.forEach(item => {
//             if (target === '*' || target === item.dataset.filter) {
//                 item.classList.remove('invisible');
//             } else {
//                 item.classList.add('invisible');
//             }
//         });
//     })
// } else {
//     console.log('탭창실패');
// }


// 로드?
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



// 요리법별로 뜨게 -> 뭘써야하지??
// 로그인 유효성 검사
// 검색창 구현
// 터치 -> 스크롤
// 메인 하단에 뭔가 다른거 채워넣기(잘리는거 때문에)
// 이미지 크기 줄이기 (메뉴 + 배경) + 정사이즈로
// 안만든곳은 alert 창으로 준비중입니다. 뜨면 좋겠다
// 공지사항 옵션별로 분류되게
// FAQ 다른데 클릭해도 toggle되게

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


const prev = document.querySelector('.prev');
prev.addEventListener('click', ()=>{
    window.history.back();
})

const PageNone = () => {
    alert('준비중입니다.');
    // history.back();
}