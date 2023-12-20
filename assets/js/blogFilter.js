$(document).ready(function() {
    // Filter by category
  
    // Search by blog name
    $('#search-input').on('keyup', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('.blog-item').hide().filter(function() {
            return $(this).find('.show-read-more').text().toLowerCase().indexOf(searchTerm) > -1;
        }).show();
    });
});