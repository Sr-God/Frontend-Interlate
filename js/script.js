'use strict'

/* SLIDER */
let prevBtn = document.querySelector('#sliderPrev');
let nextBtn = document.querySelector('#sliderNext');
let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');
let slide3 = document.querySelector('.slide3');
let slide = false;
prevBtn.addEventListener('click', function(){
    if(slide == false){
        slide1.style.opacity = '0';
        slide3.style.opacity = '0';
        slide2.style.opacity = '1';
        slide1.style.zIndex = '2';
        slide3.style.zIndex = '2';
        slide2.style.zIndex = '3';
        
        slide = true;
    }
    else if(slide == true){
        slide3.style.opacity = '1';
        slide1.style.opacity = '0';
        slide2.style.opacity = '0';
        slide1.style.zIndex = '2';
        slide3.style.zIndex = '3';
        slide2.style.zIndex = '2';
        slide = false;
    }
})

nextBtn.addEventListener('click', function(){
    if(slide == false){
        slide3.style.opacity = '0';
        slide2.style.opacity = '0';
        slide1.style.opacity = '1';
        slide1.style.zIndex = '3';
        slide3.style.zIndex = '2';
        slide2.style.zIndex = '2';
        slide = true;
    }
    else if(slide == true){
        slide3.style.opacity = '1';
        slide2.style.opacity = '0';
        slide1.style.opacity = '0';
        slide1.style.zIndex = '2';
        slide3.style.zIndex = '3';
        slide2.style.zIndex = '2';
        slide = false;
    }
})
