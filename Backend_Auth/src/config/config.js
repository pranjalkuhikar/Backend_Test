import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT || 2000,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};

const config = Object.freeze(_config);
export default config;
