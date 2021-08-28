const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const TopicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    followers: [{ type: ObjectId, ref: "User" }],

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Topic", TopicSchema);