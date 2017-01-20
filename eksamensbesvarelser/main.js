/*global console*/
//List of the orders in the table.
var orders = [], debug = true;
function $(i) {
    "use strict";
    return document.querySelector(i);
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
}
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    $("#add").addEventListener('click', addRow());
});
