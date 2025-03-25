import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import config from "../config/config.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const alreadyUser = await User.find({ email: email });
    if (alreadyUser) {
      return res.status(400).send("User already exists");
    }

    const user = await User.create({
      username: username,
      email: email,
      password: hashPassword,
    });

    const token = jwt.sign({ user: user._id }, config.TOKEN_SECRET);

    res.status(201).send({ message: "User registered successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
