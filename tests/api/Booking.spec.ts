import {test,expect} from '@playwright/test'
import { BookingAPI } from '../../src/api/BookingAPI'   

test.describe('should create booking successfully',()=>{
    test('should create booking with valid data',async({request})=>{
        const bookingApi = new BookingAPI(request);
        const response = await bookingApi.bookEvent('1','John Doe','john@example2.com','1234567890',1);
        expect(response.status()).toBe(201);
        const data = await response.json();
        expect(data.success).toBe(true);
        expect(data.data).toHaveProperty('id');
        expect(data.data).toHaveProperty('eventId');
        expect(data.data).toHaveProperty('customerName');
        expect(data.data).toHaveProperty('customerEmail');
        expect(data.data).toHaveProperty('customerPhone');
        expect(data.data).toHaveProperty('quantity');
    });
    test('should fail to create booking with missing data',async({request})=>{
        const bookingApi = new BookingAPI(request);
        const response = await bookingApi.createBookingWithMissingData('1','John Doe','john@example3.com','1234567890',1);
        expect(response.status()).toBe(400);
        const data = await response.json();
        expect(data.success).toBe(false);
        expect(data.error).toBe('Validation failed');
    });
})