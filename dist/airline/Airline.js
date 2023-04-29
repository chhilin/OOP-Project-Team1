"use strict";
exports.__esModule = true;
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(name) {
        this.bookings = [];
        this.staff = [];
        this.name = name;
    }
    Airline.prototype.addBooking = function (booking) {
        return this.bookings.push(booking);
    };
    Airline.prototype.findPassenger = function () {
        for (var _i = 0, _a = this.bookings; _i < _a.length; _i++) {
            var ticke = _a[_i];
            return ticke;
        }
    };
    Airline.prototype.addStaff = function (staff) {
        this.staff.push(staff);
    };
    Airline.prototype.getPassengerReturnBookingTicket = function () {
        var countReturnBookingTicket = 0;
        for (var _i = 0, _a = this.bookings; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (booking.getReturnBookingTicket() == true) {
                countReturnBookingTicket += 1;
            }
        }
        return countReturnBookingTicket;
    };
    return Airline;
}());
exports.Airline = Airline;
