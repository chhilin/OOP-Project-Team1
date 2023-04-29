import { Person } from "../../Person";
import { Booking } from "../../booking/Booking";
import { MealCategory } from "./Meal";

export class Passenger extends Person {
    public meals?: MealCategory;
    public booking: Booking[] = [];
    
    constructor(firstName: string, lastName: string, meal?: MealCategory) {
        super(firstName, lastName);
        this.meals = meal;
    }

    addBooking(booking: Booking) {
        this.booking.push(booking)
    }
    
    getCategoryMeal():MealCategory{
        return this.meals;
    }
}