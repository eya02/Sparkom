const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var Schema = mongoose.Schema;
const PostSchema = new Schema(
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
      ref: "Profile",
    },
    likes: [{ type: ObjectId, ref: "Profile" }],
    topics: { type: ObjectId, ref: "Topic" },
    hastags: [{ type: ObjectId, ref: "Hashtag" }],
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: {
          type: ObjectId,
          ref: "Profile",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
