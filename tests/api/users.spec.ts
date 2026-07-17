import { test, expect } from '@playwright/test';

import { ApiClient } from '../../helpers/ApiClient';
import { ENDPOINTS } from '../../data/endpoints';


test.describe('Users API', () => {


    test('Should retrieve users successfully', async () => {


        const api = new ApiClient();


        await api.initialize();


        const response = await api.get(
            ENDPOINTS.USERS
        );


        expect(response.status())
            .toBe(200);


        const body = await response.json();


        expect(body.length)
            .toBeGreaterThan(0);


        expect(body[0])
            .toHaveProperty('id');


        expect(body[0])
            .toHaveProperty('email');


    });


});