import { Airport } from "./Airport";
import { Airline } from "./airline/Airline";
import { Flight } from "./airline/aeroplane/flight/Flight";
import { MealCategory } from "./airline/aeroplane/seat/Meal";
import { Passenger } from "./airline/aeroplane/seat/Passenger";
import { Ticket } from "./airline/ticket/Ticket";
import { Trip } from "./airline/ticket/Trip";

// As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)

let passenger1 = new Passenger('chhilin','yun',MealCategory.VEGAN);
let passenger2 = new Passenger('Soki','Chhouy');
let flight1 = new Flight('12-Apr-2023','23-Apr-2023')
flight1.addPassenger(passenger1)
flight1.addPassenger(passenger2)

let trip1 = new Trip('PP','UK');
trip1.addFlight(flight1)

let tiket1 = new Ticket(1,230,3);
tiket1.addTrip(trip1)

let airline1 = new Airline('AC-Company');
airline1.addTicket(tiket1)

let airport = new Airport('Cambodia-Airport');
airport.addAirline(airline1);
console.log(airport)

// As an airline manager, I want to know for a given flight, how many passengers have return 
//tickets.


