import { test as base } from '@playwright/test';
import { ApiClient } from '../helpers/ApiClient';


type ApiFixtures = {

    api: ApiClient;

};


export const test = base.extend<ApiFixtures>({

    api: async ({}, use) => {


        const apiClient = new ApiClient();


        await apiClient.initialize();


        await use(apiClient);


        await apiClient.dispose();


    }

});


export { expect } from '@playwright/test';