var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlockSchema = new Schema({
  id: {
    type: Number,
    required: [true, "id is required"],
  },
  page: {
    type: String,
    required: [true, "page is required"],
  },
  type: {
    type: String,
    required: [true, "type of block is required"],
  },
  text: {
    type: String,
    max: 20000,
  },
  media: {
    type: String,
    max: 3000,
  },
  images: {
    type: [String],
  },
  direction: {
    type: String,
  },
  header: {
    type: String,
  },
});

module.exports = mongoose.model("Block", BlockSchema);
