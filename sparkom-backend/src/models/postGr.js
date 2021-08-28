const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const PostGrSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    postedIn: {
      type: ObjectId,
      ref: "group",
      required: false,
    },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PostGr", PostGrSchema);