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
    Airline.prototype.findPassenger = function () {
        for (var _i = 0, _a = this.tickets; _i < _a.length; _i++) {
            var ticke = _a[_i];
            return ticke;
        }
    };
    return Airline;
}());
exports.Airline = Airline;
