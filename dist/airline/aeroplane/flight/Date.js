"use strict";
exports.__esModule = true;
exports.DateTime = void 0;
var DateTime = /** @class */ (function () {
    function DateTime(dateTime) {
        this.flights = [];
        this.dateTime = dateTime;
    }
    DateTime.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    return DateTime;
}());
exports.DateTime = DateTime;
