require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

connectDB();
const PORT=9000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
