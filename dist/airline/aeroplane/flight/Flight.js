"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(date) {
        this.passengers = [];
        this.staff = [];
        this.date = date;
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
