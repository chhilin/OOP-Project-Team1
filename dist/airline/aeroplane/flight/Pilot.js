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
exports.Pilot = void 0;
var staff_1 = require("./staff");
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(firstName, lastName) {
        var _this = _super.call(this, staff_1.staffCategory.PILOTE, firstName, lastName) || this;
        _this.flights = [];
        return _this;
    }
    Pilot.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    return Pilot;
}(staff_1.Staff));
exports.Pilot = Pilot;
