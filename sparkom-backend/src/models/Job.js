const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const JobSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  contract: {
    type: String,
    required: false,
  },
  salary: {
    type: String,
    required: false,
  },
  experience: {
    type: String,
    required: false,
  },
  study: {
    type: String,
    required: false,
  },
  startingtime: {
    type: Number,
    required: false,
  },
  endingtime: {
    type: Number,
    required: false,
  },
  Languages: {
    type: String,
    required: false,
  },
  Responsibility: {
    type: String,
    required: false,
  },
  posted_date: {
    type: Date,
    default: Date.now,
  },
  start_date: {
    type: Date,
    required: false,
  },
  employees_needed: {
    type: Number,
  },
  description: {
    type: String,
  },
  company_id: {
    type: Schema.Types.ObjectId,
    ref: "company",
    required: false,
  },
  image: {
    type: String,
  },
});

module.exports = Job = mongoose.model("job", JobSchema);
