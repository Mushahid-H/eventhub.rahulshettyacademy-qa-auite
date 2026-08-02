import { APIRequestContext, APIResponse } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();

export class RegisterAPI {

    request: APIRequestContext;
    constructor(request: APIRequestContext) {
        this.request = request;
    }
    async registerUser(email:string,password:string): Promise<APIResponse> {
        console.log(process.env.WEBSITE_URL);
        return await this.request.post(process.env.BACKEND_URL+'api/auth/register', {
            headers:{
                'Accept':'application/json'
            },
            form:{
                'email':email,
                'password':password,
            }
        })
    }
}