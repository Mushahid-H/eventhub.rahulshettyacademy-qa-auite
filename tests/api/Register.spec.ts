import {test,expect} from '@playwright/test'
import { RegisterAPI } from '../../src/api/RegisterAPI'

test.describe('Register API',()=>{
    test('should register a new user successfully',async({request})=>{
        const registerAPI=new RegisterAPI(request);
        const response = await registerAPI.registerUser('test@example123.com','Password!23');
        expect(response.status()).toBe(201);
        const data =await response.json();
        expect(data.success).toBe(true);
        expect(data).toHaveProperty('token')
        expect(data.user).toHaveProperty('id');

    });

})