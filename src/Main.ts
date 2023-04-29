import { appendFile } from "fs";
import { Airport } from "./Airport";
import { Airline } from "./airline/Airline";
import { Flight } from "./airline/aeroplane/flight/Flight";
import { MealCategory } from "./airline/aeroplane/seat/Meal";
import { Passenger } from "./airline/aeroplane/seat/Passenger";
import { Seat } from "./airline/aeroplane/seat/Seat";
import { Booking } from "./airline/booking/Booking";
import { Trip } from "./airline/booking/Trip";
import { Pilot } from "./airline/aeroplane/flight/Pilot";
import { Staff, staffCategory } from "./airline/aeroplane/flight/staff";
import { Gate } from "./gate/Gate";
import { Route } from "./route/Route";
import { DateTime } from "./airline/aeroplane/flight/Date";

//1 As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)

let passenger1 = new Passenger('chhilin', 'yun', MealCategory.KOSHER);
let passenger2 = new Passenger('Soki', 'Chhouy', MealCategory.HALAL);

let seat1 = new Seat('A01');
let seat2 = new Seat('A02');
let seat3 = new Seat('A03');
let booking1 = new Booking(1, 120, 2, seat1, true);
let booking2 = new Booking(2, 120, 2, seat2, false);
let booking3 = new Booking(3, 120, 1, seat3, true);

passenger1.addBooking(booking1);
passenger1.addBooking(booking2);
passenger2.addBooking(booking3);

let trip1 = new Trip('PP', 'UK');
booking1.addTrip(trip1);

let date = new DateTime("12pm")
let flight1 = new Flight("A1");
let flight2 = new Flight("A2");
date.addFlight(flight1)
date.addFlight(flight2)
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight2.addPassenger(passenger2);

let airline = new Airline('Cambodia-CK');
airline.addBooking(booking1);
airline.addBooking(booking2);
airline.addBooking(booking3);

let airport = new Airport('Cambodia');
airport.addAirline(airline);

// 3 As an airline manager, I want to know for a given flight, how many passengers have return 
//tickets.

console.log(airline.getPassengerReturnBookingTicket() + " customers returnBookingTicket")

// 5. As an airline manager, I want to find out how much salary I pay all my employees.
let pilot1 = new Pilot(staffCategory.PILOT, 'rady', 'y');
let pilot2 = new Pilot(staffCategory.CHEF, 'ronan', 'ng');
pilot1.setSalary(528);
pilot2.setSalary(1200);

airline.addStaff(pilot1)
airline.addStaff(pilot2)

// 6. As a passenger, I want to know which gate my plane is waiting at.
let gate1 = new Gate('D22');
let route = new Route('A001');

gate1.addFlight(flight1);
gate1.addFlight(flight1);
route.addFlight(flight1);

airport.addGate(gate1);
airport.addRoute(route);
console.log(airport)





