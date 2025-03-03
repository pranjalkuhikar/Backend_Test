import app from "./src/app.js";
import http from "http";
import config from "./src/config/config.js";
import connectDB from "./src/db/db.js";

connectDB();
const port = config.PORT;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
