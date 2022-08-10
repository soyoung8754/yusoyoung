$(document).ready(function(){
	
	//상단메뉴 (브라우저 크기 500픽셀 이상에서 볼때):주메뉴에 마우스를 댈때 (웹접근성강화)
	if($(window).width()>500){
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
		$(this).next().stop().slideDown();
	});
	//하단 드롭다운메뉴영역 벗어나면 올라간다.
	$("#partner+nav").mouseleave(function(){
		$(this).slideUp();
	});


	
	///////////////////////////////////////////////////////
	//모바일에서 햄버거 아이콘 클릭시 메뉴가 왼쪽에서 나타남
	if( $(window).width() <= 500 ){
	
		$("header button.open").click(function(){
				//닫기(X) 보인다
				$("header button.close").show();
				//햄버거 안보인다.
				$(this).hide();
				$("header>nav").stop().animate({left:0 });
				
				$("body").css("overflow",'hidden');
		});
		
		$("header button.close").click(function(){
				//닫기(X) 보인다
				$("header button.open").show();
				//햄버거 안보인다.
				$("header button.close").hide();
				$("header>nav").stop().animate({left: "-100vw" });
				
				$('header li>a.arr').next().stop().slideUp();
				$('header li>a.arr').removeClass('arr2').addClass('arr1');
				
				$("body").css("overflow",'auto');
		});
	
		
		$('header li>a.arr').click(function(){			
			if(  $(this).hasClass('arr1') == true ){
					$('header li>a.arr2').next().stop().slideUp();					
					$(this).next().stop().slideDown();
					$('header li>a.arr').removeClass('arr2').addClass('arr1');
					$(this).removeClass('arr1').addClass('arr2');
			} else {	
					$(this).removeClass('arr2').addClass('arr1');
					$(this).next().stop().slideUp();
			}					
		});
		
		$("header> nav> div, header  nav>a").click(function(){
				$("header button.open").show();
				$("header button.close").hide();
				$("header>nav").stop().animate({left: "-100vw" });
				
				$('header li>a.arr').next().stop().slideUp();
				$('header li>a.arr').removeClass('arr2').addClass('arr1');	
				
				$("body").css("overflow",'auto');
		});
		
		
	}///////////////모바일: 끝
	
});//////////////////////////////////////전체 끝부분