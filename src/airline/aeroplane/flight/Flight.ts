import { MealCategory } from "../seat/Meal";
import { Passenger } from "../seat/Passenger";
import { DateTime } from "./Date";
import { Staff } from "./staff";
export class Flight {
    public passengers: Passenger[] = [];
    public staff: Staff[] = [];
    private flihgtID: string;

    constructor(flihgtID: string) {
        this.flihgtID = flihgtID
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

    getCategoryMealOfPassenger():string{
        let categoryMeal : string = '';
        for(let meal of this.passengers){
            categoryMeal += meal.getCategoryMeal() + '\n'
        }
        return categoryMeal
    }

}