$(document).ready(function() {
    function updateLanguageLinks() {
        var path = window.location.pathname;
        var page = path.substring(path.lastIndexOf('/') + 1);

        var languages = {
            'en': '/en/' + page,
            'ar': '/ar/' + page,
            'fr': '/fr/' + page,
            // Add more languages as needed
        };

        $('.language-selector a').each(function() {
            var lang = $(this).data('lang');
            $(this).attr('href', languages[lang]);
        });
    }

    updateLanguageLinks();
});