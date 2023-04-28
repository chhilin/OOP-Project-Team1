import { Seat } from "../aeroplane/seat/Seat";
import { Trip } from "./Trip";

export class Ticket{
    private ticketID: number;
    private price: number;
    public trips: Trip[]=[]
    public seats: Seat;
    private numberOfTicket: number;
    constructor(ticketID: number,price: number,numberOfTicket: number,seat:Seat){
        this.ticketID = ticketID;
        this.price = price;
        this.numberOfTicket = numberOfTicket;
        this.seats = seat;
    }
    addTrip(trip:Trip){
        this.trips.push(trip);
    }
    getTrip():Trip | undefined{
        for(let trip of this.trips){
         return trip;
        }
        return undefined
    }
 
}