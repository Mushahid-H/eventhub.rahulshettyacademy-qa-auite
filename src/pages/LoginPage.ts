import {expect, Page} from "@playwright/test";
import {ReusableFtns} from "../utility/reusableFtns";
import dotenv from "dotenv";
dotenv.config();

export class LoginPage {
    page: Page;
    homePageTitle;
    loginTitle;
    emailInput;
    passInput;
    submitBtn;
    errorMessage;
    // reusableFtns= new ReusableFtns(this.page);

    constructor(page: Page) {
        this.page = page;
        this.homePageTitle = page.getByRole('heading', { name: 'The #1 QA Practice Hub for Automation Engineers' });
        this.loginTitle = page.getByText('Sign in to EventHub');
        this.emailInput=page.locator('#email');
        this.passInput=page.locator('#password');
        this.submitBtn=page.locator('#login-btn');
        this.errorMessage=page.getByText('Invalid email or password');
    }
    
    
}