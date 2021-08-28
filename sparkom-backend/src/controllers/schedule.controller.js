const Schedule = require("../models/Schedule");

// @route GET api/company/showcompanies
// @description Get all companies
// @access Public
const getAllSchedule = async (req, res) => {
  Schedule.find()
    .then((schedule) => res.json(schedule))
    .catch((err) => res.status(404).json({ noschedule: "No job types found" }));
};

// @route GET pi/company/:id
// @description Get single book by id
// @access Public
const getScheduleById = async (req, res) => {
  Schedule.findById(req.params.id)
    .then((schedule) => res.json(schedule))
    .catch((err) =>
      res.status(404).json({ noSchedulefound: "No Schedule found" })
    );
};

// @route GET api/company
// @description api/company/addcomp
// @access Public
const createSchedule = async (req, res) => {
  Schedule.create(req.body)
    .then((schedule) => res.json({ msg: "Schedule added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this Company" })
    );
};

// @route GET api/books/:id
// @description Update book
// @access Public
const updateScheduleById = async (req, res) => {
  Schedule.findByIdAndUpdate(req.params.id, req.body)
    .then((schedule) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
};

// @route GET api/books/:id
// @description Delete book by id
// @access Public
const deleteSchedule = async (req, res) => {
  Schedule.findByIdAndRemove(req.params.id, req.body)
    .then((schedule) =>
      res.json({ mgs: "Schedule entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such a Schedule" }));
};

const getScheduleByUserId = async (req, res) => {
  Schedule.find({ User_id: req.params.id })
    .then((schedule) => res.json(schedule))
    .catch((err) =>
      res.status(404).json({ noschedulefound: "No schedule found" })
    );
};

module.exports = {
  getAllSchedule,
  getScheduleById,
  createSchedule,
  updateScheduleById,
  deleteSchedule,
  getScheduleByUserId,
};
