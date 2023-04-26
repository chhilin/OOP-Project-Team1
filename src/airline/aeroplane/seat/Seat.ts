import { Passenger } from "./Passenger";

export class Seat{
    private seatID: string;
    private numberOfSeat: number;
    private passengers: Passenger;
    constructor(seatID: string, numberOfSeat: number, passenger: Passenger){
        this.seatID = seatID;
        this.numberOfSeat = numberOfSeat;
        this.passengers = passenger;
    }
}