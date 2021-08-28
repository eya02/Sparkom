const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const JobtypeSchema = new Schema({
  type_name: {
    type: String,
    required: true,
  },
  type_description: {
    type: String,
  },
});

module.exports = Jobtype = mongoose.model("jobtype", JobtypeSchema);
