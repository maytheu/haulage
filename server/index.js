const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

require("./models/adminSchema.js");
require("./models/invoiceSchema.js");
require("./models/carouselSchema.js");

//connect to DB using mongoose DB object
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Make Mongoose attach virtuals whenever calling `JSON.stringify()`,
// including using `res.json()`
mongoose.set("toJSON", { virtuals: true });

//check mongoose connection
console.log(`${mongoose.connection.readyState}: -2 is connected`);

app.use(cookieParser());

//enable post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

express.static('uploads')

//to serve img files
app.use(express.static("client"));

require("./routes/adminRoute")(app);
require("./routes/invoiceRoutes")(app);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
