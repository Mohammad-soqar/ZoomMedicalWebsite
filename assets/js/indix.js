$(document).ready(function() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = $(".slideshow-container-mySlides");
        for (i = 0; i < slides.length; i++) {
            slides.eq(i).hide(); // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides.eq(slideIndex - 1).fadeIn(1000); // Fade in the current slide
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }
});



$(document).ready(function () {
    const $viewport = $(".carousel-viewport");
    const $cardContainers = $(".review-card-container");
    const cardContainerWidth = $cardContainers.first().outerWidth(); // Get the width of one card container
    let currentIndex = 0;
  
    $(".next-btn").on("click", function () {
      currentIndex = (currentIndex + 1) % $cardContainers.length;
      const translateX = -currentIndex * cardContainerWidth;
      $viewport.css("transform", `translateX(${translateX}px)`);
    });
  });