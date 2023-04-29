"use strict";
exports.__esModule = true;
exports.Gate = void 0;
var Gate = /** @class */ (function () {
    function Gate(gateID) {
        this.flights = [];
        this.gateID = gateID;
    }
    Gate.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    return Gate;
}());
exports.Gate = Gate;
