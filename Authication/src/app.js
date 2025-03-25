import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoutes);

export default app;
