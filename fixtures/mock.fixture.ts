import { test as base } from '@playwright/test';

type MockFixtures = {
    mockApi: {
        users(): Promise<void>;
    };
};

export const test = base.extend<MockFixtures>({
    mockApi: async ({ page }, use) => {
        await use({
            async users() {
                await page.route(
                    '**/api/users',

                    async (route) => {
                        await route.fulfill({
                            status: 200,

                            contentType: 'application/json',

                            body: JSON.stringify([
                                {
                                    id: 1,
                                    name: 'Mock User',
                                    email: 'mock@test.com',
                                },
                            ]),
                        });
                    }
                );
            },
        });
    },
});

export { expect } from '@playwright/test';
