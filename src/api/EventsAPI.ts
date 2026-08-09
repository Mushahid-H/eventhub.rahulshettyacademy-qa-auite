import { APIRequestContext, APIResponse } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class EventsAPI {
    private request: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.request = request;
    }
    async getEventsWithToken(category:string, city:string,search:string, page:number,limit:number): Promise<APIResponse> {
        return await this.request.get(`${process.env.BACKEND_URL}api/events`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            },
            params:{
                'category':category,
                'city':city,
                'search':search,
                'page':page,
                'limit':limit
            }
        });
    }
    async getEventWithoutToken(category:string, city:string,search:string, page:number,limit:number): Promise<APIResponse> {
        return await this.request.get(`${process.env.BACKEND_URL}api/events`, {
            headers: {
                'Accept': 'application/json'
            },
            params:{
                'category':category,
                'city':city,
                'search':search,
                'page':page,
                'limit':limit
            }
        });     
    }
    async getSingleEventById(eventId:string): Promise<APIResponse> {
        return await this.request.get(`${process.env.BACKEND_URL}api/events/${eventId}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            }
        });
    }
}