function determineScrollVisibility(){
  var arrowUp = document.getElementById("arrowUp");
  var scroll = this.scrollY;
  if(scroll > 1200){
    arrowUp.style.visibility = 'initial';
    arrowUp.style.opacity = '1';
  } else {
    arrowUp.style.visibility = 'hidden';
    arrowUp.style.opacity = '0';
  }
}

function initializePage() {
  determineScrollVisibility();
  window.addEventListener("scroll", determineScrollVisibility);
}

window.onload = initializePage;

function scrollUp() {
  var scrollHeight = window.scrollY;
  var scrollStep = Math.PI / ( 500 / 15 );
  var cosParameter = scrollHeight / 2;
  var scrollCount = 0;
  var scrollMargin = 0;
  var scrollInterval = setInterval( 
    function() {
      if ( window.scrollY != 0 ) {
          scrollCount = scrollCount + 1;  
          scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
          window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
      } else {
        clearInterval(scrollInterval); 
      }
    }, 15 );
  }