document.addEventListener("DOMContentLoaded", function(event) {
    generateFooter();
});

function generateFooter() {

var footer;

    if(window.location.href.indexOf("eksamensbesvarelser") > -1) {
      footer = '<div class="wrap"><span class="mega-octicon octicon-mark-github"></span><p><a href="../../index.html">IT2 Portalen</a> - André Storhaug, Johannes Berge, Karl Erik Hoffseth, Vegard &amp Torstein. All copyrights reserved.<br><a href="../../archive.html"><-- go back</a></p></div>';

    } else {
      footer = '<div class="wrap"><span class="mega-octicon octicon-mark-github"></span><p><a href="index.html">IT2 Portalen</a> - André Storhaug. All copyrights reserved.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a iaculis nibh.</p></div>';


    }

// add some footer styling
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'footer { padding-top: 20px; padding-bottom: 20px; margin-top: 20px; font-size: 16px; line-height: 1.3; color: #999; text-align: center; }';
document.getElementsByTagName('head')[0].appendChild(style);

//document.querySelector('footer').className = 'footer';

document.querySelector('footer').innerHTML = footer;
}
