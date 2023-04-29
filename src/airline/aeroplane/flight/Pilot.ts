import { Flight } from "./Flight";
import { Staff, staffCategory } from "./staff";

export class Pilot extends Staff{
    private numberOfFlight: number;
    private flights: Flight[]=[];
    
    constructor(category:staffCategory, firstName:string, lastName:string){
        super(category, firstName,lastName);
    }

    addFlight(flight:Flight){
        this.flights.push(flight);
    }

}