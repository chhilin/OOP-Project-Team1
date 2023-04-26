import { MealCategory } from "./Meal";

export class Passenger{
    private firstName: string;
    private lastName: string;
    public meals: MealCategory;
    
    constructor(firstName: string, lastName: string, meal:MealCategory){
        this.firstName = firstName;
        this.lastName = lastName;
        this.meals = meal;
    }
}