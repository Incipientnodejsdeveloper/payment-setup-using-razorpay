import { Router } from "express";
import PaymentsRoute from "./payments/route.js";
import AuthRoute from "./authentication/auth.route.js"
const router = Router();

router.use('/auth',AuthRoute);
router.use('/payment',PaymentsRoute);

export default router;

