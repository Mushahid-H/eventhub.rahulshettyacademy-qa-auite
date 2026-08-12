import {test} from '@playwright/test'
import { BookingPage } from '../../src/pages/BookingPage'
import { LoginPage } from '../../src/pages/LoginPage'
import { ReusableFtns } from '../../src/utility/reusableFtns'
import dotenv from 'dotenv'
dotenv.config()

test.describe('Booking',()=>{
    test.beforeEach(async ({page})=>{
        const loginPage = new LoginPage(page);
        const reusableFtns = new ReusableFtns(page);
        await reusableFtns.goto();
        await reusableFtns.ensureLoginPage();
        await loginPage.fillLoginForm(process.env.LOGIN_EMAIL!, process.env.LOGIN_PASSWORD!);
        await loginPage.clickSubmitBtn();
        await reusableFtns.ensureHomePage();
        await page.waitForLoadState('networkidle');
    });

    test('Book an event',async ({page})=>{
        const bookingPage = new BookingPage(page);
        await bookingPage.clickBookNowBtn();
        await bookingPage.fillBookingForm('test','testing@examples.coms','1234567890');
        await bookingPage.clickSubmitBtn();
        await bookingPage.ensureSuccessMessageVisible();


    })
})