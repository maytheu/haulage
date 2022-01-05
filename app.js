const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const user = require("./routes/userRoutes");

const app = express();
app.use(express.json());

const db = async () => {
  await mongoose.connect(process.env.DB_URL);
};
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/auth", user);

const PORT = process.env.PORT || 3005;
db().catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
