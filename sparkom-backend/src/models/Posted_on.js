const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const PostedOnSchema = new Schema({
  description: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: false,
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: "job",
    required: false,
  },
});

module.exports = Company = mongoose.model("postedOn", PostedOnSchema);
