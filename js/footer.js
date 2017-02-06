function generateFooter() {
    "use strict";
    var footer, style;

    if (window.location.href.indexOf("eksamensbesvarelser") > -1) {
        footer = '<div class="wrap"><span class="mega-octicon octicon-mark-github"></span><p><a href="../../index.html">IT2 Portalen</a> - Andre Storhaug, Johannes Berge, Karl Erik Hofseth, Vegard Mauren Richardsen &amp Torstein Vik. All copyrights reserved.<br><a href="../../archive.html"><-- go back</a></p></div>';

    } else {
        footer = '<div class="wrap"><span class="mega-octicon octicon-mark-github"></span><p><a href="index.html">IT2 Portalen</a> - André Storhaug. All copyrights reserved.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a iaculis nibh.</p></div>';


    }

    // add some footer styling
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'footer { padding-top: 20px; padding-bottom: 20px; margin-top: 20px; font-size: 16px; line-height: 1.3; color: #999; text-align: center; }';
    document.getElementsByTagName('head')[0].appendChild(style);

    //document.querySelector('footer').className = 'footer';

    document.querySelector('footer').innerHTML = footer;
}

//Runs when the document is loaded. Initialises the script.
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    generateFooter();
});
