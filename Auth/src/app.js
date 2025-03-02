import express from "express";
import routerAPI from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/users", routerAPI);

export default app;
