"use strict";
exports.__esModule = true;
var Meal_1 = require("./airline/aeroplane/seat/Meal");
var Passenger_1 = require("./airline/aeroplane/seat/Passenger");
var Flight_1 = require("./airline/ticket/Flight");
var pas = new Passenger_1.Passenger('chhilin', 'yun', Meal_1.MealCategory.DAILY_FREE);
// console.log(pas);
var f1 = new Flight_1.Flight('12-Apr-2023', '23-Apr-2023');
f1.addPassenger(pas);
console.log(f1.addPassenger(pas));
