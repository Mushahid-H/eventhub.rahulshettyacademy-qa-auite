import { Page, expect } from "@playwright/test";
import dotenv from 'dotenv';
dotenv.config();
export class ReusableFtns {

    page:Page;
    registerTitle;
    homePageTitle;

    constructor(page:Page){
        this.page=page;
        this.registerTitle=page.getByText('Sign in to EventHub');
        this.homePageTitle=page.getByRole('heading',{name:'Discover & Book Amazing Events'});


    }
    async goto(){
        await this.page.goto(process.env.WEBSITE_URL!);
    }
     async ensureLoginPage(){
        await expect(this.registerTitle).toBeVisible();
    }
    async ensureHomePage(){
        await expect(this.homePageTitle).toBeVisible();
    }
}