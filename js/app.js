'use strict'

const images = [
    "../imgs/header1.jpg",
    "../imgs/header2.jpg",
    "../imgs/header3.jpg",
    "../imgs/header4.jpg"
  ]
  
  const introductionImage = document.querySelector('.introduction-image');
  
  let currentIndex = 0;
  
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    introductionImage.style.backgroundImage = `url('${images[currentIndex]}')`;
  }
  
  setInterval(changeImage, 4000);
  