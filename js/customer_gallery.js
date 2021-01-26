
/*================================================
 * Main JavaScript Engine
 =================================================*/
var slideIndex =0;
cusSlideShow(slideIndex);
/*================================================*/

/*================================================
 * Changes Comment Displayed
 =================================================*/
 function cusSlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // Stores all Comments into Array
    var dots = document.getElementsByClassName("dot"); // Stores all Comments into Array
    if (n > slides.length) { // When n is greater, reset variable to 1
        slideIndex = 1
    }
    if (n < 1) { // When n is less than 1, reset value to total amount of Comments
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) { // Depending on which comment is active, set rest to none display
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; // when slide is active set display variable to "block"
    dots[slideIndex-1].className += " active";
}
/*================================================*/

/*================================================
 * Button Clicked
 =================================================*/
 function currentSlide(n) {
    cusSlideShow(slideIndex = n);
  }
/*================================================*/