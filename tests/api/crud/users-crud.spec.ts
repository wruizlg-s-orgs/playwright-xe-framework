import { test, expect } from '../../../fixtures/api.fixture';

import { CreateUserFactory } from '../../../data/factories/CreateUserFactory';
import { UpdateUserFactory } from '../../../data/factories/UpdateUserFactory';

import { CreateUserRequest } from '../../../models/CreateUserRequest';
import { UpdateUserRequest } from '../../../models/UpdateUserRequest';
import { User } from '../../../models/User';

import { UserService } from '../../../services/UserService';



test.describe('Users CRUD API', () => {


    let userService: UserService;



    test.beforeEach(async ({ api }) => {


        userService =
            new UserService(api);


    });



    test('Should create user successfully', async () => {


        const user: CreateUserRequest =
            CreateUserFactory.random();



        const response =
            await userService.create(user);



        expect(response.status())
            .toBe(201);



        const body: User =
            await response.json();



        expect(body.id)
            .toBeDefined();



        expect(body.name)
            .toBe(user.name);



        expect(body.email)
            .toBe(user.email);


    });




    test('Should retrieve user by id successfully', async () => {


        const user: CreateUserRequest =
            CreateUserFactory.random();



        const createResponse =
            await userService.create(user);



        expect(createResponse.status())
            .toBe(201);



        const createdUser: User =
            await createResponse.json();



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
            .toBe(user.name);



        expect(body.email)
            .toBe(user.email);


    });




    test('Should update user successfully', async () => {


        const user: CreateUserRequest =
            CreateUserFactory.random();



        const createResponse =
            await userService.create(user);



        const createdUser: User =
            await createResponse.json();



        const updateData: UpdateUserRequest =
            UpdateUserFactory.random();



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


        const user: CreateUserRequest =
            CreateUserFactory.random();



        const createResponse =
            await userService.create(user);



        const createdUser: User =
            await createResponse.json();



        const response =
            await userService.delete(
                createdUser.id
            );



        expect(response.status())
            .toBe(204);


    });



});