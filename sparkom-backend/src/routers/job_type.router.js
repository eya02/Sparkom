const express = require("express");
const {
  getAlljob_types,
  getJob_typeById,
  createJob_type,
  updateJob_typeById,
  deleteJob_type,
} = require("../controllers/job_type.controller");

const router = new express.Router();

router.post("/", createJob_type);
router.get("/showjobtypes", getAlljob_types);
router.get("/showjobtypebyId/:id", getJob_typeById);
router.patch("/updatejobtype/:id", updateJob_typeById);
router.delete("/deletejobtype/:id", deleteJob_type);

module.exports = router;
