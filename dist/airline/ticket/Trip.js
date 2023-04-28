"use strict";
exports.__esModule = true;
exports.Trip = void 0;
var Trip = /** @class */ (function () {
    function Trip(departureAddress, arrivalAddress) {
        this.flights = [];
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
    }
    Trip.prototype.addFlight = function (flight) {
        return this.flights.push(flight);
    };
    Trip.prototype.getFlight = function () {
        for (var _i = 0, _a = this.flights; _i < _a.length; _i++) {
            var flight = _a[_i];
            return flight;
        }
        return undefined;
    };
    return Trip;
}());
exports.Trip = Trip;
