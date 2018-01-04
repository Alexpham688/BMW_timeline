(function() {

  //page loads back to top on refresh
  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
  //using strict mode
  'use strict';

  //so i have to declare all variables
  var items = document.querySelectorAll('.timeline li');

  //check if element is in view port
  function isElementInViewport(e){
    var rect = e.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for(var i =0; i < items.length; i++) {
      if(isElementInViewport(items[i])){
        items[i].classList.add('in-view');
      }
    }
  }

    //listen for events
    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);

    // scroll to top on click
    $('#arrow').click(function() {
    $('html,body').animate({
    scrollTop: 0
  }, 1000);
});
// $('#arrow').click( function() {
// $(window).scrollTop( $("header").offset().top );
// });

})();
