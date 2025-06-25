import {ipService} from '../services/ip.services.js'



export const getIpLocation = async (req,res) => {
    try{
        const ip = req.params.ip;
        const result = await ipService.getIpLocation(ip)
        res.status(200).json(result);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}