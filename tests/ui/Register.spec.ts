import test from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';


test.describe('Register Page', () => {
    test('should navigate to register page and fill the form', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goto();
        await registerPage.ensureLoginPage();
        await registerPage.NavigateToRegisterUser();
        await registerPage.ensureCreateAccountPage();
        await registerPage.fillRegisterForm('test@example.com', 'Password123@', 'Password123@');
        await registerPage.clickSubmitBtn();
    });
});