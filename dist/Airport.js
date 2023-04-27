"use strict";
exports.__esModule = true;
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(name, address) {
        this.airline = [];
        this.gates = [];
        this.routes = [];
        this.name = name;
        this.address = address;
    }
    Airport.prototype.addAirline = function (airline) {
        return this.airline.push(airline);
    };
    Airport.prototype.addGate = function (gate) {
        return this.gates.push(gate);
    };
    Airport.prototype.addRoute = function (route) {
        return this.routes.push(route);
    };
    return Airport;
}());
exports.Airport = Airport;
