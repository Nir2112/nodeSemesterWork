import winston from "winston";
import {mode} from "../config/index.js"

const cLevels = {
    levels:{
        error:0,
        warn:1,
        info:2,
        http:3,
        debug:4,
    },
    colors:{
        error:"red",
        warn:"yellow",
        info:"green",
        http:"magenta",
        debug:"blue",
    }
};

winston.addColors(cLevels.colors);

const createLogger = ()=> {
    return winston.createLogger({
        levels:cLevels.levels,
        format:winston.format.combine(
            winston.format.timestamp({format:'DD-MM-YYYY HH:mm:ss'}),
            winston.format.colorize({all:true}),
            winston.format.printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`)
        ),
        transports:[
            new winston.transports.Console(
                mode === 'development'
                ?{level:'debug'}:{level:'info'}
            ),
            new winston.transports.File({filename:'logs/error.log',level:'error'}),
            new winston.transports.File({filename:'logs/conbine.log'})
        ]
    })
};

const baseLogger = createLogger();

export const defaultLogger = (text) => {
    return{
        error:(message) => baseLogger.error(`${text}: ${message}`),
        warn:(message) => baseLogger.warn(`${text}: ${message}`),
        info: (message) => baseLogger.info(`${text}: ${message}`),
        http:(message) => baseLogger.http(`${text}: ${message}`),
        debug:(message) => baseLogger.debug(`${text}: ${message}`),
    }
};

