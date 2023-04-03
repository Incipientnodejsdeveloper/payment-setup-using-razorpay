import { paymentController } from "./controller.js";
import { Router } from "express";
const router = Router();

router.route('/order').post(paymentController.order);

router.route('/checkout').post(paymentController.checkout);

export default router;
