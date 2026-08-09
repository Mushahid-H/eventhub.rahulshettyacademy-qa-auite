import {test,expect} from '@playwright/test'
import { EventsAPI } from '../../src/api/EventsAPI'

test.describe('Events API',()=>{
    test('should fetch all events',async ({request})=>{
        const eventsAPI=new EventsAPI(request);
        const response = await eventsAPI.getEvents('Festival','Delhi','Diwali',1,10);
        expect(response.status()).toBe(200);
        const data =await response.json();
        // console.log(data);
        expect(data.success).toBe(true);
        expect(data.data).toBeInstanceOf(Array);
        expect(data.data.length).toBeGreaterThan(0);
        expect(data.data[0]).toHaveProperty('id');
        expect(data.data[0]).toHaveProperty('title');
        expect(data.data[0]['title']).toContain('Diwali');
    })
})