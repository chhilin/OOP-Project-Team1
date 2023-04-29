"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Staff = exports.staffCategory = void 0;
var Person_1 = require("../../Person");
var staffCategory;
(function (staffCategory) {
    staffCategory[staffCategory["PILOT"] = 0] = "PILOT";
    staffCategory[staffCategory["CO_PILOTE"] = 1] = "CO_PILOTE";
    staffCategory[staffCategory["FLIGHT_ATTENDAN"] = 2] = "FLIGHT_ATTENDAN";
    staffCategory[staffCategory["CHEF"] = 3] = "CHEF";
})(staffCategory = exports.staffCategory || (exports.staffCategory = {}));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(category, firstName, lastNmame) {
        var _this = _super.call(this, firstName, lastNmame) || this;
        _this.salary = 0;
        return _this;
    }
    Staff.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Staff.prototype.getSalary = function () {
        return this.salary;
    };
    Staff.prototype.getCategory = function () {
        return this.category;
    };
    return Staff;
}(Person_1.Person));
exports.Staff = Staff;
