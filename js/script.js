/*======================================
プライバシーポリシー
======================================*/
jQuery('.js-close_button').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).hide();
});

jQuery('.js-open_button').on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).data('target');
  jQuery(target).show();
});

/*======================================
to_top
======================================*/
jQuery(window).on('scroll', function() {
  if ( 100 < jQuery(this).scrollTop()) {
    jQuery('.to_top').addClass('is-show');
  } else {
    jQuery('.to_top').removeClass('is-show');
  }
});

/*======================================
スムーススクロール
======================================*/
jQuery('a[href^="#"]').on('click', function() { //aタグがクリックされた時の動作
  var id = jQuery(this).attr('href');
    var position = jQuery(id).offset().top;
    jQuery('html,body').animate({
        scrollTop: position
    },
    300);
});