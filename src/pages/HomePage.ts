import {expect, Page} from "@playwright/test";

export class HomePage{
    page: Page;
    eventCard;
    eventCardTitle;
    eventCardDate;
    eventCardImg;
    eventBtn;
    eventsHeading;
    searchInput;
    eventCardInsearch;
    eventCardInSearchTitle;
    noResultsMessage;
    selectCategory;
    constructor(page: Page) {
        this.page = page;
        this.eventCard=page.getByTestId('event-card').first();
        this.eventCardTitle=this.eventCard.locator('h3');
        this.eventCardDate=this.eventCard.locator('.line-clamp-1').first();
        this.eventCardImg=this.eventCard.locator('img');
        this.eventBtn=page.getByTestId('nav-events');
        this.eventsHeading=page.getByRole('heading',{name:"Upcoming Events"})
        this.searchInput=page.getByPlaceholder('Search events, venues…')
        this.eventCardInsearch=page.getByTestId('event-card').first();
        this.eventCardInSearchTitle=this.eventCardInsearch.locator('h3');
        this.noResultsMessage=page.getByText('No events found');
        this.selectCategory=page.locator('select');
        
    }
    async ensureEventCardsVisible() {
        await expect(this.eventCard).toBeVisible();
    }
    async ensureEventCardsDetails(){
        
     
        await expect(this.eventCardTitle).toBeVisible();
        await expect(this.eventCardDate).toBeVisible();
        await expect(this.eventCardImg).toHaveAttribute('alt', 'Dilli Diwali Mela');

    }
    async clickEventsBtn(){
        await this.eventBtn.click();
    }
    async ensureEventsHeadingVisible(){
        await expect(this.eventsHeading).toBeVisible();
    }
    async searchEvent(eventName:string){
        await this.searchInput.fill(eventName);
        await this.searchInput.press('Enter');

    }
    async ensureEventCardInSearchVisible(eventName:string){
        await expect(this.eventCardInSearchTitle).toContainText(eventName);

    }
    async EnsureEmtpyStates(){
        await expect(this.noResultsMessage).toBeVisible();
    }
    async chooseCategory(){
        await this.selectCategory.getByRole('combobox').first()
        await this.eventCard.waitFor({ state: 'visible' }); 
    }

}