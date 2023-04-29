import { Flight } from "./Flight";

export class DateTime {
    private dateTime: string
    private flights: Flight[]=[];
    constructor(dateTime:string){
        this.dateTime = dateTime;
    }

    addFlight(flight:Flight){
        this.flights.push(flight);
    }
}