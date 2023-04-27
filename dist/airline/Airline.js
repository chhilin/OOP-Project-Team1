"use strict";
exports.__esModule = true;
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(name) {
        this.tickets = [];
        this.name = name;
    }
    Airline.prototype.addTicket = function (ticket) {
        return this.tickets.push(ticket);
    };
    return Airline;
}());
exports.Airline = Airline;