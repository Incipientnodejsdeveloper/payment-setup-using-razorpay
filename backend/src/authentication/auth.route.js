import express from "express";
const router = express.Router();
import { authCheck } from "../jwt/jwt-auth.js";

import {authController as auth} from "./auth.controller.js";

router.route('/register')
.post(auth.register)


router.route('/login')
.post(auth.login)

router.route('/logout')
.post(authCheck,auth.logout)

router.route('/test')
.post(auth.test)

export default router;