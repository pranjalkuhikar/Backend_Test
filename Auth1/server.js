import app from "./src/app.js";
import http from "http";

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
