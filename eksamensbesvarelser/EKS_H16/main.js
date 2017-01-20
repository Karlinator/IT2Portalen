window.onload = startup;

var debug = true;
var itemPrice;

function startup() {

 listenForChange();
}

// Function listening for changes.
function listenForChange() {
    var dropdownNumDinners  = document.getElementById('numDinners');

    var numPersons = document.getElementById('numPersons');

    dropdownNumDinners.addEventListener("change", update);
    numPersons.addEventListener("change", validate);



if (debug) console.log("Enter function 'listenForChange'");
}

function validate() {
    var selectedOpt = document.getElementById('numDinners').value;

    if (selectedOpt >= 10 || selectedOpt < 1) {
        alert("Velg middag for et antall personer mellom 1 - 10");
        console.log("lol");
    }

    if (debug) console.log("Enter function 'validate'." + " Validation passed");
}

function calculatePrice () {
    var pricePrUnit;

    var numPersons  = document.getElementById('numPersons').value;
    var selectedOptNumDinners  = document.getElementById('numDinners').value;

    if (numPersons <= 5) {
      pricePrUnit = 70;
    } else {
      pricePrUnit = 80;
    }
}

function update () {

    var printedPrise  = document.getElementById('printedPrise');

    printedPrise.innerHTML = itemPrice;

  if (debug) console.log("Enter function 'update'");
}
