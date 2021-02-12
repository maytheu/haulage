const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema({
  number: { type: String, required: true, unique: 1 },
  company: { type: String, required: true },
  consignment: { type: String, required: true },
  delivery: { type: Boolean, default: 0 },
  amount: { type: Number, required: true },
  amountInWords: { type: String, required: true },
});

mongoose.model("invoices", invoiceSchema);
