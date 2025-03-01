import { Router } from "express";
import {
  userRegisterController,
  userLoginController,
} from "../controllers/user.controller.js";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../middlewares/user.middleware.js";

const router = Router();

router.post("/register", validateRegisterUser, userRegisterController);
router.post("/login", validateLoginUser, userLoginController);

export default router;
