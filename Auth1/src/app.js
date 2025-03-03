import express from "express";
import apiRoutes from "./routes/user.routes.js";

const app = express();

app.use("/users", apiRoutes);

export default app;
