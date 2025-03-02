import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/config.js";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.hashPassword = async function (password) {
  if (!password) throw new Error("Password is required");
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error("Password is required");
  if (!this.password) throw new Error("Password is required");
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    { id: this._id, username: this.username, email: this.email },
    config.JWT_SECRET,
    {
      expiresIn: config.JWT_EXPIRATION,
    }
  );
  return token;
};

userSchema.statics.verifyToken = function ({ token }) {
  if (!token) throw new Error("Invalid token");
  return jwt.verify(token, config.JWT_SECRET);
};

const User = mongoose.model("User", userSchema);

export default User;
