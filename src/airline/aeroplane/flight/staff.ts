import { Person } from "../../Person";

export enum staffCategory {
    PILOT,
    CO_PILOTE,
    FLIGHT_ATTENDAN,
    CHEF
}
export class Staff extends Person {
    private salary: number = 0;
    private category: staffCategory[]=[];
    constructor(category:staffCategory,firstName: string, lastNmame: string) {
        super(firstName, lastNmame);
        
    }
    setSalary(salary:number){
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    getCategory(){
        return this.category
    }
}