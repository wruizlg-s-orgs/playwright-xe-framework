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


    async get(endpoint:string){

        return await this.api.get(endpoint);

    }


    async dispose(){

        await this.api.dispose();

    }


}