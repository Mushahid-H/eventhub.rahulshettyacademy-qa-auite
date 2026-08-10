import {test} from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ReusableFtns } from '../../src/utility/reusableFtns';

test.describe('Login Page', () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const reusableFtns = new ReusableFtns(page);
        await reusableFtns.goto();
        await reusableFtns.ensureLoginPage();
    });
    test('should navigate to login page and fill the form', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const reusableFtns = new ReusableFtns(page);
        await loginPage.fillLoginForm(process.env.LOGIN_EMAIL!, process.env.LOGIN_PASSWORD!);
        await loginPage.clickSubmitBtn();
        await reusableFtns.ensureHomePage();

    });


});