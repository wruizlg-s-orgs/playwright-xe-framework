import { ApiClient } from '../helpers/ApiClient';
import { ENDPOINTS } from '../data/endpoints';

import { CreateUserRequest } from '../models/CreateUserRequest';
import { UpdateUserRequest } from '../models/UpdateUserRequest';


export class UserService {


    constructor(
        private api: ApiClient
    ) {}



    async create(
        user: CreateUserRequest
    ) {


        return await this.api.post(

            ENDPOINTS.USERS,

            user

        );

    }



    async getById(
        id:number
    ) {


        return await this.api.get(

            ENDPOINTS.USER_BY_ID(id)

        );

    }



    async update(
        id:number,
        user:UpdateUserRequest
    ) {


        return await this.api.put(

            ENDPOINTS.USER_BY_ID(id),

            user

        );

    }



    async delete(
        id:number
    ) {


        return await this.api.delete(

            ENDPOINTS.USER_BY_ID(id)

        );

    }


}