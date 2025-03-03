import { createUser, loginUser } from "../services/user.service.js";
import {
  validateRegisterUser,
  validateLoginUser,
} from "../middleware/user.middleware.js";

export const userRegister = [
  validateRegisterUser,
  async (req, res) => {
    try {
      const user = await createUser(req.body);
      const token = user.generateToken();
      res.status(201).json({ user, token });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
];

export const userLogin = [
  validateLoginUser,
  async (req, res) => {
    try {
      const user = await loginUser(req.body);
      const token = user.generateToken();
      res.status(201).json({ user, token });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
];
