const express = require("express");
const auth = require("../middleware/auth");
const {
  createCv,
  updateCv,
  myCv,
  deleteCv,
} = require("../controllers/cv.controller");

const router = new express.Router();

router.post("/", auth, createCv);
router.patch("/", auth, updateCv);
router.get("/me", auth, myCv);

router.delete("/", auth, deleteCv);

module.exports = router;
