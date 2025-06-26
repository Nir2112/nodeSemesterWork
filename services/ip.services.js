import { ipDal } from "../dal/ip.dal.js"
import { defaultLogger } from "../utils/logger.js";

const logger = defaultLogger(' IP.SERVICES.JS ')

export const ipService = {
    getIpLocation: async (ip) => {
        try {
            logger.info(`Fetching location for: ${ip}.`);
            const ipData = await ipDal.getIpLocation(ip);
            const result = await ipData.json();

            return {
                message: `Location for ${ip} fetched successfuly`,
                data: {
                    ip: result.ip,
                    type: result.type,
                    continent_name: result.continent_name,
                    country_name: result.country_name,
                    city: result.city,
                    latitude: result.latitude, 
                    longitude:result.longitude
                }
            };
        } catch (error) {
            logger.error(error)
            throw error
        };
    }
};