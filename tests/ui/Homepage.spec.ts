import {test} from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ReusableFtns } from '../../src/utility/reusableFtns';
import { HomePage } from '../../src/pages/HomePage';

test.describe('Home Page', () => {
    
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const reusableFtns = new ReusableFtns(page);
        await reusableFtns.goto();
        await reusableFtns.ensureLoginPage();
        await loginPage.fillLoginForm(process.env.LOGIN_EMAIL!, process.env.LOGIN_PASSWORD!);
        await loginPage.clickSubmitBtn();
        await reusableFtns.ensureHomePage();
        await page.waitForLoadState('networkidle');

    });
    // test('should display event cards with details', async ({ page }) => {
    //     // const reusableFtns = new ReusableFtns(page);
    //     const homePage = new HomePage(page);
    //     await homePage.ensureEventCardsVisible();
    //     await homePage.ensureEventCardsDetails();
    // });
    // test('Search for an event and verify the result', async ({ page }) => {
    //     const homePage = new HomePage(page);
    //     await homePage.clickEventsBtn();
    //     await homePage.ensureEventsHeadingVisible();
    //     await homePage.searchEvent('Hollywood');
    // });
    test('search with no matches to verify empty states', async ({ page }) => {
        const homePage= new HomePage(page);
        await homePage.clickEventsBtn();
        await homePage.ensureEventsHeadingVisible();
        await homePage.searchEvent('NonExistentEvent');
        await homePage.EnsureEmtpyStates();
    });
    test('Select a category',async ({page})=>{
        const homePage=new HomePage(page);
        await homePage.clickEventsBtn();
        await homePage.ensureEventsHeadingVisible();
        await homePage.chooseCategory();
    });
});