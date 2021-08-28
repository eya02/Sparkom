const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    list_id:{
        type: Schema.Types.ObjectId,
        ref: 'list'
    },
    Card_name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: false,
    },
    Due_date: {
      type: Date
    },
    Order: {
      type: Number
    },
    File:{
        type:String
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Members: [{ type: Schema.Types.ObjectId, ref: "User" }]
    //labels_list:[labelsSchema],
   // members_list:[String]
  },
  { timestamps: true }
);

const Card = mongoose.model("card", cardSchema);

module.exports = Card;