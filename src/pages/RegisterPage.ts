import {expect,Page} from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();


export class RegisterPage {
    page:Page;
    homePageTitle;
    registerTitle;
    registerBtn;
    createAccountTitle;
    emailInput;
    passInput;
    confirmPassInput;
    submitBtn;
    constructor(page:Page){
        this.page=page;
        this.homePageTitle=page.getByRole('heading',{name:'Discover & Book Amazing Events'});
        this.registerTitle=page.getByText('Sign in to EventHub');
        this.registerBtn=page.locator('a[href="/register"]');
        this.createAccountTitle=page.getByRole('heading',{name:'Create your account'});
        this.emailInput=page.locator('[data-testid="register-email"]');
        this.passInput=page.locator('[data-testid="register-password"]');
        this.confirmPassInput=page.getByRole('textbox', { name: 'Repeat your password' })
        this.submitBtn=page.locator('[data-testid="register-btn"]');
    }
    async goto(){
        await this.page.goto(process.env.WEBSITE_URL!);
    }
    async NavigateToRegisterUser(){
        await this.registerBtn.click();
    }
    async ensureLoginPage(){
        await expect(this.registerTitle).toBeVisible();
    }
    async ensureCreateAccountPage(){
        await expect(this.createAccountTitle).toBeVisible();
    }
 
    async ensureHomePage(){
        await expect(this.homePageTitle).toBeVisible();
    }
    async fillRegisterForm(email:string,password:string,confirmPassword:string){
        await this.emailInput.fill(email);
        await this.passInput.fill(password);
        await this.confirmPassInput.fill(confirmPassword);
    }
    async clickSubmitBtn(){
        await this.submitBtn.click();
    }
}