import {
    APIRequestContext,
    APIResponse,
    request
} from '@playwright/test';


import { ENV } from './environment';

import { Logger } from './Logger';




export class ApiClient {



    private api!: APIRequestContext;





    async initialize(){


        this.api =
            await request.newContext({


                baseURL:
                    ENV.apiUrl,


                extraHTTPHeaders:{


                    'Content-Type':
                        'application/json'


                }


            });


    }








    private async logResponse(
        response: APIResponse
    ){


        let body;


        try {


            body =
                await response.json();


        } catch {


            body =
                undefined;


        }



        Logger.response(

            response.status(),

            body

        );


    }









    async get(
        endpoint:string
    ): Promise<APIResponse>{



        Logger.request(
            'GET',
            endpoint
        );



        const response =
            await this.api.get(
                endpoint
            );



        await this.logResponse(
            response
        );



        return response;


    }









    async post(
        endpoint:string,
        body:object
    ): Promise<APIResponse>{



        Logger.request(

            'POST',

            endpoint,

            body

        );



        const response =
            await this.api.post(

                endpoint,

                {
                    data:body
                }

            );



        await this.logResponse(
            response
        );



        return response;


    }









    async put(
        endpoint:string,
        body:object
    ): Promise<APIResponse>{



        Logger.request(

            'PUT',

            endpoint,

            body

        );



        const response =
            await this.api.put(

                endpoint,

                {
                    data:body
                }

            );



        await this.logResponse(
            response
        );



        return response;


    }









    async delete(
        endpoint:string
    ): Promise<APIResponse>{



        Logger.request(

            'DELETE',

            endpoint

        );



        const response =
            await this.api.delete(

                endpoint

            );



        await this.logResponse(
            response
        );



        return response;


    }









    async setToken(
        token:string
    ){



        await this.api.dispose();



        this.api =
            await request.newContext({



                baseURL:
                    ENV.apiUrl,



                extraHTTPHeaders:{



                    'Content-Type':
                        'application/json',



                    'Authorization':
                        `Bearer ${token}`



                }


            });


    }








    async dispose(){


        await this.api.dispose();


    }



}