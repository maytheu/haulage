const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session");

require("dotenv").config();
require("./utils/passport");

const auth = require("./routes/authRoutes");
const user = require("./routes/userRoutes");

const session = {
  secret: process.env.SESSION,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

const app = express();
app.use(express.json());
app.use(expressSession(session));
app.use(passport.initialize());
app.use(passport.session());

const db = async () => {
  await mongoose.connect(process.env.DB_URL);
};
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/auth", auth);
app.use("/api/user/", user);

if (app.get("env") === "production") {
  session.cookie.secure = true;
}

const PORT = process.env.PORT || 3003;
db().catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
