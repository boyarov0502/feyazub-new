(function($) {
$(function() {
  var $content = $('div.tabs-content');
  var $caption = $('ul.tabs-caption li');
  var $button = $('.howlike-button');

  // **Отрисовка и функционал лайков**
  var arrayAnswers = [0, 0, 0, 0, 0, 0, 0];
  var myths = $('.myth-container .myth-wrap');

  var arrayDislike = [1, 2, 3, 4, 5, 6, 7];
  var containerDislike = $('.howlike-jar_dislike');
  for (let i = 0; i < myths.length; i++) {
    var $elementDislike = $("<div class='howlike-item howlike-item_dislike'><div class='howlike-count'><img src='/images/rating/dislike.svg'><span class='overline'>" + arrayDislike[i] + "</span></div><div class='howlike-text overline'>Всё равно верю <br>в этот миф</div></div>");

    containerDislike.append($elementDislike);
    $elementDislike.on('click', function () {
      if (arrayAnswers[i] == 0) {
        var prevCount = $(this).find('span.overline').text();
        var newCount = parseInt(prevCount) + 1;

        $(this).find('span.overline').text(newCount);
        $(this).find('div.howlike-text').css('color', '#F44336');
        arrayAnswers[i] = 'dislike';
      }
    });
    containerDislike.children('.howlike-item_dislike:first-child').fadeIn(300).css('display', 'flex');
  };

  var arrayLike = [10, 20, 30, 40, 50, 60, 70];
  var containerLike = $('.howlike-jar_like');
  for (let i = 0; i < myths.length; i++) {
    var $elementLike = $("<div class='howlike-item howlike-item_like'><div class='howlike-text overline'>Больше не верю <br>в этот миф</div><div class='howlike-count'><img src='/images/rating/like.svg'><span class='overline'>" + arrayLike[i] + "</span></div></div>");

    containerLike.append($elementLike);
    $elementLike.on('click', function () {
      if (arrayAnswers[i] == 0) {
        var prevCount = $(this).find('span.overline').text();
        var newCount = parseInt(prevCount) + 1;

        $(this).find('span.overline').text(newCount);
        $(this).find('div.howlike-text').css('color', '#43A047');
        arrayAnswers[i] = 'like';
      }
    });
    containerLike.children('.howlike-item_like:first-child').fadeIn(300).css('display', 'flex');
  };

  // **Определение лайков**
  var $items_dislike = $('div.howlike-item_dislike');
  var $items_like = $('div.howlike-item_like');

  // **Отображение при нажатии на пункт**
	$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
		var prevIndex = $('ul.tabs-caption li.active').attr('data-index');
		var index = $(this).attr('data-index');
		$caption.removeClass('active');
		$(this).addClass('active');
    $button.finish().fadeOut(300, function () {
      $button.fadeIn(300);
    });
		$content.finish().eq(prevIndex).fadeOut(300, function() {
			$content.eq(index).fadeIn(300);
		});
    $items_dislike.finish().eq(prevIndex).fadeOut(300, function () {
      $items_dislike.eq(index).fadeIn().css('display', 'flex');
    });
    $items_like.finish().eq(prevIndex).fadeOut(300, function () {
      $items_like.eq(index).fadeIn().css('display', 'flex');
    });
	});
  
  // **Отображение при нажатии на кнопку**
	$button.on('click', function(e) {
    e.preventDefault();
    scrollToTab();

		var prevIndex = $('ul.tabs-caption li.active').attr('data-index');
    if (prevIndex == 6) {
      var index = 0;
    } else {
      var index = parseInt(prevIndex) + 1;
    }
    
    $button.finish().fadeOut(300, function () {
      $button.fadeIn(300);
    });
		$caption.removeClass('active').eq(index).addClass('active');
		$content.finish().eq(prevIndex).fadeOut(300, function() {
			$content.eq(index).fadeIn(300);
		});
    $items_dislike.finish().eq(prevIndex).fadeOut(300, function () {
      $items_dislike.eq(index).fadeIn().css('display', 'flex');
    });
    $items_like.finish().eq(prevIndex).fadeOut(300, function () {
      $items_like.eq(index).fadeIn().css('display', 'flex');
    });
	});

  // **Прокрутка к табу**
  function scrollToTab() {
    var width = $(window).width();

    if (width <= 1279) {
      var destination = $('.myth-container').offset().top - 32;

      $('html,body').animate({ scrollTop: destination }, 300);
    }
  };

});
})(jQuery);