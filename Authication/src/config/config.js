import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT,
  MONGODBURL: process.env.MONGODBURL,
};

const config = Object.freeze(_config);

export default config;
