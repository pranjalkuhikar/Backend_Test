import { Router } from "express";
import { userRegister } from "../controllers/user.controllers.js";

const router = Router();

router.get("/register", userRegister);

export default router;
