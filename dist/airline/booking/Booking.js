"use strict";
exports.__esModule = true;
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(bookingID, price, numberOfTicketBooking, seat, retutnBooking) {
        this.trips = [];
        this.bookingID = bookingID;
        this.price = price;
        this.numberOfTicketBooking = numberOfTicketBooking;
        this.seats = seat;
        this.retutnBooking = retutnBooking;
    }
    Booking.prototype.addTrip = function (trip) {
        this.trips.push(trip);
    };
    Booking.prototype.getTrip = function () {
        for (var _i = 0, _a = this.trips; _i < _a.length; _i++) {
            var trip = _a[_i];
            return trip;
        }
        return undefined;
    };
    Booking.prototype.getReturnBookingTicket = function () {
        return this.retutnBooking;
    };
    return Booking;
}());
exports.Booking = Booking;
