$(document).ready(function(){

    //mouseEvent
    $(".sBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".intro").offset().top},
            'slow')
    })
    $(".pBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".profile").offset().top},
            'slow')
    })
    $(".skBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".skill").offset().top},
            'slow')
    })
    $(".bBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".banner").offset().top},
            'slow')
    })
    $(".popBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".popUp").offset().top},
            'slow')
    })
    $(".rBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".redesignMain").offset().top},
            'slow')
    })
    $(".lBtn").click(function() {
        $('html,body').animate({
            scrollTop: $(".bottom").offset().top},
            'slow')
    })
    $(".cBtn").click(function(e){
        e.preventDefault()
    })

    // intro animation
    $("#introTxt path").each(function(){
        let path = $(this)
        let idx = path.index()
        let secondTerm = 0.1
        let delay = idx*secondTerm

        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)

        setTimeout(function(){
            path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
        },500)
    })
    setTimeout(function(){
        $("#introTxt").addClass("on")
    },1000)
    

    // intro stroke animation
    $(window).scroll(function(){
        let wintop = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        
        $(".intro").each(function(){
            if(wintop>=$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

    })

    //profileLeft
    $(window).scroll(function(){
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        
        if(winst>=$(".profile").offset().top){
            $(".profileLeft").addClass("on")
        }else{
            $(".profileLeft").removeClass("on")
        }

    })

    //bannerslide
    let count = 0;
    $(".prevBtn").click(function(){
        count--
        if(count<0){count=6}
        $(".bannerSlideTrain").css("transform","translateX(-"+(count*14.285)+"%)")
    })
    $(".prevNext").click(function(){
        count++
        if(count>6){count=0}
        $(".bannerSlideTrain").css("transform","translateX(-"+(count*14.285)+"%)")
    })

    $(".bannerOn").click(function(e){
        e.preventDefault()
        $(".bannerSlide").addClass("show")
        $(".blackCover").addClass("on")
    })

    $(".closeBtn").click(function(){
        $(".bannerSlide").removeClass("show")
        $(".blackCover").removeClass("on")
    })

    //popupslide
    $(window).scroll(function(){
        let winTop=$(window).scrollTop()
        let fixedTop=$(".fixedSlide").offset().top
        let scrollDistance = winTop-fixedTop
        let movingAreaTitle = $(".movingStation").height()
        
        if(scrollDistance<0){
            console.log($(window).scrollTop())
            $(".movingStation").css("position","absolute")
            $(".movingStation").css("left","0")
            $(".movingStation").css("top","0")
        }
        if(scrollDistance>=0 && scrollDistance<=8000-movingAreaTitle){
            $(".movingStation").css("position","fixed")
            $(".movingStation").css("left","0")
            $(".movingStation").css("top","0")

            let percent2 = (scrollDistance/(8000-movingAreaTitle)*87.5) //0~87.5까지의 수
            $(".movingImg").css("transform","translateX(-"+percent2+"%)")

            let count = (8000-movingAreaTitle)/(8000-movingAreaTitle)/8
            
        }
        if(scrollDistance>8000-movingAreaTitle){
            $(".movingStation").css("position","absolute")
            $(".movingStation").css("left","0")
            $(".movingStation").css("top",(8000-movingAreaTitle)+"px")
        }
    })

    //redesign
    $(".plan").click(function(e){
        e.preventDefault()
        $(".xMark").addClass("on")
        $(".redesignImg").css("opacity","1")
        $(".redesignImg").css("pointer-events","auto")
        $(".redesignImg").css("transition","all 0.5s ease 0s")
        
    })
    $(".xMark").click(function(){
        $(".xMark").removeClass("on")
        $(".xMark").css("pointer-events","auto")
        $(".redesignImg").css("opacity","0")
        $(".redesignImg").css("pointer-events","none")
    })

    //위로 타닥 부딪치면 나오는 스킬퍼센티지
    $(window).scroll(function(){
        let winscroll = $(window).scrollTop()
        let skillTop = $(".skill").offset().top
        if(winscroll>= skillTop){
            $(".illuLevel").addClass("on")
            $(".photoLevel").addClass("on")
            $(".htLevel").addClass("on")
            $(".csLevel").addClass("on")
            $(".jsLevel").addClass("on")
            $(".jqLevel").addClass("on")
        }else{
            $(".illuLevel").removeClass("on")
            $(".photoLevel").removeClass("on")
            $(".htLevel").removeClass("on")
            $(".csLevel").removeClass("on")
            $(".jsLevel").removeClass("on")
            $(".jqLevel").removeClass("on")
        }
    })

})