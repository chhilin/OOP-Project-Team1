import { Seat } from "./seat/Seat";
import { Flight } from "./flight/Flight";
export class Aeroplane{
    private planeID: string;
    public seats: Seat[] = [];
    public flights: Flight[] = [];
    constructor(planeID: string, seats: Seat[], flights: Flight[]){
        this.planeID = planeID;
        this.seats = seats;
        this.flights = flights;
    }
    addSeat(seat: Seat){
        return this.seats.push(seat);
    }
    addFlight(flight: Flight){
        return this.flights.push(flight)
    }
}