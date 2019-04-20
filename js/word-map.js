var supported_languages = '';
var api_key = 'AIzaSyDdPMspcAf-NwZbdFgMqzEM3-qGlmKii8k';
var overlays = [];

/**
 * Check country is in our supported ones
 * @param {string} country_code 
 */
function check_country(country_code) {

    var check = false;

    country_code = country_code.toLowerCase();

    supported_languages.forEach(language => {

        if (language.language == country_code) {
            check = true;
        }

    });

    return check;

}

/**
 * Get the translation from API call
 * @param {string} translate_me 
 * @param {string} language 
 * @param {object} overlay 
 */
function do_translation(translate_me, language, overlay) {

    var language_set = $('#language').val();

    var translate_url = 'https://translation.googleapis.com/language/translate/v2',
        params = {
            key: api_key,
            q: translate_me,
            target: language,
            source: language_set != 'detect' ? language_set : '',
        }

    var translate = $.ajax({
        data: params,
        traditional: true,
        url: translate_url,
        method: 'POST',
        success: function (response) {

            //console.log(response.data.translations[0].translatedText);

            if (response.data) {

                var translated_text = response.data.translations[0].translatedText;

                overlay.args.text = translated_text;
                overlay.remove();
                overlay.draw();

            }

        }
    });

}

/**
 * Do all the translations
 * @param {*} translate_me
 */
function do_translations(translate_me) {

    overlays.forEach(overlay => {
        do_translation(translate_me, overlay.args.language, overlay);
    });

}


/**
 * Check for url search param
 */
function check_for_param() {

    var urlParams = new URLSearchParams(window.location.search);
    var search = urlParams.get('s');

    if (search) {

        do_translations(search);

        $('#search-form input').val(search).focus();

    }

}


$(function () {

    // Get the supported languages
    var supported_languages_ajax = $.ajax({
        url: 'https://translation.googleapis.com/language/translate/v2/languages?target=en&key=' + api_key,
        method: 'GET',
        success: function (response) {

            //console.table(response.data.languages);
            supported_languages = response.data.languages;

            // Add each language to the <select>
            supported_languages.forEach(language => {
                var option = '<option value="' + language.language + '">' + language.name + '</option>';
                $('#language').append(option);
            });

            // We've got our supported languages, so safe to initialise the map
            googleMapInitialise();

            // Check for url param
            // check_for_param();
        }
    });

    // Do the word translation
    $('#search-form').on('submit', function (e) {

        e.preventDefault();

        var translate_me = $('#search-form input').val();

        do_translations(translate_me);

        // Update the url param, to enable the sharing likes eh
        // history.pushState('', translate_me, '?s=' + translate_me);

    });

})