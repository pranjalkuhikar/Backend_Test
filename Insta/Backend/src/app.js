import express from "express";
import CRUDAPI from "./routes/user.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", CRUDAPI);

export default app;
