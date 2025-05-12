var menu =document.getElementById('scrollmenu');
var prevscroll = window.pageYOffset;
window.onscroll = function() {
    var activescroll = window.pageYOffset;
   if(prevscroll > 1000 ) {
        menu.style.top = '0px';
        menu.style.position = 'sticky';
    }
    else if(prevscroll < 1000 ){
        menu.style.top = '-100px';
        menu.style.position = 'absolute';
    }
    prevscroll = activescroll;
}