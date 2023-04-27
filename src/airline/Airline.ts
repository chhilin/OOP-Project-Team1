import { Ticket } from "./ticket/Ticket";
export class Airline{
    private name: string;
    public tickets: Ticket[] = []
    constructor(name: string){
        this.name = name;
    }

    addTicket(ticket: Ticket){
        return this.tickets.push(ticket)
    }
}