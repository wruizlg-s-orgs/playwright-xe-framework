import { test, expect } from '@playwright/test';

import { ApiClient } from '../../helpers/ApiClient';

import { ENDPOINTS } from '../../data/endpoints';


test('Should retrieve users successfully', async () => {

    const api = new ApiClient();

    await api.initialize();

    const response = await api.get(
        ENDPOINTS.USERS + '?page=2'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.length).toBeGreaterThan(0);

});