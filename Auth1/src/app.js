import express from "express";
import apiRoutes from "./routes/user.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/users", apiRoutes);

export default app;
