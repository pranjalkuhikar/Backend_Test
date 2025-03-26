import dotenv from "dotenv";

dotenv.config();

const _config = {
  PORT: process.env.PORT,
  MONGODBURL: process.env.MONGODBURL,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};

const config = Object.freeze(_config);

export default config;
