/*global console*/
//If set to true, the console outpust various messages in order to better find errors.
var debug = true;

//Loads the order information and inserts it into the page.
function loadEntries() {
    "use strict";
    //Loads the order information entered in index.html.
    //The order information was stored in session storage.
    var numDinners = sessionStorage.numDinners,
        numPersons = sessionStorage.numPersons,
        price = sessionStorage.price,
        firstname = sessionStorage.firstname,
        lastname = sessionStorage.lastname,
        address = sessionStorage.address;

    //Logs in the console. Useful for finding errors.
    if (debug) {console.log("Enter function 'loadEntries'"); }

    //Inserts the order information into the document on screen.
    //The order information is here retrieved from the variables to which they were bound above.
    document.getElementById('numDinners').innerHTML = numDinners;
    document.getElementById('numPersons').innerHTML = numPersons;
    document.getElementById('price').innerHTML = price;
    document.getElementById('firstname').innerHTML = firstname;
    document.getElementById('lastname').innerHTML = lastname;
    document.getElementById('address').innerHTML = address;

    //Logs in the console. Useful for finding errors.
    if (debug) {console.log("Enter function 'updateHTML'"); }
}
//Runs when the document is loaded. Initialises the script.
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    loadEntries();
});
