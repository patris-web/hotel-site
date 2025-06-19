let activeimage = 0;
let slides = document.querySelectorAll('.slides');
let totalslides = slides.length;

function showslides(index){
    if(index < 0){
        activeimage = totalslides - 1;
    }
    else if( index >= totalslides){
        activeimage = 0;
    }
    else{
        activeimage = index;
    }
    const transformvalue = -activeimage *100 + '%';
    document.querySelector('.slideshow').style.transform = 'translateX('+transformvalue+')';
}
function prevSlide(){
    showslides(activeimage - 1);
}
function nextSlide(){
    showslides(activeimage + 1);
}