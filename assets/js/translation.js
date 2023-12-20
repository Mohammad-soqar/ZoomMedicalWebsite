$(document).ready(function() {
    function updateLanguageLinks() {
        var path = window.location.pathname;
        var pathParts = path.split('/').filter(function(part) { return part !== ''; });
        
        // Assuming the language code is always the first part of the path
        var currentPage = pathParts.slice(1).join('/'); // Remove the language part

        var languages = {
            'en': '/en/' + currentPage,
            'ar': '/ar/' + currentPage,
            'fr': '/fr/' + currentPage,
            // Add more languages as needed
        };

        $('.language-selector a').each(function() {
            var lang = $(this).data('lang');
            $(this).attr('href', languages[lang]);
        });
    }

    updateLanguageLinks();
});