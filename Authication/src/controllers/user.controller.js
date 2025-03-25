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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({ user: user._id }, config.TOKEN_SECRET);

    res.status(200).send({ message: "User Login successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
