const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const QuestionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      trim: true,
      required: true,
    },
    type: {
      type: String,
      trim: true,
      required: true,
    },
    questionedBy: {
      type: ObjectId,
      ref: "User",
    },
    answers: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        questionedBy: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],

    likes: [{ type: ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", QuestionSchema);
