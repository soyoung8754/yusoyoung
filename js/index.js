$(document).ready(function(){
	
	//상단메뉴 (브라우저 크기 500픽셀 이상에서 볼때):주메뉴에 마우스를 댈때 (웹접근성강화)
	if($(document).width()>500){
		$("header li> a").on("focus mouseenter", function(){
			//모든 하위메뉴를 안보이게 한 후
			//$("header li nav").stop().slideUp();
			//해당 주메뉴에 대한 하위메뉴만 보이게 한다.
			$("nav nav, #white").stop().slideDown();
		});
		
		$("header ul").on("blue mouseleave", function(){
			//모든 하위메뉴를 안보이게 한 후
			//$("header li nav").stop().slideUp();
			//해당 주메뉴에 대한 하위메뉴만 보이게 한다.
			$("nav nav, #white").stop().slideUp();
		});
		
	} 
	
	//하단 드롭다운메뉴 기능
	$("#partner").click(function(){
		$(this).next().slideDown();
	});
	//하단 드롭다운메뉴영역 벗어나면 올라간다.
	$("#partner+nav").mouseleave(function(){
		$(this).slideUp();
	});
	
	////////////////////////////////
	
	//모바일에서 햄버거 아이콘 클릭시 메뉴가 왼쪽에서 나타남
	if( $(window).width() <= 500 ){
	
		$("header button.open").click(function(){
				//닫기(X) 보인다
				$("header button.close").show();
				//햄버거 안보인다.
				$(this).hide();
				$("header>nav").stop().animate({left:0 });
		});
	
	 //모바일에서 메뉴 항목을 클릭하면 메뉴가 왼쪽으로 사라진다.
		$("header>nav nav, header>nav a:not(.arr), .close").on("click mouseleave" , function(){
				//닫기(X) 안보인다
				$("header button.close").hide();
				//햄버거 보인다.
				$("header button.open").show();
				//메뉴가 왼쪽으로 사라진다
				$("header>nav").stop().animate({left:"-100vw"});
				$(this).stop().slideUp();
		});
	
		 //모바일에서 메뉴 항목에서 주메뉴 오른쪽 화살표 클릭하면 서브메뉴 닫힌다
		$("header a.arr").click(function(){
			$(this).next().slideToggle();
		});  
	}///////////////모바일: 끝
	
	
	
	
});////////////////전체 끝부분