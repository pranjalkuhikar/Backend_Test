import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT || 8080,
  MONGODB_URL: process.env.MONGODB_URL,
};

const config = Object.freeze(_config);

export default config;
