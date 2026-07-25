import {
    test,
    expect
} from '../../../fixtures/api.fixture';


import {
    ResponseAssertions
} from '../../../helpers/assertions/ResponseAssertions';


import {
    SchemaAssertions
} from '../../../helpers/assertions/SchemaAssertions';

import {
    ErrorSchema
} from '../../../schemas/ErrorSchema';




test.describe(
    'Users API Negative Tests',
    () => {



    test(
        '@regression Should return 404 when user does not exist',
        async ({ api }) => {



            const response =
                await api.get(
                    '/api/users/999999'
                );



            await ResponseAssertions.expectStatus(
                response,
                404
            );



            const body =
                await response.json();



            SchemaAssertions.validate(
                body,
                ErrorSchema
            );



        }
    );



});