import { UpdateUserRequest } from '../../models/UpdateUserRequest';


export class UpdateUserFactory {


    static random(): UpdateUserRequest {


        const id = Date.now();


        return {

            name:`Updated_User_${id}`,

            email:`updated_${id}@test.com`

        };

    }


}