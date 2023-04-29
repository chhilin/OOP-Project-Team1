import { Flight } from "../airline/aeroplane/flight/Flight";

export class Route{
    private name: string;
    private flights: Flight[]=[]

    constructor(name: string){
        this.name = name;
    }
    
    addFlight(flight:Flight){
        this.flights.push(flight);
    }
}