import { test, expect } from '../../../fixtures/api.fixture';

import { User } from '../../../models/User';

import { UserService } from '../../../services/UserService';
import { TestDataBuilder } from '../../../helpers/TestDataBuilder';



test.describe('Users CRUD API', () => {


    let userService: UserService;



    test.beforeEach(async ({ api }) => {


        userService =
            new UserService(api);


    });




    test('Should create user successfully', async () => {


        const user =
            await TestDataBuilder.createUser(
                userService
            );



        expect(user.id)
            .toBeDefined();



        expect(user.name)
            .toBeDefined();



        expect(user.email)
            .toBeDefined();


    });





    test('Should retrieve user by id successfully', async () => {


        const createdUser =
            await TestDataBuilder.createUser(
                userService
            );



        const response =
            await userService.getById(
                createdUser.id
            );



        expect(response.status())
            .toBe(200);



        const body: User =
            await response.json();



        expect(body.id)
            .toBe(createdUser.id);



        expect(body.name)
            .toBe(createdUser.name);



        expect(body.email)
            .toBe(createdUser.email);


    });





    test('Should update user successfully', async () => {


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



        expect(response.status())
            .toBe(200);



        const body: User =
            await response.json();



        expect(body.id)
            .toBe(createdUser.id);



        expect(body.name)
            .toBe(updateData.name);



        expect(body.email)
            .toBe(updateData.email);


    });





    test('Should delete user successfully', async () => {


        const createdUser =
            await TestDataBuilder.createUser(
                userService
            );



        const response =
            await userService.delete(
                createdUser.id
            );



        expect(response.status())
            .toBe(204);


    });


});