var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var event = new Schema({
    name:{
        type: String,
        required: true,
      },
      CreatedBy:{
        type: Schema.Types.ObjectId,
        ref:'User' 
      },
      group_id:{
        type: Schema.Types.ObjectId,
        ref:'group' 
      },
      description:{
        type: String,
        required: true,
      },
      adresse:{
        type: String,
        required: true,
      },
      Date:{
        type: Date,
        required: true,
      },
      Image:{
        type: String,
        required: false,
      },
      Participants: [{ type:Schema.Types.ObjectId, ref: "User" }],  

    }
    ,{timestamps: true});
    module.exports = mongoose.model("event", event);