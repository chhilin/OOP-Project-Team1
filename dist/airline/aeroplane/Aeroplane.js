"use strict";
exports.__esModule = true;
exports.Aeroplane = void 0;
var Aeroplane = /** @class */ (function () {
    function Aeroplane(planeID, seats, flights) {
        this.seats = [];
        this.flights = [];
        this.planeID = planeID;
        this.seats = seats;
        this.flights = flights;
    }
    Aeroplane.prototype.addSeat = function (seat) {
        return this.seats.push(seat);
    };
    Aeroplane.prototype.addFlight = function (flight) {
        return this.flights.push(flight);
    };
    return Aeroplane;
}());
exports.Aeroplane = Aeroplane;
