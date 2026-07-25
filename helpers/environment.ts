import dotenv from 'dotenv';
import path from 'path';



const environment =
    (process.env.ENVIRONMENT ?? 'local')
        .trim()
        .toLowerCase();



const allowedEnvironments = [
    'local',
    'qa',
    'prod'
];



if (
    !allowedEnvironments.includes(environment)
) {

    throw new Error(`

    🚨 Environment validation failed.

    Current environment:
    ${environment}

    Allowed environments:
    ${allowedEnvironments.join(', ')}

    `);

}



const envFile =
    `.env.${environment}`;



dotenv.config({

    path: path.resolve(
        process.cwd(),
        envFile
    )

});





export const ENV = {


    environment,



    apiUrl:
        process.env.API_URL ??
        'http://localhost:4000',



    auth: {


        username:
            process.env.AUTH_USERNAME ??
            'admin',



        password:
            process.env.AUTH_PASSWORD ??
            '123456'


    },



    loggerLevel:
        process.env.LOGGER_LEVEL ??
        'INFO'


};