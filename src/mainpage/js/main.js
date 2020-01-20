$(document).ready(function () {
	$('.review-slider').slick({
		arrows: false,
		dots: true
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
	
	