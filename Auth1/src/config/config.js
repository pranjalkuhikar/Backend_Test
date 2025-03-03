import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT || 8080,
};

const config = Object.freeze(_config);

export default config;
