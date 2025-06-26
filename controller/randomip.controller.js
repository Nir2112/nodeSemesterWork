import {ipService} from '../services/randomip.services.js'

export const getRandomIp = async (req,res) => {
    try{
        const result = await ipService.getRandomIp()
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({message:error.message});
    }
};