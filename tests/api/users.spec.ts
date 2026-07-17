import { test, expect } from '../../fixtures/api.fixture';
import { ENDPOINTS } from '../../data/endpoints';


test.describe('User Management API Tests', () => {


    test('Should retrieve users successfully', async ({ api }) => {


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