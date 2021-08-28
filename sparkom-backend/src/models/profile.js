const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  my_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  bio: { type: String },
  occupation: { type: String },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  is_verified: { type: Boolean, default: false },
  is_expert: { type: Boolean, default: false },
});

const Profile = mongoose.model("Profile", profileSchema, "profile");

module.exports = Profile;
