/*global console*/
//List of the orders in the table.
var orders = [],
    debug = true;
//Implements $ as a shorthand for document.querySelector() (or document.getElementById/Class). It takes a CSS selector and returns the first object.
//WARNING! If you need to get more than one object with a certain class, you must manually use document.querySelectorAll() instead
window.onload = parallex;


	var ypos;
  var offsetPixels = 370 - 15;

	function parallex() {
		ypos = window.pageYOffset;

    if (ypos > offsetPixels) {
      $(".sidebar").css({"top": "15px", "right": "50%", "position": "fixed", "transform": "translateX(480px)"});

    } else {

    $(".sidebar").css({"top": "", "right": "", "position": "static", "transform": ""});
    }
  }


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
