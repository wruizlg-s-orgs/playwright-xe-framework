import { APIRequestContext, APIResponse, request } from '@playwright/test';

import { ENV } from './config';

import { Logger } from './Logger';

export class ApiClient {
    private api!: APIRequestContext;

    async initialize() {
        this.api = await request.newContext({
            baseURL: ENV.apiUrl,

            extraHTTPHeaders: {
                'Content-Type': 'application/json',
            },
        });
    }

    private async executeRequest(
        method: string,

        endpoint: string,

        requestFunction: () => Promise<APIResponse>,

        body?: unknown
    ): Promise<APIResponse> {
        Logger.request(
            method,

            endpoint,

            body
        );

        const startTime = Date.now();

        try {
            const response = await requestFunction();

            const duration = Date.now() - startTime;

            await this.logResponse(
                method,

                endpoint,

                response,

                duration
            );

            return response;
        } catch (error) {
            // remover completamente
            //            const duration =
            //                Date.now() - startTime;

            Logger.error(
                `Request failed: ${method} ${endpoint}`,

                error
            );

            throw error;
        }
    }

    private async logResponse(
        method: string,

        endpoint: string,

        response: APIResponse,

        duration: number
    ) {
        let body;

        try {
            body = await response.json();
        } catch {
            body = undefined;
        }

        if (response.status() >= 400) {
            Logger.httpError(
                method,

                endpoint,

                response.status(),

                duration,

                body
            );

            return;
        }

        Logger.response(
            response.status(),

            duration,

            body
        );
    }

    async get(endpoint: string): Promise<APIResponse> {
        return this.executeRequest(
            'GET',

            endpoint,

            () => this.api.get(endpoint)
        );
    }

    async post(
        endpoint: string,

        body: object
    ): Promise<APIResponse> {
        return this.executeRequest(
            'POST',

            endpoint,

            () =>
                this.api.post(
                    endpoint,

                    {
                        data: body,
                    }
                ),

            body
        );
    }

    async put(
        endpoint: string,

        body: object
    ): Promise<APIResponse> {
        return this.executeRequest(
            'PUT',

            endpoint,

            () =>
                this.api.put(
                    endpoint,

                    {
                        data: body,
                    }
                ),

            body
        );
    }

    async delete(endpoint: string): Promise<APIResponse> {
        return this.executeRequest(
            'DELETE',

            endpoint,

            () => this.api.delete(endpoint)
        );
    }

    async setToken(token: string) {
        await this.api.dispose();

        this.api = await request.newContext({
            baseURL: ENV.apiUrl,

            extraHTTPHeaders: {
                'Content-Type': 'application/json',

                Authorization: `Bearer ${token}`,
            },
        });
    }

    async dispose() {
        await this.api.dispose();
    }
}
