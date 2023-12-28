$(document).ready(function(){
    let $imgs = $('.carousel-images img');
    let currentIndex = 0;

    function showNextImage() {
        $imgs.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % $imgs.length;
        $imgs.eq(currentIndex).addClass('active');
    }

    function showPrevImage() {
        $imgs.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex - 1 + $imgs.length) % $imgs.length;
        $imgs.eq(currentIndex).addClass('active');
    }

    $('.next').click(showNextImage);
    $('.prev').click(showPrevImage);
});
