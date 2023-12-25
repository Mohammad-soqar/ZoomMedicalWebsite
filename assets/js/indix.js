$(document).ready(function(){
    var currentCardIndex = 0;
    var totalCards = $('.review-card-container').length;

    $('.next-btn').click(function(){
        if (currentCardIndex < totalCards - 1) {
            currentCardIndex++;
        } else {
            currentCardIndex = 0;
        }
        var newMargin = -currentCardIndex * 100; // Assuming 100% width per card
        $('.carousel-viewport').animate({marginLeft: newMargin + '%'}, 500);
    });
});