import { CreateUserFactory } from '../data/factories/CreateUserFactory';
import { UpdateUserFactory } from '../data/factories/UpdateUserFactory';

import { UserService } from '../services/UserService';

import { User } from '../models/User';
import { UpdateUserRequest } from '../models/UpdateUserRequest';

export class TestDataBuilder {

    static async createUser(
        userService: UserService
    ): Promise<User> {

        const user =
            CreateUserFactory.random();

        const response =
            await userService.create(user);

        return await response.json();

    }

    static updateUser(): UpdateUserRequest {

        return UpdateUserFactory.random();

    }

}