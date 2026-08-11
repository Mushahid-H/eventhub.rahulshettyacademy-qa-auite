import {expect, Page} from "@playwright/test";

export class HomePage{
    page: Page;
    eventCard;
    eventCardTitle;
    eventCardDate;
    eventCardImg;
    constructor(page: Page) {
        this.page = page;
        this.eventCard=page.getByTestId('event-card').first();
        this.eventCardTitle=this.eventCard.locator('h3');
        this.eventCardDate=this.eventCard.locator('.line-clamp-1').first();
        this.eventCardImg=this.eventCard.locator('img');


    }
    async ensureEventCardsVisible() {
        await expect(this.eventCard).toBeVisible();
    }
    async ensureEventCardsDetails(){
        
     
        await expect(this.eventCardTitle).toBeVisible();
        await expect(this.eventCardDate).toBeVisible();
        await expect(this.eventCardImg).toHaveAttribute('alt', 'Dilli Diwali Mela');

    }

}