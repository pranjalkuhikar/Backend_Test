import { Router } from "express";

const router = Router();

router.get("/create", (req, res) => {
  res.send("Create a new product");
});

export default router;
