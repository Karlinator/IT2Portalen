/*global console*/
//List of the orders in the table.
var orders = [],
    debug = true;
//Implements $ as a shorthand for document.querySelector() (or document.getElementById/Class). It takes a CSS selector and returns the first object.
//WARNING! If you need to get more than one object with a certain class, you must manually use document.querySelectorAll() instead

function startup() {

  "use strict";

	var ypos;
  var offsetPixels = 370 - 15;


	function moveSidebar() {
		ypos = window.pageYOffset;

    if (ypos > offsetPixels) {
      $(".sidebar").css({"top": "15 + px", "right": "50%", "position": "fixed", "transform": "translateX(480px)"});

    } else {

    $(".sidebar").css({"top": "", "right": "", "position": "static", "transform": ""});
    }
  }

  window.addEventListener("scroll", moveSidebar);


  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });


function sidebarSetActive(id) {
  $(".active").removeClass("active");

  var eIdHref = id;
  $('a[href="' + eIdHref + '\"]').addClass("active");
  console.log(eIdHref);
}



var topAnchor = $('#topAnchor');
topAnchor.waypoint(function() {
    sidebarSetActive('#topAnchor');
});

var anchorEksløsninger = $('#anchorEksløsninger');
anchorEksløsninger.waypoint(function() {
    sidebarSetActive('#anchorEksløsninger');
});

var anchorEKS_H16 = $('#anchorEKS_H16');
anchorEKS_H16.waypoint(function() {
    sidebarSetActive('#anchorEKS_H16');
});

var anchorEKS_H15 = $('#anchorEKS_H15');
anchorEKS_H15.waypoint(function() {
    sidebarSetActive('#anchorEKS_H15');
});

var anchorEKS_V15 = $('#anchorEKS_V15');
anchorEKS_V15.waypoint(function() {
    sidebarSetActive('#anchorEKS_V15');
});

var anchorEKS_H14 = $('#anchorEKS_H14');
anchorEKS_H14.waypoint(function() {
    sidebarSetActive('#anchorEKS_H14');
});

var anchorEKS_V14 = $('#anchorEKS_V14');
anchorEKS_V14.waypoint(function() {
    sidebarSetActive('#anchorEKS_V14');
});

var anchorEksdownload = $('#anchorEksdownload');
anchorEksdownload.waypoint(function() {
    sidebarSetActive('#anchorEksdownload');
});



}
