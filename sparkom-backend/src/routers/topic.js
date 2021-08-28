const express = require("express");
const auth = require("../middleware/auth");
const {
  getAllTopics,
  addTopic,
  addFollower,
  getTopicPhoto,
  getTopic,
} = require("../controllers/topic");
const { getProfileByID } = require("../controllers/profile.controller");

const router = express.Router();

router.get("/api/topics", getAllTopics);
router.post("/api/topic/create", addTopic);
router.get("/api/topic/photo/:topicId", getTopicPhoto);
router.route("/api/topic/add/follow").put(auth, addFollower);
router.get("/api/topic/:topicId", getTopic);

module.exports = router;
