$(document).ready(function () {
    let docH = $(document).height();
    let winH = $(window).height();

        let maxLnbH = 0;

        let gnbH = $('header .gnb').height();

        $('header .lnb').each(function(){
            let lnbH = $(this).outerHeight(true);

            if(maxLnbH < lnbH){
                maxLnbH = lnbH
            }
            $('header .lnb_bg').height(maxLnbH + gnbH);
        });
        $('header .lnb').height(maxLnbH);

        $('header .gnb').mouseenter(function(){
            $('header .lnb,header .lnb_bg').stop().fadeIn(150).css({display:'flex'})
        })
        $('header .gnb').mouseleave(function(){
            $('header .lnb,header .lnb_bg').stop().fadeOut(150)
        })
    });

    $(document).ready(function () {
        function setLineHeight() {
            let bodyHeight = $("body").prop("scrollHeight"); // body의 전체 높이 가져오기
            $(".line2, .line3").css("height", bodyHeight + "px");
        }
    
        setLineHeight(); // 페이지 로드 시 실행
        $(window).resize(setLineHeight); // 창 크기 변경 시 다시 적용
    });

    // 페이지 로드 시 적용
    window.onload = setLineHeight;
    // 창 크기 변경 시 다시 계산
    window.onresize = setLineHeight;

    ////visual img 를 header 제외한 높이로 설정////
    // $(document).ready(function() {
    //     var headerHeight = $('header').outerHeight(); // header의 전체 높이 가져오기
    //     $('#visual img').css('height', 'calc(100vh - ' + headerHeight + 'px)'); // img 높이 설정
    // });

    