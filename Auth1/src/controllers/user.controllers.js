import { userRegisterValidationRules } from "../middleware/user.middleware.js";
import { createUser } from "../services/user.service.js";

export const userRegister = [
  userRegisterValidationRules,
  async (req, res) => {
    try {
      const user = await createUser(req.body);
      const token = user.generateToken();
      res.status(201).json(token, user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
];
