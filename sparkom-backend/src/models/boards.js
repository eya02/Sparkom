const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new Schema(
  {
    Board_name: {
      type: String,
      required: true,
    },
    Is_public: {
      type: Boolean,
      default: false,
    },
    creator_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    Members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Board = mongoose.model("boards", boardSchema);

module.exports = Board;
