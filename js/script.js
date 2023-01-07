
$(function() {
  let $win = $(window),
      $fv = $('.fv'),
      $header = $('header')
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed';

$win.on('load scroll',function(){
  let value = $(this).scrollTop();
    if($win.width()>768)

      if ( value > fvHeight) {
        $header.addClass(fixedClass);
        
      } else {
        $header.removeClass(fixedClass);
        
      }
      
        });
      });
    


  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });

  
  $('.burger-btn').on('click',function(){
    $('.sp__menu').toggleClass('panelactive');
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
});

$('.sp__menu').on('click',function(){
  $('.sp__menu').removeClass('panelactive');
  $('.burger-btn').removeClass('cross');
  $('body').removeClass('noscroll');
});


$('.sp__menu li a').on('click',function(){
  $('.sp__menu').removeClass('panelactive');
  $('.burger-btn').removeClass('cross');
  $('body').removeClass('noscroll');
});

  $(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  