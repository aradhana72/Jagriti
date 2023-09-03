$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight(); 
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + ($(window).height()/2);
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
  $(window).on('resize scroll', function() {
    $('.timeline-main ul li').each(function() {
        var activeColor = $(this).attr('id');
      if ($(this).isInViewport()) {
        $(this).addClass('adding');
      } else {
        $(this).removeClass('adding');
      }
    });
  });
  
  $(window).on('load',function(){
    var winHeight = $(window).height(),
        element = $('.timeline-main'),
        elementTop = $(element).offset().top - winHeight,
        elementHeight = $(element).outerHeight();
    
    var scrollPos = $(window).scrollTop();
    
    console.log('elementTop ' , elementTop , ' elementHeight ' , elementHeight , ' scrollPos ' , scrollPos);
    
    $(window).on('scroll',function(){
      scrollPos = $(window).scrollTop() - $(window).height() / 2;
      var r = scrollPos - elementTop;
      console.log('r ' + r);
      if(scrollPos >= elementTop ){
        console.log('inn');
        if(elementHeight  >= r ){
          $('.pogress').css('height', r);
        }
      }
      if(r < 0){
          console.log('0 inn')
          $('.pogress').css('height', 0);
        }
      
      if(elementHeight <  r){
        $('.pogress').css('height', elementHeight);
      }
      
    });
    });