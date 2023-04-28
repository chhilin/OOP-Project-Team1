"use strict";
exports.__esModule = true;
exports.Ticket = void 0;
var Ticket = /** @class */ (function () {
    function Ticket(ticketID, price, numberOfTicket, seat) {
        this.trips = [];
        this.ticketID = ticketID;
        this.price = price;
        this.numberOfTicket = numberOfTicket;
        this.seats = seat;
    }
    Ticket.prototype.addTrip = function (trip) {
        this.trips.push(trip);
    };
    Ticket.prototype.getTrip = function () {
        for (var _i = 0, _a = this.trips; _i < _a.length; _i++) {
            var trip = _a[_i];
            return trip;
        }
        return undefined;
    };
    return Ticket;
}());
exports.Ticket = Ticket;
