import express from "express";
import CRUDAPI from "./routes/user.routes.js";

const app = express();

app.use("/", CRUDAPI);

export default app;
