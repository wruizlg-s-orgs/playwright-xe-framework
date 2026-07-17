import { test as base } from './api.fixture';
import { ApiClient } from '../helpers/ApiClient';


type AuthFixtures = {

    authenticatedApi: ApiClient;

};


export const test = base.extend<AuthFixtures>({

    authenticatedApi: async ({ api }, use) => {


        const response = await api.post(
            '/login',
            {
                username:'admin',
                password:'123456'
            }
        );


        const body = await response.json();


        await api.setToken(body.token);


        await use(api);


    }

});


export { expect } from '@playwright/test';