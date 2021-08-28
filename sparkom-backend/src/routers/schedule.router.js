const express = require("express");
const {
  getAllSchedule,
  getScheduleById,
  createSchedule,
  updateScheduleById,
  deleteSchedule,
  getScheduleByUserId,
} = require("../controllers/schedule.controller");

const router = new express.Router();

router.post("/", createSchedule);
router.get("/showschedules", getAllSchedule);
router.get("/showschedule/:id", getScheduleById);
router.patch("/updateschedule/:id", updateScheduleById);
router.delete("/deleteschedule/:id", deleteSchedule);
router.get("/getScheduleByUserId/:id", getScheduleByUserId);

module.exports = router;
