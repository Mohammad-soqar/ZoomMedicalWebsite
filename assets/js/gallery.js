$(document).ready(function() {
    $('.service-link').click(function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        var service = $(this).data('service'); // Get the service type

        // Clear the gallery
        $('#gallery').empty();

        // Load the appropriate images
        for (var i = 1; i <= 9; i++) {
            var imageUrl = '/assets/beforeandafter/' + service + '/' + i + '.png'; // Construct the image path
            var imgElement = $('<img>').attr('src', imageUrl).attr('alt', 'Before and after ' + service);
            $('#gallery').append(imgElement);
        }
    });

    // Trigger click on the first link to load the default gallery
    $('.service-link').first().click();
});
