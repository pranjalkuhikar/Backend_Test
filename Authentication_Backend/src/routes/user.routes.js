import express from "express";
import { register, login, profile } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", profile);

export default router;
