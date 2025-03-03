import User from "../models/user.model.js";

export const userRegister = async ({ username, email, password }) => {
  if (!username || !email || !password)
    throw new Error("All field is required");

  const userExists = await User.findOne({ $or: [{ username }, { email }] });
  if (userExists) throw new Error("user already exists");

  const hashedPassword = await User.hashedPassword(password);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  delete user._doc.password;
  return user;
};
