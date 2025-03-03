import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT || 8080,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.SECRET,
  JWT_EXPIRATION_TIME: process.env.EXPIRE,
};

const config = Object.freeze(_config);

export default config;
