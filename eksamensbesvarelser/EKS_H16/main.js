/*global console, prompt*/
var debug = true;

function validate() {
    "use strict";
    if (debug) {console.log("Enter function 'validate'." + " Validation passed"); }

    var numPersons = document.getElementById('numPersons').value;

    if (numPersons > 10 || numPersons < 1) {
        window.alert("Velg middag for et antall personer mellom 1 - 10");
    } else {
        return true;
    }
}

function updateImg() {
    "use strict";
    var img = document.getElementById('bilde'),

        dropdownNumDinners = document.getElementById('numDinners').value;

    if (dropdownNumDinners === 2) {
        img.src = "images/2middager.jpg";
    } else {
        img.src = "images/3middager.jpg";
    }
}

function calculatePrice() {
    "use strict";
    var itemPrice, pricePrUnit,

        numPersons = document.getElementById('numPersons').value,
        selectedOptNumDinners = document.getElementById('numDinners').value;

    if (numPersons >= 5) {
        pricePrUnit = 70;
    } else {
        pricePrUnit = 80;
    }

    itemPrice = pricePrUnit * numPersons * selectedOptNumDinners;

    return itemPrice;
}

function update() {
    "use strict";
    var price, validation, printedPrice;

    price = calculatePrice();

    validation = validate();

    updateImg();

    if (validation) {

        printedPrice = document.getElementById('printedPrice');

        printedPrice.innerHTML = price;
    }

    if (debug) {console.log("Enter function 'update'"); }
}

function save() {
    "use strict";

    var firstname = prompt("Fakureringsinfo: Fornavn"),
        lastname = prompt("Fakureringsinfo: Etternavn"),

        address = prompt("Fakureringsinfo: Addresse"),

        numPersons = document.getElementById('numPersons').value,

        numDinners = document.getElementById('numDinners').value;

    sessionStorage.price = calculatePrice();
    sessionStorage.numPersons = numPersons;
    sessionStorage.numDinners = numDinners;
    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.address = address;

    window.location.href = 'review.html';
}
// Function listening for changes.
function listenForChange() {
    "use strict";
    var dropdownNumDinners = document.getElementById('numDinners'),
        numPersons = document.getElementById('numPersons'),
        btn = document.getElementById('btn');

    dropdownNumDinners.addEventListener("change", update);
    numPersons.addEventListener("change", update);
    btn.addEventListener("click", save);



    if (debug) {console.log("Enter function 'listenForChange'"); }
}
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    update();
    listenForChange();
});
