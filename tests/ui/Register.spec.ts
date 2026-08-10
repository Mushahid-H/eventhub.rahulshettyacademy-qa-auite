import test from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';
import { ReusableFtns } from '../../src/utility/reusableFtns';


test.describe('Register Page', () => {
    test.beforeEach(async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const reusableFtns = new ReusableFtns(page);
        await reusableFtns.goto();
        await reusableFtns.ensureLoginPage();
        await registerPage.NavigateToRegisterUser();
        await registerPage.ensureCreateAccountPage();

    });
    test('should navigate to register page and fill the form', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        const reusableFtns = new ReusableFtns(page);

        await registerPage.fillRegisterForm('test@example12545.com', 'Password123@', 'Password123@');
        await registerPage.clickSubmitBtn();
        await reusableFtns.ensureHomePage();
    });
    test('should navigate to register page and fill the form with existing email', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.fillRegisterForm('test@example12.com', 'Password123@', 'Password123@');
        await registerPage.clickSubmitBtn();
        await registerPage.ensureErrorMessageVisible();
    });
    test('should navigate to register page and leave the fields empty', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.fillRegisterForm('','','');
        await registerPage.clickSubmitBtn();
        await registerPage.ensureFillEmailErrorVisible();
        await registerPage.ensureFillPasswordErrorVisible();
    });
    test('should navigate to register page and fill the form with invalid email format', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.fillRegisterForm('testexample.com', 'Password123@', 'Password123@');
        await registerPage.clickSubmitBtn();
        await registerPage.ensureFillEmailErrorVisible();
    });
    test('should navigate to register page and fill the name field with SQL injection', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.fillRegisterForm('<script>alert(1)</script>', 'Password123@', 'Password123@');
        await registerPage.clickSubmitBtn();
        await registerPage.ensureFillEmailErrorVisible();
        
    });

});