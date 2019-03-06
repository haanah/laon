	//gnb 모바일
	$('.gnb>button').click(function(){
		$(this).next().slideToggle(200);	
	});
	
	//gnb 데스크탑 : 하위 메뉴를 계속 보여주고 싶으면 추가 
    /*$('.gnb>ul>li>a').mouseover(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    }).focus(function(){
        $(this).trigger('mouseover');
	});*/

$('.gnb>ul>li').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
    }).focus(function(){
        $(this).trigger('mouseover');
});


$('.gnb').focusout(function(){
	$(this).find('li').removeClass('active');
});