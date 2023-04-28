import { Staff, staffCategory } from "./staff";

export class Chef extends Staff{
    constructor(firstName:string, lastName:string){
        super(staffCategory.CHEF, firstName,lastName);
    }
}