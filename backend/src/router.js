import { Router } from "express";
import Payments from "./payments/route.js"
const router = Router();

router.use('/payment',Payments);

export default router;

