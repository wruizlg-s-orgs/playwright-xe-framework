import {
    APIRequestContext,
    APIResponse,
    request
} from '@playwright/test';

export class ApiClient {

    private api!: APIRequestContext;

    async initialize() {

        this.api = await request.newContext({

            baseURL: 'https://reqres.in',

            extraHTTPHeaders: {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            }

        });

    }

    async get(endpoint: string): Promise<APIResponse> {

        return await this.api.get(endpoint);

    }

    async post(endpoint: string, body: object): Promise<APIResponse> {

        return await this.api.post(endpoint, {

            data: body

        });

    }

    async put(endpoint: string, body: object): Promise<APIResponse> {

        return await this.api.put(endpoint, {

            data: body

        });

    }

    async delete(endpoint: string): Promise<APIResponse> {

        return await this.api.delete(endpoint);

    }

}