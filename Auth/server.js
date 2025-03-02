import express from "express";
import config from "./src/config/config.js";

const app = express();
const port = config.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
