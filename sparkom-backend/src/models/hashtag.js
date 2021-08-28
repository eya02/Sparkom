const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const HashtagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hashtag", HashtagSchema);