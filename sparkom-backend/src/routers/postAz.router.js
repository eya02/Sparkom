const express = require("express");
const auth = require("../middleware/auth");
const {
  createPost,
  allPosts,
  myPosts,
  myPostByID,
  deleteMyPost,
  updateMyPost,
  upload,
  addPhoto,
  getPostImg,
} = require("../controllers/postAz.controller");

const router = new express.Router();

router.post(
  "/me/img/:id",
  auth,
  upload.single("img"),
  addPhoto,
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.post("/me", auth, createPost);
router.get("/", allPosts);
router.get("/me", auth, myPosts);
router.get("/me/:id", auth, myPostByID);
router.delete("/me/:id", auth, deleteMyPost);
router.patch("/me/:id", auth, updateMyPost);

router.get("/me/img/:id", auth, getPostImg);
module.exports = router;
