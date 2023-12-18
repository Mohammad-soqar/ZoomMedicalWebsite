$(document).ready(function() {
    // Event handler for keyup on the search input
    $('input[type="text"]').keyup(function() {
        // Get the current value of the input field
        var searchText = $(this).val().toLowerCase();

        // Iterate over each list item
        $('.operation-section__list .operation-section__item').each(function() {
            // Check if the item's text contains the search text
            var match = $(this).text().toLowerCase().indexOf(searchText) > -1;
            // Show or hide the item based on the match
            $(this).toggle(match);
        });
    });
});
