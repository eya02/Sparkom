const Badge = require("../models/badge");
const multer = require("multer");

const sharp = require("sharp");

const createBadge = async (req, res) => {
  const badge = new Badge(req.body);
  try {
    await badge.save();
    res.status(201).send(badge);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateBadge = async (req, res) => {
  try {
    const badge = await Badge.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!badge) return res.status(404).send("Inexisting Badge");
    return res.send(badge);
  } catch (e) {
    res.status(500).send();
  }
};

const allBadges = async (req, res) => {
  try {
    const badges = await Badge.find({});
    res.send(badges);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteBadge = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).send("Badge Not Found");
    res.send(" Skill deleted ");
  } catch (e) {
    res.status(500).send();
  }
};

//**Badge By ID */
const badgeByID = async (req, res) => {
  try {
    const badge = await Badge.findById(req.params.id);

    if (!badge) return res.status(404).send("Badge Not Found");
    res.send(badge);
  } catch (e) {
    res.status(500).send(e);
  }
};

const badgeUpload = multer({
  limits: {
    fileSize: 1_000_000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      cb(new Error("File must be a Valid Image Type"));
    }

    cb(undefined, true);
  },
});
//*********** Upload & Update Badge Image *********************************/

const addBadgeImg = async (req, res) => {
  try {
    const badge = await Badge.findById(req.params.id);
    if (!badge) return res.status(404).send("Badge Not Found");
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 38, height: 38 })
      .png()
      .toBuffer();

    badge.image = buffer;
    await badge.save();
    res.status(200).send("Image Uploaded");
  } catch (e) {
    res.status(500).send(e);
  }
};
//*************** Display Badge Image ****************************/
const displayBadgeImg = async (req, res) => {
  try {
    const badge = await Badge.findById(req.params.id);
    if (!badge || !badge.image) {
      throw new Error("You don't have an image");
    }

    res.set("Content-Type", "image/png");
    res.send(badge.image);
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  createBadge,
  updateBadge,
  allBadges,
  deleteBadge,
  badgeByID,
  displayBadgeImg,
  addBadgeImg,
  badgeUpload,
};
