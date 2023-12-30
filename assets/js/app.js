$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".nav-list").toggleClass("active");
  });
});

$(document).ready(function(){
  var $footer = $('#footer');
  var $socialLinks = $('.social-media-links');

  $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      var footerTop = $footer.offset().top;

      if (windowBottom > footerTop) {
          $socialLinks.fadeOut();
      } else {
          $socialLinks.fadeIn();
      }
  });
});

