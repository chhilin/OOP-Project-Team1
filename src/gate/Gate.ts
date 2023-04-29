import { Flight } from "../airline/aeroplane/flight/Flight";

export class Gate{
    private gateID: string;
    public flights: Flight[]=[];

    constructor(gateID: string){
        this.gateID = gateID;
    }

    addFlight(flight:Flight){
        this.flights.push(flight);
    }
}