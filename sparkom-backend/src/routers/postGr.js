const express = require("express");
const auth = require("../middleware/auth");

const {
  addPost,
  getAllPosts,
  userPosts,
  getPostById,
  isOwner,
  deletePost,
  likePost,
  unlikePost,
  deleteComment,
  addComment,
  updatePost,
  getPostPhoto,
} = require("../controllers/postGr");
const { getUserById } = require("../controllers/user.controller");

const router = express.Router();

router.get("/posts/:userId", auth, getAllPosts);
router.get("/posts/by/:userId", auth, userPosts);
router.delete("/post/:postId", auth, isOwner, deletePost);
router.post("/post/create/:userId", auth, addPost);
router.put("/post/like", auth, likePost);
router.put("/post/unlike", auth, unlikePost);
router.put("/post/comment", auth, addComment);
router.put("/post/uncomment", auth, deleteComment);
router.get("/post/photo/:postId", getPostPhoto);
//router.param("userId", getUserById);
router.param("postId", getPostById);

router.put("/api/posts/:postId", auth, updatePost);



module.exports = router;