import { Airline } from "./airline/Airline";
import {Gate} from ".gate/Gate";
export class Airport{
    private name: string;
    private address?: string;
    public airline: Airline[] = [];
    public gates: Gate[] = [];
    constructor(name: string, address?: string){
        this.name = name;
        this.address = address;
    }
    addAirline(airline: Airline){
        return this.airline.push(airline)
    }

    addGate(gate: Gate){
        return this.gates.push(gate)
    }
}