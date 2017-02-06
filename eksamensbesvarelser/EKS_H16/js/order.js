/*global console, prompt*/
//If set to true, the console outpust various messages in order to better find errors.
var debug = true;

//Checks that the input (number of people) does not exceed 10, and is also not 0.
function validate() {
    "use strict";
    //Logs in the console. Useful for finding errors.
    if (debug) {console.log("Enter function 'validate'." + " Validation passed"); }
    //Retrieves the number of people entered in the input field.
    var numPersons = document.getElementById('numPersons').value;

    //Gives a popup error if the number of people in the input field is greater than 10 or less than 1.
    if (numPersons > 10 || numPersons < 1) {
        window.alert("Velg middag for et antall personer mellom 1 og 10");
    } else {
        return true;
    }
}

//Updates the image of a dinner to either two or three dinners depending on what the user has chosen (2 or 3 dinners).
function updateImg() {
    "use strict";
    //Retrieves the image and the number of dinners chosen.
    var img = document.getElementById('bilde'),
        dropdownNumDinners = document.getElementById('numDinners').value;

    //Sets the correct image for two or three dinners.
    if (dropdownNumDinners === 2) {
        img.src = "images/2middager.jpg";
    } else {
        img.src = "images/3middager.jpg";
    }
}

//Calculates the price.
function calculatePrice() {
    "use strict";
    //Sets up needed variables, as well as retrieving the size of the order and the number of dinners ordered.
    var itemPrice, pricePrUnit,
        numPersons = document.getElementById('numPersons').value,
        selectedOptNumDinners = document.getElementById('numDinners').value;

    //Lowers the price for families of 5 or more.
    if (numPersons >= 5) {
        pricePrUnit = 70;
    } else {
        pricePrUnit = 80;
    }

    //Calculates the price.
    //The total price is equal to the price per dinner, multiplied by the nuber of dinners ordered (2 or 3), multiplied by the number of people the dinners are ordered for.
    itemPrice = pricePrUnit * numPersons * selectedOptNumDinners;

    //Spits the total price back out of the function so that it can be displayed to the user.
    return itemPrice;
}

//Updates all the UI elements (image, price etc) when the user makes a change in their selection.
function update() {
    "use strict";
    var price, validation, printedPrice;

    //Updates the image.
    updateImg();

    //Calculates and displays the price if the input is valid.
    if (validate()) {
        //Calculates the price.
        price = calculatePrice();

        //Retrieves the place where the price is to be displayed.
        printedPrice = document.getElementById('printedPrice');

        //Displays the price.
        printedPrice.innerHTML = price;
    }
    //Logs in the console. Useful for finding errors.
    if (debug) {console.log("Enter function 'update'"); }
}

//Saves the order information is SessionStorage, so that it can be retrieved and put on the reciept.
function save() {
    "use strict";

    //Collects name and adress of user.
    var firstname = prompt("Faktureringsinfo: Fornavn"),
        lastname = prompt("Faktureringsinfo: Etternavn"),
        address = prompt("Faktureringsinfo: Addresse"),

        //Collects the rest of the order information.
        numPersons = document.getElementById('numPersons').value,
        numDinners = document.getElementById('numDinners').value;

    //Sets the order information in session storage.
    sessionStorage.price = calculatePrice();
    sessionStorage.numPersons = numPersons;
    sessionStorage.numDinners = numDinners;
    sessionStorage.firstname = firstname;
    sessionStorage.lastname = lastname;
    sessionStorage.address = address;

    //Sends the user to the receipt page.
    window.location.href = 'receipt.html';
}
//Function listening for changes.
function listenForChange() {
    "use strict";
    //Retrieves the user input fields.
    var dropdownNumDinners = document.getElementById('numDinners'),
        numPersons = document.getElementById('numPersons'),
        btn = document.getElementById('btn');

    //Adds event listeners, so that when the user changes the input, other functions run.
    //Changing the input makes the site update.
    dropdownNumDinners.addEventListener("change", update);
    numPersons.addEventListener("change", update);
    //Clicking the submit button triggers the order to be saved an the user sent to the receipt.
    btn.addEventListener("click", save);


    //Logs in the console. Useful for finding errors.
    if (debug) {console.log("Enter function 'listenForChange'"); }
}
//Runs when the site loads.
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    update();
    listenForChange();
});
