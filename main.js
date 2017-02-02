/*global console*/
//List of the orders in the table.
var orders = [],
    debug = true;
//Implements $ as a shorthand for document.querySelector() (or document.getElementById/Class). It takes a CSS selector and returns the first object.
//WARNING! If you need to get more than one object with a certain class, you must manually use document.querySelectorAll() instead
window.onload = parallex;

function $(i) {
    "use strict";
    return document.querySelector(i);
}
document.addEventListener('DOMContentLoaded', function() {
    "use strict";

});


function moveSidebar() {
    // Set this variable with the height of your sidebar + header

    $("window").scroll(function() {
        if ($("window").scrollTop() > offsetPixels) {
            $(".sidebar").css({
                "position": "fixed",
                "top": "15px"
            });
        } else {
            $(".sidebar").css({
                "position": "static"
            });
        }
    });
}

	var ypos;
  var offsetPixels = 370 - 15;

	function parallex() {
		ypos = window.pageYOffset;

    if (ypos > offsetPixels) {
      $(".sidebar").style.top = 15 + 'px';
      $(".sidebar").style.right = '50%';
      $(".sidebar").style.position = 'fixed';
      $(".sidebar").style.transform = 'translateX(480px)';

    } else {

      $(".sidebar").style.position = 'relative';
      $(".sidebar").style.top = "";
      $(".sidebar").style.right = '';
      $(".sidebar").style.transform = '';
    }
  }

  window.addEventListener('scroll', parallex, false);


function sidebarSetActive(element) {
  $(".active").removeClass("active");

  element.addClass("active");
console.log(element);
}

  var waypointAnchorEKS_H16 = new Waypoint({
    element: $('#anchorEKS_H16'),
    handler: function() {
      sidebarSetActive(element);
    }
  });
