import test from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';


test.describe('Register Page', () => {
    test('should navigate to register page and fill the form', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.ensureLoginPage();
        await registerPage.NavigateToRegisterUser();
        await registerPage.ensureCreateAccountPage();
        await registerPage.fillRegisterForm('test@example12.com', 'Password123@', 'Password123@');
        await registerPage.clickSubmitBtn();
    });
    test('should navigate to register page and fill the form with existing email', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.ensureLoginPage();
        await registerPage.NavigateToRegisterUser();
        await registerPage.ensureCreateAccountPage();
        await registerPage.fillRegisterForm('test@example12.com', 'Password123@', 'Password123@');
        await registerPage.clickSubmitBtn();
        await registerPage.ensureErrorMessageVisible();
    });
    test('should navigate to register page and leave the fields empty', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.ensureLoginPage();
        await registerPage.NavigateToRegisterUser();
        await registerPage.ensureCreateAccountPage();
        await registerPage.fillRegisterForm('','','');
        await registerPage.clickSubmitBtn();
        await registerPage.ensureFillEmailErrorVisible();
        await registerPage.ensureFillPasswordErrorVisible();
    });
});