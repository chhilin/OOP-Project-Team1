import { PassThrough } from "stream";
import { Booking } from "./booking/Booking";
import { Staff } from "./aeroplane/flight/staff";
import { DateTime } from "./aeroplane/flight/Date";
export class Airline{
    private name: string;
    private bookings: Booking[] = [];
    private staff : Staff[]=[];
    constructor(name: string){
        this.name = name;
    }

    addBooking(booking: Booking){
        return this.bookings.push(booking)
    }
    findPassenger():Booking{
       for(let ticke of this.bookings){
        return ticke;
       }
    }

    addStaff(staff:Staff){
        this.staff.push(staff);
    }
    // addDateTime(dateTime:DateTime){
    //     this.dateTime.push(dateTime)
    // }
    getPassengerReturnBookingTicket(){
        let countReturnBookingTicket = 0;
        for(let booking of this.bookings){
            if(booking.getReturnBookingTicket() == true){
                countReturnBookingTicket +=1
            }
        }
        return countReturnBookingTicket;
    }

    findSalaryOfSaff():number{
        let sumSalary : number = 0
        for(let salary of this.staff){
            sumSalary += salary.getSalary()
        }
        return sumSalary;
    }
}
