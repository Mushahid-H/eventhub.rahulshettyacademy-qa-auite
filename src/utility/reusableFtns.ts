import { Page, expect } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();
export class ReusableFtns {

    page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async goto(){
        await this.page.goto(process.env.WEBSITE_URL!);
    }
}