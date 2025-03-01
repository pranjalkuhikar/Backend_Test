import { validationResult } from "express-validator";
export const userController = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send("Hello Pranjal");
};
