import { Passenger } from "../seat/Passenger";
export class Flight{
    private departureTime: string;
    private arrivalTime: string;
    public passengers: Passenger[] = [];
    constructor(departureTime: string,arrivalTime: string){
        this.departureTime = departureTime;;
        this.arrivalTime = arrivalTime;
        // this.passengers = passengers
    }
    addPassenger(passenger: Passenger){
        return this.passengers.push(passenger);
    }
    getPassenger( ) :Passenger | undefined{
        for (let passenger of this.passengers){
            return passenger
        }
        return undefined;
    }
}