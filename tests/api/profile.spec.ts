import { test, expect } from '../../fixtures/auth.fixture';


test('Should retrieve user profile',
async ({ authenticatedApi }) => {


    const response =
        await authenticatedApi.get('/profile');


    expect(response.status())
        .toBe(200);


    const body =
        await response.json();


    expect(body.username)
        .toBe('admin');


});