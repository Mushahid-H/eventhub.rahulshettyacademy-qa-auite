import { APIRequestContext,APIResponse } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

export class BookingAPI{
    request:APIRequestContext;
    constructor(request:APIRequestContext){
        this.request=request;
    }
    async bookEvent(eventId:string,customerName:string,customerEmail:string,customerPhone:string, quantity:number):Promise<APIResponse>{
        return await this.request.post(process.env.BACKEND_URL+'api/bookings',{
            headers:{
                'Accept':'application/json',
                'Authorization':`Bearer ${process.env.API_TOKEN}`
            },
            form:{
                eventId:eventId,
                customerName:customerName,
                customerEmail:customerEmail,
                customerPhone:customerPhone,
                quantity:quantity
            }
        })
    }
    async createBookingWithMissingData(eventId:string,customerName:string,customerEmail:string,customerPhone:string, quantity:number):Promise<APIResponse>{
        return await this.request.post(process.env.BACKEND_URL+'api/bookings',{
            headers:{
                'Accept':'application/json',
                'Authorization':`Bearer ${process.env.API_TOKEN}`
            },
        })
    }
}       
