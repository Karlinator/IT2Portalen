window.onload = startup;

var debug = true;

function startup() {

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
    console.log(price);

    validation = validate();

    if (validation) {

        var printedPrise = document.getElementById('printedPrise');

        printedPrise.innerHTML = price;
    }

    if (debug) console.log("Enter function 'update'");
}
