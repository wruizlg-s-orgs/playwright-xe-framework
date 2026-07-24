import {
    LOGGER_CONFIG,
    LogLevel
} from './logger.config';



export class Logger {



    private static enabled(
        level: LogLevel
    ): boolean {

        return LOGGER_CONFIG.level >= level;

    }





    static info(
        message: string
    ) {


        if (
            !this.enabled(LogLevel.INFO)
        ) {

            return;

        }


        console.log(
            `[INFO] ${message}`
        );


    }







    static error(
        message: string,
        error?: unknown
    ) {


        if (
            !this.enabled(LogLevel.ERROR)
        ) {

            return;

        }


        console.error(
            `[ERROR] ${message}`
        );


        if (error) {

            console.error(
                error
            );

        }


    }







    static request(
        method: string,
        endpoint: string,
        body?: unknown
    ) {


        if (
            !this.enabled(LogLevel.INFO)
        ) {

            return;

        }



        console.log(
            `[REQUEST] ${method} ${endpoint}`
        );



        if (
            body &&
            this.enabled(LogLevel.DEBUG)
        ) {


            console.log(
                'BODY:'
            );


            console.log(
                JSON.stringify(
                    body,
                    null,
                    2
                )
            );


        }


    }









    static response(
        status: number,
        body?: unknown
    ) {


        if (
            !this.enabled(LogLevel.INFO)
        ) {

            return;

        }



        console.log(
            `[RESPONSE] STATUS: ${status}`
        );



        if (
            body &&
            this.enabled(LogLevel.DEBUG)
        ) {


            console.log(
                'BODY:'
            );


            console.log(
                JSON.stringify(
                    body,
                    null,
                    2
                )
            );


        }


    }



}