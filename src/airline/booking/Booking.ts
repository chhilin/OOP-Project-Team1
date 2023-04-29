import { Seat } from "../aeroplane/seat/Seat";
import { Trip } from "./Trip";

export class Booking{
    private bookingID: number;
    private price: number;
    private retutnBooking: Boolean;
    public trips: Trip[]=[]
    public seats: Seat;
    private numberOfTicketBooking: number;
    
    constructor(bookingID: number,price: number,numberOfTicketBooking: number,seat:Seat, retutnBooking: Boolean){
        this.bookingID = bookingID;
        this.price = price;
        this.numberOfTicketBooking = numberOfTicketBooking;
        this.seats = seat;
        this.retutnBooking = retutnBooking;
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
    getReturnBookingTicket(){
        return this.retutnBooking 
    }
}