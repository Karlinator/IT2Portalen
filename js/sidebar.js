var orders = [],
    debug = true;

function startup() {
    "use strict";
    initWaypoints();
}


var ypos;
var offsetPixels = 370 - 15;


function stickySidebar() {
    ypos = window.pageYOffset;

    if (ypos > offsetPixels) {
        $(".sidebar").css({
            "top": "15 + px",
            "right": "50%",
            "position": "fixed",
            "transform": "translateX(480px)"
        });
    } else {
        $(".sidebar").css({
            "top": "",
            "right": "",
            "position": "static",
            "transform": ""
        });
    }
}
window.addEventListener("scroll", stickySidebar);


function initWaypoints() {

    var anchors = [],
        waypoints = [];

    for (var i = 0; i < $('.anchor').length; i++) {
        console.log("----------------LOOOOOOP---------------");
        console.log("Num: " + i);
        anchors[i] = $('.anchor').eq(i);
        console.log("Anchor: " + anchors[i]);
    }


    console.log("----------------LOOOOOOP2---------------");
    var sidebarLinks = [];
    for (var j = 0; j < $('.sidebar li').length; j++) {
        for (var x = 0; x < 2; x++) {
            sidebarLinks.push($('.sidebar a:eq(' + j + ')').attr("href"));
        }
    }
    console.log(sidebarLinks);


    anchors.forEach(function(listItem, index) {
        console.log("----------------Waypoints triggered---------------");
        console.log("Num: " + index);
        console.log(listItem);

        listItem.waypoint(function() {

            $(".active").removeClass("active");
            $('a[href="' + sidebarLinks[index] + '\"]').addClass("active");

            console.log("Element1: " + sidebarLinks[index] + " Index: " + index);
        });

    });
}

//Runs when the document is loaded. Initialises the script.
document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    startup();
});
