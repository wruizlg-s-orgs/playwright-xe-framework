import { CreateUserRequest } from '../../models/CreateUserRequest';

export class CreateUserFactory {
    static random(): CreateUserRequest {
        const id = Date.now();

        return {
            name: `User_${id}`,

            email: `user_${id}@test.com`,
        };
    }
}
