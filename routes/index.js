import { Router } from "express";
import ipRoutes from './ip.routes.js'; 
import RandomIp from './randomip.routes.js';

const router = Router();

router.use('/ip',ipRoutes)
router.use('/random',RandomIp)

export default router