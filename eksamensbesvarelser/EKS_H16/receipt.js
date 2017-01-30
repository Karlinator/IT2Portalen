/*global console*/
var debug = true;

function updateHTML(numPersons, numDinners, price, firstname, lastname, address) {
    "use strict";
    document.getElementById('numDinners').innerHTML = numDinners;
    document.getElementById('numPersons').innerHTML = numPersons;
    document.getElementById('price').innerHTML = price;
    document.getElementById('firstname').innerHTML = firstname;
    document.getElementById('lastname').innerHTML = lastname;
    document.getElementById('address').innerHTML = address;

    if (debug) {console.log("Enter function 'updateHTML'"); }
}
function loadEntries() {
    "use strict";
    var numDinners = sessionStorage.numDinners,
        numPersons = sessionStorage.numPersons,
        price = sessionStorage.price,
        firstname = sessionStorage.firstname,
        lastname = sessionStorage.lastname,
        address = sessionStorage.address;


    updateHTML(numPersons, numDinners, price, firstname, lastname, address);

    if (debug) {console.log("Enter function 'loadEntries'"); }
}
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    loadEntries();
});
