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
var Pilot_1 = require("./airline/aeroplane/flight/Pilot");
var staff_1 = require("./airline/aeroplane/flight/staff");
var Gate_1 = require("./gate/Gate");
var Date_1 = require("./airline/aeroplane/flight/Date");
// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)
var passenger1 = new Passenger_1.Passenger('chhilin', 'yun', Meal_1.MealCategory.KOSHER);
var passenger2 = new Passenger_1.Passenger('Soki', 'Chhouy', Meal_1.MealCategory.HALAL);
var seat1 = new Seat_1.Seat('A01');
var seat2 = new Seat_1.Seat('A02');
var seat3 = new Seat_1.Seat('A03');
var booking1 = new Booking_1.Booking(1, 120, 2, seat1, true);
var booking2 = new Booking_1.Booking(2, 120, 2, seat2, false);
var booking3 = new Booking_1.Booking(3, 120, 1, seat3, true);
passenger1.addBooking(booking1);
passenger1.addBooking(booking2);
passenger2.addBooking(booking3);
var trip1 = new Trip_1.Trip('PP', 'UK');
booking1.addTrip(trip1);
var date = new Date_1.DateTime("12pm");
var flight1 = new Flight_1.Flight("A1");
var flight2 = new Flight_1.Flight("A2");
date.addFlight(flight1);
date.addFlight(flight2);
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight2.addPassenger(passenger2);
var airline = new Airline_1.Airline('Cambodia-CK');
airline.addBooking(booking1);
airline.addBooking(booking2);
airline.addBooking(booking3);
var airport = new Airport_1.Airport('Cambodia');
airport.addAirline(airline);
console.log(airline);
// 3 As an airline manager, I want to know for a given flight, how many passengers have return 
//tickets.
console.log(airline.getPassengerReturnBookingTicket() + " customers returnBookingTicket");
// 5. As an airline manager, I want to find out how much salary I pay all my employees.
var pilot1 = new Pilot_1.Pilot(staff_1.staffCategory.PILOT, 'rady', 'y');
var pilot2 = new Pilot_1.Pilot(staff_1.staffCategory.CHEF, 'ronan', 'ng');
pilot1.setSalary(528);
pilot2.setSalary(1200);
airline.addStaff(pilot1);
airline.addStaff(pilot2);
console.log(airline.findSalaryOfSaff());
// 6. As a passenger, I want to know which gate my plane is waiting at.
var gate1 = new Gate_1.Gate('D22');
gate1.addFlight(flight1);
gate1.addFlight(flight2);
// console.log(gate1)
//4. As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare
console.log(flight1.getCategoryMealOfPassenger());
