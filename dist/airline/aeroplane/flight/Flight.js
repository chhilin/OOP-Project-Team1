"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flihgtID) {
        this.passengers = [];
        this.staff = [];
        this.flihgtID = flihgtID;
    }
    Flight.prototype.addPassenger = function (passenger) {
        return this.passengers.push(passenger);
    };
    Flight.prototype.getPassenger = function () {
        for (var _i = 0, _a = this.passengers; _i < _a.length; _i++) {
            var passenger = _a[_i];
            return passenger;
        }
        return undefined;
    };
    Flight.prototype.getCategoryMealOfPassenger = function () {
        var categoryMeal = '';
        for (var _i = 0, _a = this.passengers; _i < _a.length; _i++) {
            var meal = _a[_i];
            categoryMeal += meal.getCategoryMeal() + '\n';
        }
        return categoryMeal;
    };
    return Flight;
}());
exports.Flight = Flight;
