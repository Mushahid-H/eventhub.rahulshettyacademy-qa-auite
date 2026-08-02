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
    test('should fail to login a user with incorrect credentials',async({request})=>{
        const loginAPI=new LoginAPI(request);
        const response = await loginAPI.loginUser('test@example1234.com','WrongPassword!23');
        expect(response.status()).toBe(400);
        const data =await response.json();
        expect(data.success).toBe(false);
        expect(data.error).toBe('Invalid email or password');
    });

});