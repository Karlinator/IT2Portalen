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
    var firstname;
    var lastname;

    var name = sessionStorage.name;
    var res = name.split(" ");
    firstname = res[0];

    res.splice(0);
    lastname = res.join(" ");

    var address = sessionStorage.address;


    updateHTML(numPersons, numDinners, price, firstname, lastname, address);

    if (debug) console.log("Enter function 'loadEntries'");
}

function updateHTML(numPersons, numDinners, price, name, address) {
    document.getElementById('numDinners').innerHTML = numDinners;
    document.getElementById('numPersons').innerHTML = numPersons;
    document.getElementById('price').innerHTML = price;
    document.getElementById('firstname').innerHTML = firstname;
    document.getElementById('lastname').innerHTML = lastname;
    document.getElementById('address').innerHTML = address;

    if (debug) console.log("Enter function 'updateHTML'");
}
