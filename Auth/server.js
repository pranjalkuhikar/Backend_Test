import app from "./src/app.js";
import config from "./src/config/config.js";
import http from "http";

const port = config.PORT;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
