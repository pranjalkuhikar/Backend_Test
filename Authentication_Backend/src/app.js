import express from "express";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Only allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies if needed
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", userRoutes);

export default app;