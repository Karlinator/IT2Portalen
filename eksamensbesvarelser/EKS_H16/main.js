window.onload = startup;

var debug = true;

function startup() {

}

// Run this function when something changes.
function onchange() {
    var selectedOpt = document.getElementById('numDinners').value;

}

function validate() {
    var selectedOpt = document.getElementById('numDinners').value;

    if (selectedOpt >= 10 && selectedOpt < 1) {
        window.alert("Velg middag for et antall personer mellom 1 - 10");
    }

    if (debug) console.log("Enter function " + this);
}
