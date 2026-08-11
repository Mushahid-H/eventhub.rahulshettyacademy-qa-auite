import {expect, Page} from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class LogoutPage {
    page: Page;
    logoutBtn;
    loggedInEmail;
    constructor(page: Page) {
        this.page = page;
        this.logoutBtn = page.locator('[data-testid="logout-btn"]');
        this.loggedInEmail = page.locator('[data-testid="user-email-display"]');
    }
    async verifyLoggedInUserEmail(expectedEmail: string) {
        const actualEmail = await this.loggedInEmail.textContent();
        expect(actualEmail).toBe(expectedEmail);
    }
    async clickLogoutBtn() {
        await this.logoutBtn.click();
    }
}