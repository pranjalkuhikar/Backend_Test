import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(morgan("dev"));

app.use("/", userRoutes);

export default app;
