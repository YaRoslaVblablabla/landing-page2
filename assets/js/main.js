new WOW().init();

$(window).scroll(function(){
	if ($(this).scrollTop()>500)
		$('a.scroll').fadeIn();
	else
		$('a.scroll').fadeOut(400);
})

$('a.scroll').click(function(){
	$('body, html').animate({
		scrollTop: 0
	}, 1000);
	return false;
})


$('button, .btn').click(function() { 
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});

$('.slider').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	speed: 1300,
	easing: 'ease',
	infinite: true,
	adaptiveHeight: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 800,
	waitForAnimete: false, 
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

