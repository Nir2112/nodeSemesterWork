import { ipApiKey } from '../config/index.js'
import { defaultLogger } from "../utils/logger.js";

const logger = defaultLogger(' IP.SERVICES.JS ')

export const ipService = {
    getIpLocation: async (ip) => {

        try {
            const ipData = await fetch(`https://api.ipstack.com/${ip}?access_key=${ipApiKey}&output=json`)
            const result = await ipData.json();

            const filterData = {
                ip: result.ip,
                type: result.type,
                continent_name: result.continent_name,
                country_name: result.country_name,
                city: result.city
            };

            logger.info(`Data received successfully.`)

            return {
                message: `Location for ${ip} fetched successfuly`,
                data: filterData
            }

        } catch (error) {
            throw error
        }

    }
}