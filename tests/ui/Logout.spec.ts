import {test} from '@playwright/test';
import { LogoutPage } from '../../src/pages/LogoutPage';
import { ReusableFtns } from '../../src/utility/reusableFtns';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Logout Page', () => {

    test.beforeEach(async ({ page }) => {
        const reusableFtns = new ReusableFtns(page);
        await reusableFtns.goto();
    });
    test('should logout successfully', async ({ page }) => {
        const logoutPage = new LogoutPage(page);
        const reusableFtns = new ReusableFtns(page);
        const loginPage = new LoginPage(page);
        await reusableFtns.ensureLoginPage();
        await loginPage.fillLoginForm(process.env.LOGIN_EMAIL!, process.env.LOGIN_PASSWORD!);
        await loginPage.clickSubmitBtn();
        await reusableFtns.ensureHomePage();
        await logoutPage.verifyLoggedInUserEmail(process.env.LOGIN_EMAIL!);
        await logoutPage.clickLogoutBtn();
        await reusableFtns.ensureLoginPage();
    });
    test('Should invalidate session if user logsout, access protected pages stay inaccessable',async ({page})=>{
        const reusableFtns = new ReusableFtns(page);
        await page.goto(process.env.WEBSITE_URL!+'admin/events');
        await reusableFtns.ensureLoginPage();
    });

});