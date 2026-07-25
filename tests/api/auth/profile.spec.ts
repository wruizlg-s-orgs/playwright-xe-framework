import {
    test,
    expect
} from '../../../fixtures/auth.fixture';



import {
    ResponseAssertions
} from '../../../helpers/assertions/ResponseAssertions';



import {
    SchemaAssertions
} from '../../../helpers/assertions/SchemaAssertions';





const ProfileSchema = {


    type:'object',


    properties:{


        id:{

            type:'number'

        },


        username:{

            type:'string'

        },


        role:{

            type:'string'

        }


    },


    required:[

        'id',
        'username',
        'role'

    ]

};







test.describe(
    'Profile Authorization API',
    () => {





    test(
        'Should access profile with valid token',
        async ({
            authenticatedApi
        }) => {



            const response =
                await authenticatedApi.get(
                    '/profile'
                );



            await ResponseAssertions.expectStatus(
                response,
                200
            );



            const body =
                await response.json();



            SchemaAssertions.validate(
                body,
                ProfileSchema
            );



            expect(
                body.username
            )
            .toBe(
                'admin'
            );



        }

    );

    test(
        'Should reject profile access without token',
        async ({ api }) => {


            const response =
                await api.get(
                    '/profile'
                );



            await ResponseAssertions.expectStatus(
                response,
                401
            );



            const body =
                await response.json();



            SchemaAssertions.validate(
                body,
                {

                    type:'object',

                    properties:{

                        message:{
                            type:'string'
                        }

                    },


                    required:[

                        'message'

                    ]

                }

            );


        }
    );


});