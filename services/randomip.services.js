import { ipDal } from "../dal/ip.dal.js"
import { defaultLogger } from "../utils/logger.js";

const logger = defaultLogger(' RANDOMIP.SERVICES.JS ')

export const ipService = {
    getRandomIp: async () => {
        try {
            logger.info(`Fetching random ip adress.`);
            const randomIpData = await ipDal.getRandomIp( Math.floor(Math.random() * 40));
            const result = await randomIpData;

            return {
                message: `Random ip adress fetched successfuly`,
                yourRandomIP: result,
            };
        } catch (error) {
            logger.error(error)
            throw error
        };
    },
};