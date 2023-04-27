"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(departurTime, arrivalTime) {
        this.passengers = [];
        this.departurTime = departurTime;
        this.arrivalTime = arrivalTime;
    }
    Flight.prototype.addPassenger = function (passenger) {
        this.passengers.push(passenger);
    };
    return Flight;
}());
exports.Flight = Flight;
