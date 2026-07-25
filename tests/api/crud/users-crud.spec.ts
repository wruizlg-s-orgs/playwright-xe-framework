import {
    test,
    expect
} from '../../../fixtures/api.fixture';


import {
    User
} from '../../../models/User';


import {
    UserService
} from '../../../services/UserService';


import {
    TestDataBuilder
} from '../../../helpers/TestDataBuilder';


import {
    ResponseAssertions
} from '../../../helpers/assertions/ResponseAssertions';


import {
    UserAssertions
} from '../../../helpers/assertions/UserAssertions';




test.describe(
    'Users CRUD API',
    () => {



    let userService: UserService;





    test.beforeEach(
        async ({ api }) => {


            userService =
                new UserService(api);


        }
    );









    test(
        'Should create user successfully',
        async () => {



            const user =
                await TestDataBuilder.createUser(
                    userService
                );



            UserAssertions.expectUserFields(
                user
            );



        }
    );









    test(
        'Should retrieve user by id successfully',
        async () => {



            const createdUser =
                await TestDataBuilder.createUser(
                    userService
                );



            const response =
                await userService.getById(
                    createdUser.id
                );



            await ResponseAssertions.expectStatus(
                response,
                200
            );



            const body: User =
                await response.json();



            UserAssertions.expectUser(
                body,
                createdUser
            );



        }
    );









    test(
        'Should update user successfully',
        async () => {



            const createdUser =
                await TestDataBuilder.createUser(
                    userService
                );



            const updateData =
                TestDataBuilder.updateUser();




            const response =
                await userService.update(

                    createdUser.id,

                    updateData

                );



            await ResponseAssertions.expectStatus(
                response,
                200
            );



            const body: User =
                await response.json();




            UserAssertions.expectUserProperties(
                body,
                {
                    id: createdUser.id,
                    name: updateData.name,
                    email: updateData.email
                }
            );


        }
    );









    test(
        'Should delete user successfully',
        async () => {



            const createdUser =
                await TestDataBuilder.createUser(
                    userService
                );



            const response =
                await userService.delete(
                    createdUser.id
                );



            await ResponseAssertions.expectStatus(
                response,
                204
            );



        }
    );



});