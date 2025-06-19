var menu = document.getElementById('scrollmenu');

window.onscroll = function() {
    var scrollPosition = window.pageYOffset;

    if(scrollPosition > 1000) {
        menu.style.top = '0px'; // Εμφανίζεται
    } else {
        menu.style.top = '-100px'; // Κρύβεται
    }
}