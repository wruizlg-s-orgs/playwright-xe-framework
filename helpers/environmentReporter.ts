import { ENV } from './environment';


export function printEnvironment() {


    if (process.env.ENV_PRINTED) {

        return;

    }


    process.env.ENV_PRINTED = 'true';



    console.log(`

=================================
 Environment
 NAME: ${ENV.environment.toUpperCase()}
 API URL: ${ENV.apiUrl}
=================================

`);

}