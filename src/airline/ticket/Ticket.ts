export class Ticket{
    private ticketID: number;
    private price: number;
    private numberOfTicket: number;
    constructor(ticketID: number,price: number,numberOfTicket: number){
        this.ticketID = ticketID
        this.price = price
        this.numberOfTicket = numberOfTicket
    }
}