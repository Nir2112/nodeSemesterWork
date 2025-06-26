import { ipApiKey } from '../config/index.js'
import { defaultLogger } from "../utils/logger.js"
import { ipDataBase } from '../models/randomip.models.js'

const logger = defaultLogger(' IP.DAL.JS ')

export const ipDal = {
    getIpLocation: async (ip) => {
        try {
            logger.info(`Data for ip location received successfully.`)
            return await fetch(`https://api.ipstack.com/${ip}?access_key=${ipApiKey}&output=json`);
        } catch (error) {
            logger.error(error)
            throw error
        }
    },
    getMyIp: async () => {
        try {
            logger.info(`Data for ip adress received successfully.`)
            return await fetch(`https://api64.ipify.org?format=json`);
        } catch (error) {
            logger.error(error)
            throw error
        }
    },
    getRandomIp: async (rnd) => {
        try {
            logger.info(`Data for random ip adress received successfully.`)
            return await ipDataBase[rnd];
        } catch (error) {
            logger.error(error)
            throw error
        }
    }
};