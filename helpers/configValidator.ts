import { ENV } from './environment';



export function validateConfig() {


    const errors:string[] = [];


    const allowedEnvironments = [
        'local',
        'qa',
        'prod'
    ];



    if (
        !allowedEnvironments.includes(
            ENV.environment
        )
    ) {

        errors.push(
            `Invalid ENVIRONMENT: ${ENV.environment}. Allowed values: ${allowedEnvironments.join(', ')}`
        );

    }



    if(!ENV.apiUrl){

        errors.push(
            'API_URL is required'
        );

    }



    if(!ENV.auth.username){

        errors.push(
            'AUTH_USERNAME is required'
        );

    }



    if(!ENV.auth.password){

        errors.push(
            'AUTH_PASSWORD is required'
        );

    }



    if(errors.length > 0){


        throw new Error(

            [
                '🚨 Configuration validation failed',
                '',
                ...errors.map(
                    error => `- ${error}`
                )
            ]
            .join('\n')

        );


    }


}