import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { validateUser } from "../middlewares/user.middleware.js";

const router = Router();

router.post("/register", validateUser, userController);

export default router;
