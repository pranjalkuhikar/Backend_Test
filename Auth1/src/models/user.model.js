import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minlength: [3, "Username must be at least 3 characters long"],
    maxlength: [50, "Username cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

userSchema.statics.hashPassword = async function (password) {
  if (!password) throw new Error("Password Required");
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.isValidPassword = async function (password) {
  if (!password) throw new Error("Password Required");
  if ((!this, password)) throw new Error("Password Required");
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    { id: this._id, username: this.username, email: this.email },
    config.JWT_SECRET,
    {
      expiresIn: config.JWT_EXPIRATION_TIME,
    }
  );
  return token;
};

userSchema.statics.verifyToken = function ({ token }) {
  if (!token) throw new Error("Token Required");
  return token.verify(token, config.JWT_SECRET);
};

const User = mongoose.model("User", userSchema);

export default User;
