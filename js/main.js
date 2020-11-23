(function($){
    // https://stackoverflow.com/questions/889967/jquery-load-call-doesnt-execute-javascript-in-loaded-html-file
    // $("#images").load(location.href+" #images",function(){
    //     $.getScript("js/productHelper.js"); 
    // });


// load 메소드
    // $('#container').load('main.html #content', function(){
    //     $.getScript("js/123.js");
    //     // $.getScript('ajax/test.js', function() {
    //     //     alert('Load was performed.');
    //     //   });
    // });
    // $('.logo a').on('click', function(e){
    //     e.preventDefault();
    //     url = this.href;
    //     $('#content').remove();
    //     $('#container').load(url + ' #content')
    // })
    // $('.quickMenu a').on('click', function(e){
    //     e.preventDefault();
    //     $.getScript("js/qna.js");
    //     url = this.href;
    //     $('#content').remove();
    //     $('#container').load(url +' #content');
    //     $('#header').addClass('on');
    // })
    // $('.gnb a').on('click', function(e){
    //     e.preventDefault();
    //     $('.gnb').removeClass('on');
    //     url = this.href;
    //     $('#content').remove();
    //     $('#container').load(url +' #content');
    //     $('#header').addClass('on');
    // })
    $('.hbr').on('click', function(){
        $('.gnb').addClass('on');
        console.log('여기')
    })
    $('.exit').on('click', function(){
        $('.gnb').removeClass('on');
        console.log('출력')
    })
    // window.onload = function(){
    //     var abc =document.getElementById('main-btn')
    //     abc.addEventListener('click', bcd);
    //     function bcd(){
    //         console.log('abc')
    //     }

    // }


})(jQuery)


// JS
