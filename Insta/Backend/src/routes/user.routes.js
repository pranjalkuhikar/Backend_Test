import { Router } from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";

const router = Router();

router.post("/create", createUser);
router.get("/allUser", getUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
