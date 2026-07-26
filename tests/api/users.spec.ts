import { test, expect } from '../../fixtures/api.fixture';
import { ENDPOINTS } from '../../data/endpoints';
import { User } from '../../models/User';

test.describe('User Management API Tests', () => {
    test('@regression Should retrieve users successfully', async ({ api }) => {
        const response = await api.get(ENDPOINTS.USERS);

        expect(response.status()).toBe(200);

        const body: User[] = await response.json();

        expect(body.length).toBeGreaterThan(0);

        expect(body[0].id).toBeDefined();

        expect(body[0].email).toBeDefined();
    });
});
