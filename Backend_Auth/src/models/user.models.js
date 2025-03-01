import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exists"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [30, "Username must be at most 30 characters long"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      trim: true,
      lowercase: true,
    },
    profilePicture: {
      type: String,
      default: "public/profile.jpeg",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      maxlength: [128, "Password must be at most 128 characters long"],
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.hashPassword = async (password) => {
  if (!password) throw new Error("Password is required");
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async (password) => {
  if (!password) throw new Error("Password is required");
  if (!this.password) throw new Error("Password is not valid");
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    config.JWT_SECRET,
    {
      expiresIn: config.JWT_EXPIRES_IN,
    }
  );
  return token;
};

userSchema.statics.verifyToken = (token) => {
  if (!token) throw new Error("Token is require");
  return jwt.verify(token, config.JWT_SECRET);
};

const User = mongoose.model("User", userSchema);

export default User;
