//var images=['img/factory/1.jpg','img/factory/2.jpg','img/factory/3.jpg'];
var i=0;

var arr = [
  "img/mahindra/mahindra family ad.jpg",
  "img/mahindra/mahindr truck family.jpg",
  "img/mahindra/marzzo poster wo logo.jpg",
  "img/factory2/chevy7.jpeg",
  "img/factory2/corrugated pallets.jpg",
  /*"img/factory2/3.jpeg", 
  "img/factory2/1.jpeg",
  "img/ambala2/6.jpeg"*/
 ]

 setTimeout(function () {
  $('#ci1').animate({ opacity: 0 }, 'fast').animate({ opacity: 1, }, 'slow', function () {
      $('#ci2').animate({ opacity: 0 }, 'fast').animate({ opacity: 1, }, 'slow', function () {
          $('#ci3').animate({ opacity: 0 }, 'fast').animate({ opacity: 1, }, 'slow', function () {
              $('#ci4').animate({ opacity: 0 }, 'fast').animate({ opacity: 1, }, 'slow');
          });
      });
  });

  setTimeout(function () {
      var func2 = function () {
          $('.intro-text').animate({ opacity: 0 }, 'slow', func);
          $('.sideLogo').animate({ opacity: 0.7 }, 'slow', func);
          $('#intro').backstretch(arr , {duration: 3000, fade: 750});
 
      }
      $('.companyLogos1').animate({ bottom: '20px', opacity: 1 }, 'slow').animate({ bottom: '-200px', opacity: 0, }, 'slow', func2);
      $('.companyLogos2').animate({ bottom: '20px', opacity: 1 }, 'slow').animate({ bottom: '-200px', opacity: 0, }, 'slow', func2);
  }, 5000)
}, 2000);

window.onload=init;
function init(){

   	// Hide .navbar first
       $(".navbar").hide();
	
       // Fade in .navbar
       $(function () {
           $(window).scroll(function () {
               // set distance user needs to scroll before we fadeIn navbar
               if ($(this).scrollTop() > 150) {
                   $('.navbar').fadeIn();
               } 
               else {
                   $('.navbar').fadeOut();
               }
           });
   
       
       });

  var h= document.querySelector('#services').style.height;
  document.querySelector('#services').querySelector('div').style.height=h;
  
}

