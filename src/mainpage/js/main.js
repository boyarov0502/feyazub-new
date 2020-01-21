$(document).ready(function () {
	$('.review-slider').slick({
		arrows: false,
		dots: true
	});

	

});

$(document).ready(function () {
	$('.slider__baby').slick({
		arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    
  
  });

	

});


  $(".fear-img")
    .attr('rel', 'gallery')
    .fancybox({
      padding : 0,
      helpers : {
        overlay : {
          css : {
            'background' : 'rgba(58, 42, 45, 0.95)'
          }
        }
      }
	});
	
	