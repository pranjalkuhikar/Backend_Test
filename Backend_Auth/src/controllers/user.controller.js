import { validationResult } from "express-validator";
import { createUser, loginUser } from "../services/user.service.js";

export const userRegisterController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { username, email, password } = req.body;
    const user = await createUser({ username, email, password });
    const token = user.generateToken();
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

export const userLoginController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const user = await loginUser({ email, password });
    const token = user.generateToken();
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message);
  }
};
