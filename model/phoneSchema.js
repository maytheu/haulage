const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonesSchema = mongoose.Schema({
  id: { type: Schema.Types.ObjectId, ref: "users" },
  phone: { type: Number, minLength: 10, maxLength: 14, unique: 1 },
});

phonesSchema.statics.login = async function (phone, cb) {
  try {
    const user = await this.findOne({ phone });
    if (!user) return cb("User not found");
    return cb(null, user);
  } catch (e) {
    cb(e);
  }
};

module.exports = mongoose.model("phones", phonesSchema);
