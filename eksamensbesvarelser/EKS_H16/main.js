window.onload = startup;

var debug = true;

function startup() {
    update();
    listenForChange();
}

// Function listening for changes.
function listenForChange() {
    var dropdownNumDinners = document.getElementById('numDinners');

    var numPersons = document.getElementById('numPersons');

    dropdownNumDinners.addEventListener("change", update);
    numPersons.addEventListener("change", update);



    if (debug) console.log("Enter function 'listenForChange'");
}

function validate() {
    if (debug) console.log("Enter function 'validate'." + " Validation passed");

    var numPersons = document.getElementById('numPersons').value;

    if (numPersons >= 10 || numPersons < 1) {
        window.alert("Velg middag for et antall personer mellom 1 - 10");
    } else {
        return true;
    }
}

function updateImg () {
    var img = document.getElementById('bilde');

    var dropdownNumDinners = document.getElementById('numDinners').value;

    if (dropdownNumDinners == 2) {
        img.src = "images/2middager.jpg";
    } else {
        img.src = "images/3middager.jpg";
    }
}

function calculatePrice() {
    var itemPrice, pricePrUnit;

    var numPersons = document.getElementById('numPersons').value;
    var selectedOptNumDinners = document.getElementById('numDinners').value;

    if (numPersons <= 5) {
        pricePrUnit = 70;
    } else {
        pricePrUnit = 80;
    }

    itemPrice = pricePrUnit * numPersons * selectedOptNumDinners;

    return itemPrice;
}

function update() {
    var price, validation;

    price = calculatePrice();

    validation = validate();

    updateImg();

    if (validation) {

        var printedPrise = document.getElementById('printedPrice');

        printedPrise.innerHTML = price;
    }

    if (debug) console.log("Enter function 'update'");
}
