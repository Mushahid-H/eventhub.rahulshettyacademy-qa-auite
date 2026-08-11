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
    test('should login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const reusableFtns = new ReusableFtns(page);
        await loginPage.fillLoginForm(process.env.LOGIN_EMAIL!, process.env.LOGIN_PASSWORD!);
        await loginPage.clickSubmitBtn();
        await reusableFtns.ensureHomePage();

    });
    test('should throws error if login with invalid pass', async ({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.fillLoginForm(process.env.LOGIN_EMAIL!, 'sdfghjklhgfd');
        await loginPage.clickSubmitBtn();
        await loginPage.ensureErrorMessageVisible();

    });
    test('should throws error if login with unregistered email', async ({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.fillLoginForm('unregistered@email.com', process.env.LOGIN_PASSWORD!);
        await loginPage.clickSubmitBtn();
        await loginPage.ensureErrorMessageVisible();
    });



});