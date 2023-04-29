import { Person } from "../../Person";

export enum staffCategory {
    PILOT,
    CO_PILOTE,
    FLIGHT_ATTENDAN,
    CHEF
}
export class Staff extends Person {
    private salary: number = 0;
    constructor(
        salary: number, firstName: string, lastNmame: string) {
        super(firstName, lastNmame);
        this.salary = salary;
    }
}