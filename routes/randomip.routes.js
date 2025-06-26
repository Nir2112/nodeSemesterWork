import { Router } from "express";
import {getRandomIp} from '../controller/randomip.controller.js'

const router = Router();

router.get('/ip',getRandomIp)

export default router