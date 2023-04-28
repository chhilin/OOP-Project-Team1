"use strict";
exports.__esModule = true;
var Airport_1 = require("./Airport");
var Airline_1 = require("./airline/Airline");
var Flight_1 = require("./airline/aeroplane/flight/Flight");
var Meal_1 = require("./airline/aeroplane/seat/Meal");
var Passenger_1 = require("./airline/aeroplane/seat/Passenger");
var Ticket_1 = require("./airline/ticket/Ticket");
var Trip_1 = require("./airline/ticket/Trip");
var passenger1 = new Passenger_1.Passenger('chhilin', 'yun', Meal_1.MealCategory.VEGAN);
var passenger2 = new Passenger_1.Passenger('Soki', 'Chhouy');
var flight1 = new Flight_1.Flight('12-Apr-2023', '23-Apr-2023');
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
var trip1 = new Trip_1.Trip('PP', 'UK');
trip1.addFlight(flight1);
var tiket1 = new Ticket_1.Ticket(1, 230, 3);
tiket1.addTrip(trip1);
var airline1 = new Airline_1.Airline('AC-Company');
airline1.addTicket(tiket1);
var airport = new Airport_1.Airport('Cambodia-Airport');
airport.addAirline(airline1);
// console.log(airport.airline[0].tickets[0].trips[0].flights[0].passengers);
// // console.log(airport.getAirline())
// console.log(airline1)
// console.log(airline1.findPassenger())
console.log(airport);
