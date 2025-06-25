import { Router } from "express";
import ipRoutes from './ip.routes.js'

const router = Router();

router.use('/ip',ipRoutes)

export default router