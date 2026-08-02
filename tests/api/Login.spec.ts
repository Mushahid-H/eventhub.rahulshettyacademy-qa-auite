import {test,expect} from '@playwright/test'
import { LoginAPI } from '../../src/api/LoginAPI'

test.describe('Login API',()=>{
    test('should login a user successfully',async({request})=>{
        const loginAPI=new LoginAPI(request);
        const response = await loginAPI.loginUser('test@example1234.com','Password!23');
        expect(response.status()).toBe(200);
        const data =await response.json();
        expect(data.success).toBe(true);
        expect(data).toHaveProperty('token');
    });
});