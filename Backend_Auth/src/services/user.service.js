import User from "../models/user.models.js";

export const createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error("All fields are required [username, email, password]");
  }

  const isUserAlreadyExist = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    throw new Error("User already exists");
  }

  const hashedPassword = await User.hashPassword(password);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();

  delete user._doc.password;

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid Credentials");

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) throw new Error("Invalid Credentials");

  delete user._doc.password;
  return user;
};
