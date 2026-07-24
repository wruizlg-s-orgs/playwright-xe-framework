import { test as base, expect } from './api.fixture';
import { ApiClient } from '../helpers/ApiClient';
import { UserFactory } from '../data/factories/UserFactory';


type AuthFixtures = {

    authenticatedApi: ApiClient;

};


export const test = base.extend<AuthFixtures>({

    authenticatedApi: async ({ api }, use) => {


        const user = UserFactory.admin();


        const response = await api.post(

            '/login',

            user

        );


        expect(response.status())
            .toBe(200);


        const body: AuthResponse = await response.json();


        expect(body.token)
            .toBeDefined();


        await api.setToken(body.token);


        await use(api);

        await api.dispose();


    }

});


export { expect };