$(document).ready(function(){
  
  $("nav.menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
  });
  

	if(window.innerWidth < 993){
		$('nav.menu a').on('click',function(){
			$('.header-menu').removeClass('active');
			$('.burger svg').removeClass('active')
		})
	}

  $('.home-action').on('click',function(){
    
    var top = $('#about').offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	})
	


	$('.burger').on('click',function(){

		$(this).children('svg').toggleClass('active');
		$(this).parent().toggleClass('active')
	})

})