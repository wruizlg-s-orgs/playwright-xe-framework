import {
    test
} from '../../../fixtures/api.fixture';


import {
    ResponseAssertions
} from '../../../helpers/assertions/ResponseAssertions';


import {
    SchemaAssertions
} from '../../../helpers/assertions/SchemaAssertions';



const LoginSchema = {


    type:'object',


    properties:{


        token:{
            type:'string'
        }


    },


    required:[

        'token'

    ]

};




test.describe(
    'Authentication API',
    () => {



    test(
        '@smoke Should login successfully with valid credentials',
        async ({ api }) => {



            const response =
                await api.post(

                    '/login',

                    {

                        username:'admin',

                        password:'123456'

                    }

                );



            await ResponseAssertions.expectStatus(
                response,
                200
            );



            const body =
                await response.json();



            SchemaAssertions.validate(
                body,
                LoginSchema
            );



        }

    );

    test(
        '@regression Should reject login with invalid credentials',
        async ({ api }) => {


            const response =
                await api.post(

                    '/login',

                    {

                        username:'admin',

                        password:'wrong-password'

                    }

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