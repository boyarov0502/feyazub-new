$(document).ready(function () {
	$('.review-slider').slick({
		arrows: false,
		dots: true
	});


	$('.fear__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.slider-nav'
	  });
	  $('.slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.fear__slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0px',
		centerMode: true
	  });

});

