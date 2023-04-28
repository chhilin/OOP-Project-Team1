"use strict";
exports.__esModule = true;
var Airport_1 = require("./Airport");
var Airline_1 = require("./airline/Airline");
var Flight_1 = require("./airline/aeroplane/flight/Flight");
var Meal_1 = require("./airline/aeroplane/seat/Meal");
var Passenger_1 = require("./airline/aeroplane/seat/Passenger");
var Seat_1 = require("./airline/aeroplane/seat/Seat");
var Booking_1 = require("./airline/booking/Booking");
var Trip_1 = require("./airline/booking/Trip");
// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)
var passenger1 = new Passenger_1.Passenger('chhilin', 'yun', Meal_1.MealCategory.VEGAN);
var passenger2 = new Passenger_1.Passenger('Soki', 'Chhouy');
var seat1 = new Seat_1.Seat('A01');
var seat2 = new Seat_1.Seat('A02');
var seat3 = new Seat_1.Seat('A03');
var booking1 = new Booking_1.Ticket(1, 120, 2, seat1);
var booking2 = new Booking_1.Ticket(1, 120, 2, seat2);
var booking3 = new Booking_1.Ticket(1, 120, 2, seat3);
passenger1.addBooking(booking1);
passenger1.addBooking(booking2);
passenger2.addBooking(booking3);
var trip1 = new Trip_1.Trip('PP', 'UK');
booking1.addTrip(trip1);
booking2.addTrip(trip1);
var flight1 = new Flight_1.Flight('12-Apr-2023', '23-Apr-2023');
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
var airline = new Airline_1.Airline('Cambodia-CK');
airline.addTicket(booking1);
airline.addTicket(booking2);
var airport = new Airport_1.Airport('Cambodia');
airport.addAirline(airline);
console.log(flight1);
// As an airline manager, I want to know for a given flight, how many passengers have return 
//tickets.
//
// let date1 = new Date(12-3-2023);
// let date2 = new Date(1-4-2023);
// let pi = new Pilot('rady','y');
// pi.setNumberOfFlight(2)
// console.log(pi)
