const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  headline: String,
  desc: String,
});

mongoose.model("carousels", carouselSchema);
