import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login functionality', () => {


    test('User can login successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);


        await loginPage.goto();


        await loginPage.login(
            'admin',
            '123456'
        );


        await expect(page)
            .toHaveURL(/dashboard/);

    });



    test('User cannot login with invalid password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();


        page.once('dialog', async dialog => {

            expect(dialog.type())
                .toBe('alert');

            expect(dialog.message())
                .toBe('Invalid credentials');

            await dialog.accept();

        });


        await loginPage.login(
            'admin',
            'invalidpassword'
        );

     });



});