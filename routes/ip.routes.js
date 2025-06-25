import { Router } from "express";
import {getIpLocation} from '../controller/ip.controller.js'

const router = Router();

router.get('/:ip',getIpLocation)


export default router