import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { UserFactory } from '../../data/factories/UserFactory';

test.describe('Login functionality', () => {
    test('@regression User can login successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();

        const user = UserFactory.admin();

        await loginPage.login(
            user.username,

            user.password
        );

        await expect(page).toHaveURL(/dashboard/);
    });

    test('User cannot login with invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();

        page.once('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');

            expect(dialog.message()).toBe('Invalid credentials');

            await dialog.accept();
        });

        const user = UserFactory.invalid();

        await loginPage.login(
            user.username,

            user.password
        );
    });
});
