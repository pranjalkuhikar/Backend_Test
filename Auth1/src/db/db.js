import mongoose from "mongoose";
import config from "../config/config.js";

const connectDB = () => {
  try {
    mongoose
      .connect(config.MONGODB_URL)
      .then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    console.log("Error ", error);
  }
};

export default connectDB;
