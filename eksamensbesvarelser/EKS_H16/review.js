// --------------------------------------------------
// PART 2
// --------------------------------------------------

window.onload = startup;

var debug = true;

function startup() {
    loadEntries();
}

function loadEntries() {
    var numDinners = sessionStorage.numDinners;
    var numPersons = sessionStorage.numPersons;
    var price = sessionStorage.price;
    var firstname = sessionStorage.firstname;
    var lastname = sessionStorage.lastname;
    var address = sessionStorage.address;


    updateHTML(numPersons, numDinners, price, firstname, lastname, address);

    if (debug) console.log("Enter function 'loadEntries'");
}

function updateHTML(numPersons, numDinners, price, firstname, lastname, address) {
    document.getElementById('numDinners').innerHTML = numDinners;
    document.getElementById('numPersons').innerHTML = numPersons;
    document.getElementById('price').innerHTML = price;
    document.getElementById('firstname').innerHTML = firstname;
    document.getElementById('lastname').innerHTML = lastname;
    document.getElementById('address').innerHTML = address;

    if (debug) console.log("Enter function 'updateHTML'");
}
