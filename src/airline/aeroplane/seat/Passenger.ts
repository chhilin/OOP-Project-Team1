import { Person } from "../../Person";
import { Ticket } from "../../booking/Booking";
import { MealCategory } from "./Meal";

export class Passenger extends Person{
    public meals?: MealCategory;
    public booking: Ticket[]=[];
    constructor(firstName: string, lastName: string, meal?:MealCategory){
        super(firstName, lastName);
        this.meals = meal;
    }
    addBooking(booking:Ticket){
        this.booking.push(booking)
    }
}