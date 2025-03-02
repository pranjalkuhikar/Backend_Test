import mongoose from "mongoose";
import config from "../config/config.js";

const connectDB = () => {
  try {
    mongoose
      .connect(config.MONGODB_URL)
      .then(() => console.log("MongoDB connected..."));
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
