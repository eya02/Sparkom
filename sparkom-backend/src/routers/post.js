const express = require("express");
const auth = require("../middleware/auth");
const {
  addPost,
  getAllPosts,
  userPosts,
  topicPosts,
  getPostById,
  isOwner,
  deletePost,
  likePost,
  unlikePost,
  deleteComment,
  addComment,
  updatePost,
  getPostPhoto,
  addPostTopic,
} = require("../controllers/post");
const { getProfileByID } = require("../controllers/profile.controller");

const router = express.Router();

router.get("/api/posts/:userId", auth, getAllPosts);
router.get("/api/posts/by/:userId", auth, userPosts);
router.get("/api/posts/byTopic/:topicId", auth, topicPosts);
router.delete("/api/post/:postId", auth, isOwner, deletePost);
router.post("/api/post/create/:userId", auth, addPost);
router.put("/api/post/like", auth, likePost);
router.put("/api/post/unlike", auth, unlikePost);
router.put("/api/post/comment", auth, addComment);
router.put("/api/post/uncomment", auth, deleteComment);
router.get("/api/post/photo/:postId", getPostPhoto);
router.param("userId", getProfileByID);
router.param("postId", getPostById);
router.post("/api/post/create/topic", auth, addPostTopic);
router.put("/api/posts/:postId", auth, updatePost);

module.exports = router;
