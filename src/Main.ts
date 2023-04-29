import { appendFile } from "fs";
import { Airport } from "./Airport";
import { Airline } from "./airline/Airline";
import { Flight } from "./airline/aeroplane/flight/Flight";
import { MealCategory } from "./airline/aeroplane/seat/Meal";
import { Passenger } from "./airline/aeroplane/seat/Passenger";
import { Seat } from "./airline/aeroplane/seat/Seat";
import { Booking } from "./airline/booking/Booking";
import { Trip } from "./airline/booking/Trip";

// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)

let passenger1 = new Passenger('chhilin','yun',MealCategory.VEGAN);
let passenger2 = new Passenger('Soki','Chhouy');

let seat1 = new Seat('A01');
let seat2 = new Seat('A02');
let seat3 = new Seat('A03');
let booking1 = new Booking(1,120,2,seat1,true);
let booking2 = new Booking(2,120,2,seat2,false);
let booking3 = new Booking(3,120,1,seat3,true);

passenger1.addBooking(booking1)
passenger1.addBooking(booking2);
passenger2.addBooking(booking3)

let trip1 = new Trip('PP','UK')
booking1.addTrip(trip1);

let date = new Date()
let flight1 = new Flight(date);
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);

let airline = new Airline('Cambodia-CK');
airline.addBooking(booking1)
airline.addBooking(booking2)
airline.addBooking(booking3)

let airport = new Airport('Cambodia');
airport.addAirline(airline)

// As an airline manager, I want to know for a given flight, how many passengers have return 
//tickets.
console.log(airline.getPassengerReturnBookingTicket()+ " customers returnBookingTicket")

