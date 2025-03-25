import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username: username,
    email: email,
    password: hashPassword,
  });

  const token = jwt.sign({ user: user._id }, config.TOKEN_SECRET);

  res.send("Welcome to " + user + token);
};
