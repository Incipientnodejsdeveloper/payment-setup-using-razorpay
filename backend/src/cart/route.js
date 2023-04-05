import { cartController } from "./controller.js";
import { Router } from "express";
const router = Router();

router.route('/add').post(cartController.createCart);

router.route('/').post(cartController.cartDetails);

export default router;