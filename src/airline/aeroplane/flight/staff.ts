import { Person } from "../../Person";

export enum staffCategory{
    PILOTE,
    CO_PILOTE,
    FLIGHT_ATTENDAN,
    CHEF
}

export class Staff extends Person{
    protected salary: number = 0;
    constructor(
        // protected category:staffCategory,
        salary: number,firstName:string, lastNmame: string){
        super(firstName,lastNmame);
        this.salary = salary;
    }
}