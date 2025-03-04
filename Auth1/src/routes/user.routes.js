import { Router } from "express";
import { userRegister } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", userRegister);

export default router;
