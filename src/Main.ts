import { Flight } from "./airline/aeroplane/flight/Flight";
import { MealCategory } from "./airline/aeroplane/seat/Meal";
import { Passenger } from "./airline/aeroplane/seat/Passenger";


let pas = new Passenger('chhilin','yun',MealCategory.DAILY_FREE);
// console.log(pas);
let f1 = new Flight('12-Apr-2023','23-Apr-2023')
// f1.addPassenger()
// console.log(f1.addPassenger(pas))