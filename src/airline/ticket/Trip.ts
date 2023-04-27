import { Flight } from "./aeroplane/flight/Flight";
export class Trip{
    public departureAddress: string;
    public arrivalAddress: string; 
    public flight: Flight[] = []
    constructor(departureAddress: string, arrivalAddress: string){

    }
    addFlight(flight: Flight){
        return this.flight.push(flight)
    }
}