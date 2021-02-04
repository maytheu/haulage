const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

require('dotenv').config()

const app = express();

require("./models/adminSchema.js");

//connect to DB using mongoose DB object
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check mongoose connection
console.log(`${mongoose.connection.readyState}: -2 is connected`)

//enable post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/adminRoute")(app);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
