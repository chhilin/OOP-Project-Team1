export enum staffCategory{
    PILOTE,
    CO_PILOTE,
    FLIGHT_ATTENDAN,
    CHEF
}

export class Staff{
    private salary: number;
    constructor(salary: number){
        this.salary = salary
    }
}