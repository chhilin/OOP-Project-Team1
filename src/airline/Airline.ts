import { PassThrough } from "stream";
import { Ticket } from "./booking/Booking";
import { Passenger } from "./aeroplane/seat/Passenger";
export class Airline{
    private name: string;
    public tickets: Ticket[] = []
    constructor(name: string){
        this.name = name;
    }

    addTicket(ticket: Ticket){
        return this.tickets.push(ticket)
    }
    findPassenger():Ticket{
       for(let ticke of this.tickets){
        return ticke;
       }
    }
}
