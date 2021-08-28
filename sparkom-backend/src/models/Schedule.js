const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const ScheduleSchema = new Schema({
  StartTime: {
    type: Date,
    required: false,
  },
  EndTime: {
    type: Date,
    required: false,
  },
  User_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  Applicant_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  Subject: {
    type: String,
    required: false,
  },
});

module.exports = Company = mongoose.model("schedule", ScheduleSchema);
