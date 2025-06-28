import { Router } from "express";
import {getIpLocation} from '../controller/ip.controller.js';
import {getMyIp} from '../controller/ip.controller.js';

const router = Router();

router.get('/myip',getMyIp)
router.get('/:ip',getIpLocation)

export default router