"use strict";
exports.__esModule = true;
exports.Route = void 0;
var Route = /** @class */ (function () {
    function Route(name) {
        this.flights = [];
        this.name = name;
    }
    Route.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    return Route;
}());
exports.Route = Route;
