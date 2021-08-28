const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  cv_pdf: Buffer,
  description: String,
  experience: [
    {
      title: String,
      company: String,
      location: String,
      from: Date,
      to: Date,
      current: Boolean,
      description: String,
    },
  ],
  education: [
    {
      school: String,
      degree: String,
      field_of_study: String,
      from: Date,
      to: Date,
      current: Boolean,
      description: String,
    },
  ],
  projects: [
    {
      title: String,
      year: String,
      description: String,
    },
  ],
});

const Cv = mongoose.model("Cv", cvSchema, "Cv");

module.exports = Cv;
