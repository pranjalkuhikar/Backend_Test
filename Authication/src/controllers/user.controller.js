import User from "../models/user.models.js";

export const register = (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  res.send("Welcome to " + username);
};
