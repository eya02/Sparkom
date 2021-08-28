const multer = require("multer");
const Job = require("../models/Job");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: storage }).single("image");

// @route GET api/Job/showJobs
// @description Get all Jobs
// @access Public
const getAllJobs = async (req, res) => {
  Job.find()
    .then((Jobs) => res.json(Jobs))
    .catch((err) => res.status(404).json({ noJobsfound: "No Jobs found" }));
};

// @route GET pi/Job/:id
// @description Get single book by id
// @access Public
const getJobById = async (req, res) => {
  Job.findById(req.params.id)
    .then((Jobs) => res.json(Jobs))
    .catch((err) => res.status(404).json({ noJobsfound: "No Jobs found" }));
};

// @route GET api/Job
// @description api/Job/addcomp
// @access Public
const createJob = async (req, res) => {
  let jobd = req.body;
  console.log(jobd);
  jobd.image = req.file.path;
  Job.create(req.body)
    .then((Jobs) => res.json({ msg: "Job added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this Job" }));
};

// @route GET api/books/:id
// @description Update book
// @access Public
const updateJobById = async (req, res) => {
  const j = req.body;
  Job.findByIdAndUpdate(req.params.id, {
    Languages: j.Languages,
    Responsibility: j.Responsibility,
    contract: j.contract,
    description: j.description,
    employees_needed: j.employees_needed,
    experience: j.experience,
    salary: j.salary,
    study: j.study,
    title: j.title,
  })
    .then((Jobs) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
};

// @route GET api/books/:id
// @description Delete book by id
// @access Public
const deleteJob = async (req, res) => {
  Job.findByIdAndRemove(req.params.id, req.body)
    .then((Jobs) => res.json({ mgs: "Job entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a book" }));
};

const getJobByCompany = async (req, res) => {
  Job.find({ company_id: req.params.id })
    .then((Jobs) => res.json(Jobs))
    .catch((err) => res.status(404).json({ noJobsfound: "No Jobs found" }));
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  deleteJob,
  updateJobById,
  uploadImg,
  getJobByCompany,
};
