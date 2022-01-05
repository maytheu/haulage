const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonesSchema = mongoose.Schema({
  id: { type: Schema.Types.ObjectId, ref: "users" },
  phone: { type: Number, minLength: 10, maxLength: 14, unique: 1 },
});

module.exports = mongoose.model("phones", phonesSchema);
