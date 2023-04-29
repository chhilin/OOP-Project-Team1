"use strict";
exports.__esModule = true;
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(name) {
        // private dateTime: DateTime[]=[];
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
    // addDateTime(dateTime:DateTime){
    //     this.dateTime.push(dateTime)
    // }
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
    Airline.prototype.findSalaryOfSaff = function () {
        var sumSalary = 0;
        for (var _i = 0, _a = this.staff; _i < _a.length; _i++) {
            var salary = _a[_i];
            sumSalary += salary.getSalary();
        }
        return sumSalary;
    };
    return Airline;
}());
exports.Airline = Airline;
