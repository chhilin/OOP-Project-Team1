"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(departureTime, arrivalTime) {
        this.passengers = [];
        this.staff = [];
        this.departureTime = departureTime;
        ;
        this.arrivalTime = arrivalTime;
        // this.passengers = passengers
    }
    Flight.prototype.addPassenger = function (passenger) {
        return this.passengers.push(passenger);
    };
    Flight.prototype.getPassenger = function () {
        for (var _i = 0, _a = this.passengers; _i < _a.length; _i++) {
            var passenger = _a[_i];
            return passenger;
        }
        return undefined;
    };
    return Flight;
}());
exports.Flight = Flight;
