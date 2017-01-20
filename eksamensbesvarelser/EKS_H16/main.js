/*global console*/
//List of the orders in the table.
var orders = [], debug = true;
//Implements $ as a shorthand for document.querySelector() (or document.getElementById/Class). It takes a CSS selector and returns the first object.
//WARNING! If you need to get more than one object with a certain class, you must manually use document.querySelectorAll() instead
function $(i) {
    "use strict";
    return document.querySelector(i);
}
function updateTable(newOrder) {
    "use strict";
    $("#dinnerTable table").insertAdjacentHTML('beforeend', '<tr><td>' + newOrder.week + '</td><td>' + newOrder.dinners + '</td><td>' + newOrder.children + '</td><td>' + newOrder.youth + '</td><td>' + newOrder.adults + '</td></tr>');
}
function addRow() {
    "use strict";
    var week, dinners, children, youth, adults, newOrder;
    week = $("#week").value;
    dinners = $("#dinners").value;
    children = $("#children").value;
    youth = $("#youth").value;
    adults = $("#adults").value;
    if (debug) {console.log(week); }
    newOrder = {'week': week, 'dinners': dinners, 'children': children, 'youth': youth, 'adults': adults};
    orders.push(newOrder);
    updateTable(newOrder);
}
function filterWeek(i) {
    "use strict";
    return i.week === 26;
}
function calculate() {
    "use strict";
    var ordersThisWeek = orders.filter(filterWeek);
    if (debug) {console.log(ordersThisWeek[0]); }

}
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
});
