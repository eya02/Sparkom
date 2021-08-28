const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    post_content: String,
    image: Buffer,
    video: Buffer,
    likes: [mongoose.Schema.Types.ObjectId],
    comments: [
      {
        comment_txt: String,
        creationDate: Date,
        commenter: mongoose.Schema.Types.ObjectId,
      },
    ],
    topics: [mongoose.Schema.Types.ObjectId],
    hashtags: [mongoose.Schema.Types.ObjectId],
  },
  { timestamps: true }
);

const Post = mongoose.model("PostAz", postSchema, "PostsAz");

module.exports = Post;
