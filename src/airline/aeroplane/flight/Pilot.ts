import { Staff, staffCategory } from "./staff";

export class Pilot extends Staff{
    private numberOfFlight: number;
    constructor( firstName: string, lastName: string){
        super(staffCategory.PILOTE,firstName, lastName);
        
    }
    setNumberOfFlight(numberOfFlight:number){
        return this.numberOfFlight = numberOfFlight;
        let date = new Date()
    }
}