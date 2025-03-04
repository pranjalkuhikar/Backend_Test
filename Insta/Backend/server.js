import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/db/db.js";

connectDB();
const port = config.PORT;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
