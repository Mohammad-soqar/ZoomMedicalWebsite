$(document).ready(function () {
    let slideCount = $('.slide').length;
    let currentIndex = 0;
    $('.slide').hide();
    $('.active').show();
    $('.prev').on('click', function () {
       currentIndex--;
       if (currentIndex < 0) {
          currentIndex = slideCount - 1;
       }
       showSlide(currentIndex);
    });
    $('.next').on('click', function () {
       currentIndex++;
       if (currentIndex >= slideCount) {
          currentIndex = 0;
       }
       showSlide(currentIndex);
    });
    $('.dot').on('click', function () {
       currentIndex = $(this).index();
       showSlide(currentIndex);
    });
    function showSlide(index) {
       $('.slide').hide().removeClass('active');
       $('.dot').removeClass('active-dot');
       $('.slide').eq(index).show().addClass('active');
       $('.dot').eq(index).addClass('active-dot');
    }
    showSlide(currentIndex);
 });