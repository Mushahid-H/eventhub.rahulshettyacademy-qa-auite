import {expect, Page} from "@playwright/test";
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
    

    constructor(page: Page) {
        this.page = page;
        this.homePageTitle = page.getByRole('heading', { name: 'The #1 QA Practice Hub for Automation Engineers' });
        this.loginTitle = page.getByText('Sign in to EventHub');
        this.emailInput=page.locator('#email');
        this.passInput=page.locator('#password');
        this.submitBtn=page.locator('#login-btn');
        this.errorMessage=page.getByText('Invalid email or password');
    }
    async fillLoginForm(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passInput.fill(password);
    }
    async clickSubmitBtn() {
        await this.submitBtn.click();
    }
    async ensureErrorMessageVisible() {
        await expect(this.errorMessage).toBeVisible();
    }
    
    
}