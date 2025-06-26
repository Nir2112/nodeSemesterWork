import { ipApiKey } from '../config/index.js'
import { defaultLogger } from "../utils/logger.js";

const logger = defaultLogger(' IP.DAL.JS ')

export const ipDal = {
    getIpLocation: async (ip) => {
        try {
            logger.info(`Data received successfully.`)
            return await fetch(`https://api.ipstack.com/${ip}?access_key=${ipApiKey}&output=json`);
        } catch (error) {
            logger.error(error)
            throw error
        }
    }
};