export enum LogLevel {

    OFF = 0,

    ERROR = 1,

    INFO = 2,

    DEBUG = 3

}



export const LOGGER_CONFIG = {


    level:
        process.env.LOGGER_LEVEL
            ? Number(process.env.LOGGER_LEVEL)
            : LogLevel.INFO,


};