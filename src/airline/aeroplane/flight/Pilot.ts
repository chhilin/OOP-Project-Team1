import { Flight } from "./Flight";
import { Staff, staffCategory } from "./staff";

export class Pilot extends Staff{
    private numberOfFlight: number;
    private flights: Flight[]=[];
    constructor(firstName:string, lastName:string){
        super(staffCategory.PILOT, firstName,lastName);
    }

    addFlight(flight:Flight){
        this.flights.push(flight);
    }

}