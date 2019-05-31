$(document).ready(function(){


  

  $('.reviews-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

  var reviewsSlides = $('.reviews-slides')
  reviewsSlides.owlCarousel({
    items: 1,
    dots: false,
    autoHeight:true,
    loop: true,
    nav: true
  })
})