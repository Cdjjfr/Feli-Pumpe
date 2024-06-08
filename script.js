$(document).ready(function(){

    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');
  
    $('.birthday').click(function(){
      
      $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
      $('.envelope').fadeOut(800, function() {
     
        $('.birthday .heart, .birthday .text, .birthday .front').hide();
        
  
        
        $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
        $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1; 
          $(this).css('transform', 'scale(' + scale + ')');
        }}); 
      });
    });
  });
  