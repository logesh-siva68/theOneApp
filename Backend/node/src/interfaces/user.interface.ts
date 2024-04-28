//user.interface.ts

export interface registerBody{
    name:string,
    mobileNumber:number,
    countryCode:string,
    dob?: Date,
    password:string
}