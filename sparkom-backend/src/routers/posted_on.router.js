const express = require("express");
const {
  getAllPostedon,
  getPostedonById,
  createPostedon,
  updatePostedonById,
  deletePostedon,
  getapllicantsByjob,
} = require("../controllers/Posted_on.controller");

const router = new express.Router();

router.post("/", createPostedon);
router.get("/showpostedon", getAllPostedon);
router.get("/showjobtypebyId/:id", getPostedonById);
router.patch("/updatejobtype/:id", updatePostedonById);
router.delete("/deletejobtype/:id", deletePostedon);
router.get("/showbyJob/:id", getapllicantsByjob);
getapllicantsByjob;

module.exports = router;
