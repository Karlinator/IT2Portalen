var debug = true;


function scrollingEffect() {
    // Scrolling effect
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });
}

//Runs when the document is loaded. Initialises the script.
document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    scrollingEffect();
});
