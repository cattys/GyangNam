// 자식 클릭시에도 이벤트가 실행되게 고치기
const quests = document.querySelectorAll('.quest');

quests.forEach( (quest,index) => {
    quest.addEventListener('click', ()=>{
        quests[index].classList.toggle('on');
    })
});

