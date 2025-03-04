import { userRegisterValidationRules } from "../middleware/user.middleware.js";
import { createUser } from "../services/user.service.js";

export const userRegister = [
  userRegisterValidationRules,
  async (req, res) => {
   res.send("Hello World")
  },
];
