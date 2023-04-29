import { Passenger } from "../seat/Passenger";
import { Staff } from "./staff";
export class Flight {
    private date: Date;
    public passengers: Passenger[] = [];
    public staff: Staff[] = []
    constructor(date: Date) {
        this.date = date
    }
    addPassenger(passenger: Passenger) {
        return this.passengers.push(passenger);
    }
    getPassenger(): Passenger | undefined {
        for (let passenger of this.passengers) {
            return passenger
        }
        return undefined;
    }

}