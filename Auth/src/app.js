import express from "express";
import routerAPI from "./routes/user.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", routerAPI);

export default app;
