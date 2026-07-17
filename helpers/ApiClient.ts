import {
    APIRequestContext,
    APIResponse,
    request
} from '@playwright/test';

import { ENV } from './environment';


export class ApiClient {


    private api!: APIRequestContext;


    async initialize(){

        this.api = await request.newContext({

            baseURL: ENV.apiUrl,

            extraHTTPHeaders:{
                'Content-Type':'application/json'
            }

        });

    }


    async get(endpoint:string): Promise<APIResponse>{

        return await this.api.get(endpoint);

    }


    async post(endpoint:string, body:object): Promise<APIResponse>{

        return await this.api.post(endpoint, {

            data: body

        });

    }


    async put(endpoint:string, body:object): Promise<APIResponse>{

        return await this.api.put(endpoint, {

            data: body

        });

    }


    async delete(endpoint:string): Promise<APIResponse>{

        return await this.api.delete(endpoint);

    }


    async setToken(token:string){

        await this.api.dispose();


        this.api = await request.newContext({

            baseURL: ENV.apiUrl,

            extraHTTPHeaders: {

                'Content-Type':'application/json',

                'Authorization': `Bearer ${token}`

            }

        });

    }


    async dispose(){

        await this.api.dispose();

    }

}