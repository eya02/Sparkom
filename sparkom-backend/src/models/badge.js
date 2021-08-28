const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  type: String,
  description: String,
  image: Buffer,
});

const Badge = mongoose.model("Badge", badgeSchema);

module.exports = Badge;
