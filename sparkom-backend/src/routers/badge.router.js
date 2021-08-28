const express = require("express");
const auth = require("../middleware/auth");

const {
  createBadge,
  updateBadge,
  allBadges,
  deleteBadge,
  badgeByID,
  displayBadgeImg,
  addBadgeImg,
  badgeUpload,
} = require("../controllers/badge.controller");

const router = new express.Router();

router.post("/", auth, createBadge);
router.patch("/:id", auth, updateBadge);
router.get("/", allBadges);
router.get("/:id", badgeByID);
router.delete("/:id", deleteBadge);

router.post(
  "/img/:id",
  auth,
  badgeUpload.single("badge"),
  addBadgeImg,
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
router.get("/img/:id", displayBadgeImg);

module.exports = router;
