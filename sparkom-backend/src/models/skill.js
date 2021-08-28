const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  domain_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Domain",
    required: true,
  },
  name: { type: String, unique: true },
  description: String,
  skill_img: Buffer,
  quiz: [
    {
      quiz_id: mongoose.Schema.Types.ObjectId,
      quiz_name: String,
      difficulty: String,
      questions: [mongoose.Schema.Types.ObjectId],
    },
  ],
  skill_badges: [mongoose.Schema.Types.ObjectId],
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
