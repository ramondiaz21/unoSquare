$(document).ready(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $('.navbar').addClass('altNav')
      }
      if ($(this).scrollTop() < 500) {
         $('.navbar').removeClass('altNav')
      }
   });
});
