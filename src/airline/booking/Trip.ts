import { Flight } from "../aeroplane/flight/Flight";

export class Trip{
    public departureAddress: string;
    public arrivalAddress: string; 
    public flights: Flight[] = []
    constructor(departureAddress: string, arrivalAddress: string){
        this.departureAddress = departureAddress;
        this.arrivalAddress = arrivalAddress;
    }
    addFlight(flight: Flight){
        return this.flights.push(flight)
    }
    getFlight():Flight{
        for(let flight of this.flights){
          return  flight;
        }
        return undefined;
    }
}