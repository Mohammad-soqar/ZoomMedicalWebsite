$(document).ready(function() {
    // Initially hide all answers
    $('.answer').hide();
    $('.question').click(function() {
        // Toggle the visibility of the next sibling element (the answer) with a smooth animation
        $(this).next('.answer').stop().slideToggle('slow');

        // Rotate the arrow icon
        $(this).find('img').toggleClass('rotate');
    });
});



// function toggleAnswer(questionClass, answerClass, arrowId, angle) {
//     $(questionClass).click(function () {
//       $(answerClass).slideToggle();
//       angle += 180;
//       angle = angle % 360;
//       $(arrowId).css({
//         'transform': 'rotate(' + angle + 'deg)',
//         'transition': 'transform 0.5s ease-in-out'
//       });
//     });
//   }
//   var angle1 = 0;
//   toggleAnswer('.question', '.answer', '#down-arrow', angle1);
  

  
// $(document).ready(function() {
//     // Initially hide all answers

//     // Function to toggle answer visibility and rotate arrow icon
//     $('.question').click(function() {
//         // Toggle the visibility of the next sibling element with class 'answer'
//         $(this).next('.answer').slideToggle('slow');

//         // Rotate the arrow icon
//         $(this).find('img').animate({ 
//             rotate: '180deg'
//         }, {
//             step: function(now) {
//                 $(this).css({
//                     transform: 'rotate(' + now + 'deg)'
//                 });
//             },
//             duration: 'slow'
//         }, 'linear');
//     });
// });
