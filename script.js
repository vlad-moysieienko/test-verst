let dots = document.getElementsByClassName('dots-item'),
    dotsArea = document.getElementsByClassName('dots-block')[0],
    slides = document.getElementsByClassName('slides-item'),
    prevBtn = document.getElementById('left-button'),
    nextBtn = document.getElementById('right-button'),
    slideIndex = 1;

    showslides(slideIndex);
 
    function showslides(n) {
    if(n < 1){
        slideIndex = slides.length;
    } else if(n > slides.length){
        slideIndex = 1;
   }
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display ='none';
   }
    for(let i = 0; i < dots.length; i++){
        dots[i].classList.remove('active');
    }
    slides[slideIndex-1].style.display ='block';
    dots[slideIndex-1].classList.add('active');
}

function plusslides(n){
    showslides(slideIndex += n);
}
function currentslide(n){
    showslides(slideIndex = n);
}

prevBtn.onclick = function(){
    plusslides(-1);
}
nextBtn.onclick = function(){
    plusslides(1);
}
dotsArea.onclick = function(e){
    for(let i = 0; i<dots.length + 1; i++){
        if(e.target.classList.contains('dots-item')&& e.target == dots[i-1]){
            currentslide(i);
        }
}
   }
   const openPopUp = document.getElementById('open_pop_up');
   const closePopUp = document.getElementById('pop_up_close');
   const popUp = document.getElementById('pop_up');
                                       
   openPopUp.addEventListener('click',function(e){
       e.preventDefault();
       popUp.classList.add('active');
   })
   closePopUp.addEventListener('click',() => {
       popUp.classList.remove('active');
   })