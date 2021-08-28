const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    List_name: {
      type: String,
      required: true,
    },
    Order: {
      type: Number,
    },
    board_id:{
        type: Schema.Types.ObjectId,
        ref: 'board'
    }
  },
  { timestamps: true }
);
const List = mongoose.model("list", listSchema);

module.exports = List;
