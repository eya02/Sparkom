const Post = require("../models/postAz");
const multer = require("multer");
const sharp = require("sharp");
const createPost = async (req, res) => {
  const post = new Post({ ...req.body, creator: req.user._id });
  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
};
//******************************** Post Photos & videos ******************/
const upload = multer({
  limits: {
    //10mb
    fileSize: 10_000_000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg|mp4|mov|avi)$/)) {
      cb(new Error("Invalid File Format"));
    }

    cb(undefined, true);
  },
});

const addPhoto = async (req, res) => {
  try {
    const _id = req.params.id;
    const post = await Post.findOne({ _id, creator: req.user._id });
    if (!post) return res.status(400).send("Unable to find Post");
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();
    post.image = buffer;
    console.log(req.file.originalname);

    await post.save();
    res.status(200).send("Image Uploaded");
  } catch (e) {
    res.status(500).send();
  }
};

//****************** All posts **********************/
const allPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.send(posts);
  } catch (e) {
    res.status(500).send(e);
  }
};
//****************** All My posts **********************/
const myPosts = async (req, res) => {
  try {
    const posts = await Post.find({ creator: req.user._id });
    res.send(posts);
  } catch (e) {
    res.status(500).send(e);
  }
};

//******************  My post Details  (Post By ID) **********************/
const myPostByID = async (req, res) => {
  const _id = req.params.id;
  try {
    const post = await Post.findOne({ _id, creator: req.user._id });
    !post ? res.status(400).send("Unable to find Post") : res.send(post);
  } catch (e) {
    res.status(500).send();
  }
};
//****************** Delete  My post **********************/

const deleteMyPost = async (req, res) => {
  const _id = req.params.id;
  try {
    const post = await Post.findOneAndDelete({ _id, creator: req.user._id });
    post ? res.send("post Deleted " + post) : res.status(401).send();
  } catch (e) {
    res.status(500).send(e);
  }
};

//****************** Update  My post **********************/
const updateMyPost = async (req, res) => {
  const updateInput = Object.keys(req.body);
  const isValidUpdate = updateInput.every((update) => update !== "creator");
  if (!isValidUpdate) return res.status(404).send("Inexisting Field");

  try {
    const _id = req.params.id;
    const post = await Post.findOneAndUpdate(
      { _id, creator: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!post) return res.status(404).send("Inexisting Post");
    return res.send(post);
  } catch (e) {
    return res.status(500).send();
  }
};
//******************  My post Photos **********************/

const getPostImg = async (req, res) => {
  const _id = req.params.id;
  try {
    const post = await Post.findOne({ _id, creator: req.user._id });
    if (!post || !post.image)
      return res.status(400).send("Unable to find Post");
    res.set("Content-Type", "image/png");
    res.send(post.image);
  } catch (e) {
    res.status(500).send();
  }
};

//****************************************/
module.exports = {
  createPost,
  allPosts,
  myPosts,
  myPostByID,
  deleteMyPost,
  updateMyPost,
  upload,
  addPhoto,
  getPostImg,
};
