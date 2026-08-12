import {expect,Page} from '@playwright/test'

export class BookingPage{
    page:Page;
    bookBtn;
    nameInput;
    emailInput;
    phoneInput;
    submitBtn;
    successMessage;
    plusButton;
    maxText;
    // maxCount;
    constructor(page:Page){
        this.page=page;
        this.bookBtn=page.getByTestId('book-now-btn').first();
        this.nameInput=page.locator('#customerName');
        this.emailInput=page.locator('#customer-email');
        this.phoneInput=page.locator('#phone');
        this.submitBtn=page.locator('#confirm-booking');
        this.successMessage=page.getByText('Booking Confirmed! 🎉');
        this.plusButton = page.locator('button:has-text("+")');
        this.maxText = page.locator('span.text-gray-400').innerText();
        // this.maxCount= parseInt(this.maxText.match(/\d+/)[0], 10); 
    }
    async clickBookNowBtn(){
        await this.bookBtn.click();
    }
    async fillBookingForm(name:string,email:string,phone:string){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
    }
    async clickSubmitBtn(){
        await this.submitBtn.click();
    }
    async ensureSuccessMessageVisible(){
        await expect(this.successMessage).toBeVisible();
    }
}