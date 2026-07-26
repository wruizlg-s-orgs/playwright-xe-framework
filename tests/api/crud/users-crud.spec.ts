import { test } from '../../../fixtures/api.fixture';

import { User } from '../../../models/User';

import { UserService } from '../../../services/UserService';

import { TestDataBuilder } from '../../../helpers/TestDataBuilder';

import { ResponseAssertions } from '../../../helpers/assertions/ResponseAssertions';

import { UserAssertions } from '../../../helpers/assertions/UserAssertions';

import { UserSchema } from '../../../schemas/UserSchema';

import { SchemaAssertions } from '../../../helpers/assertions/SchemaAssertions';

test.describe('@regression Users CRUD API', () => {
    let userService: UserService;

    test.beforeEach(async ({ api }) => {
        userService = new UserService(api);
    });

    test('@regression Should create user successfully', async () => {
        const user = await TestDataBuilder.createUser(userService);

        SchemaAssertions.validate(user, UserSchema);

        UserAssertions.expectUserFields(user);
    });

    test('@regression Should retrieve user by id successfully', async () => {
        const createdUser = await TestDataBuilder.createUser(userService);

        const response = await userService.getById(createdUser.id);

        await ResponseAssertions.expectStatus(response, 200);

        const body: User = await response.json();

        SchemaAssertions.validate(body, UserSchema);

        UserAssertions.expectUser(body, createdUser);
    });

    test('@regression Should update user successfully', async () => {
        const createdUser = await TestDataBuilder.createUser(userService);

        const updateData = TestDataBuilder.updateUser();

        const response = await userService.update(
            createdUser.id,

            updateData
        );

        await ResponseAssertions.expectStatus(response, 200);

        const body: User = await response.json();

        SchemaAssertions.validate(body, UserSchema);

        UserAssertions.expectUserProperties(body, {
            id: createdUser.id,
            name: updateData.name,
            email: updateData.email,
        });
    });

    test('@regression Should delete user successfully', async () => {
        const createdUser = await TestDataBuilder.createUser(userService);

        const response = await userService.delete(createdUser.id);

        await ResponseAssertions.expectStatus(response, 204);
    });
});
