import test from '@playwright/test';
import { RegisterPage } from '../../src/pages/RegisterPage';


test.describe('Register Page', () => {
    test('should navigate to register page and fill the form', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.NavigateToRegisterUser();
        await registerPage.ensureLoginPage();
        await registerPage.fillRegisterForm('test@example.com', 'password123', 'password123');
        await registerPage.clickSubmitBtn();
    });
});