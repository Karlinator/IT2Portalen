/*global console*/
//List of the orders in the table.
var orders = [], debug = true;
//Implements $ as a shorthand for document.querySelector() (or document.getElementById/Class). It takes a CSS selector and returns the first object.
//WARNING! If you need to get more than one object with a certain class, you must manually use document.querySelectorAll() instead.
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
function filterWeek(obj) {
    "use strict";
    return obj.week === '26';
}
function calculate() {
    "use strict";
    var ordersThisWeek = orders.filter(filterWeek), i = 0, krabbe = 0, torsk = 0, laks = 0;
    for (i; i < ordersThisWeek.length; i += 1) {
        krabbe += 300 * ordersThisWeek[i].children + 500 * ordersThisWeek[i].youth + 600 * ordersThisWeek[i].adults;
        torsk += 200 * ordersThisWeek[i].children + 300 * ordersThisWeek[i].youth + 350 * ordersThisWeek[i].adults;
        if (ordersThisWeek[i].dinners === '3') {
            laks += 200 * ordersThisWeek[i].children + 300 * ordersThisWeek[i].youth + 350 * ordersThisWeek[i].adults;
        }
    }
    $("#result").innerHTML = '<h4>Krabbe: ' + krabbe + 'g Torsk: ' + torsk + 'g Laks: ' + laks + 'g';

}
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
});
