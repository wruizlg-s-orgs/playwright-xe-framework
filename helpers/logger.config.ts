export enum LogLevel {

    OFF = 0,

    ERROR = 1,

    INFO = 2,

    DEBUG = 3

}



function getLogLevel(): LogLevel {


    const envLevel =
        process.env.LOGGER_LEVEL?.toUpperCase();



    switch (envLevel) {


        case 'ERROR':
            return LogLevel.ERROR;


        case 'INFO':
            return LogLevel.INFO;


        case 'DEBUG':
            return LogLevel.DEBUG;


        case 'OFF':
            return LogLevel.OFF;


        default:
            return LogLevel.INFO;

    }

}



export const LOGGER_CONFIG = {


    level: getLogLevel()


};