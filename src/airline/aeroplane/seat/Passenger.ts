import { Person } from "../../Person";
import { MealCategory } from "./Meal";

export class Passenger extends Person{
    public meals?: MealCategory;
    
    constructor(firstName: string, lastName: string, meal?:MealCategory){
        super(firstName, lastName);
        this.meals = meal;
    }
}