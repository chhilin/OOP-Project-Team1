import { Person } from "../../Person";

export enum staffCategory{
    PILOTE,
    CO_PILOTE,
    FLIGHT_ATTENDAN,
    CHEF
}

export class Staff extends Person{
    private salary: number;
    constructor(salary: number,firstName:string, lastNmame: string){
        super(firstName,lastNmame);
        this.salary = salary;
    }
}