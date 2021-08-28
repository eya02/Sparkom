const Postedon = require("../models/Posted_on");

// @route GET api/company/showcompanies
// @description Get all companies
// @access Public
const getAllPostedon = async (req, res) => {
  Postedon.find()
    .then((postedon) => res.json(postedon))
    .catch((err) => res.status(404).json({ nopostedon: "No job types found" }));
};

// @route GET pi/company/:id
// @description Get single book by id
// @access Public
const getPostedonById = async (req, res) => {
  Postedon.findById(req.params.id)
    .then((postedon) => res.json(postedon))
    .catch((err) =>
      res.status(404).json({ noPostedonfound: "No postedon found" })
    );
};

// @route GET api/company
// @description api/company/addcomp
// @access Public
const createPostedon = async (req, res) => {
  Postedon.create(req.body)
    .then((postedon) => res.json({ msg: "Postedon added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add IT" }));
};

// @route GET api/books/:id
// @description Update book
// @access Public
const updatePostedonById = async (req, res) => {
  Postedon.findByIdAndUpdate(req.params.id, req.body)
    .then((postedon) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
};

// @route GET api/books/:id
// @description Delete book by id
// @access Public
const deletePostedon = async (req, res) => {
  Postedon.findByIdAndRemove(req.params.id, req.body)
    .then((postedon) =>
      res.json({ mgs: "Postedon entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such a Postedon" }));
};

const getapllicantsByjob = async (req, res) => {
  Postedon.find({ job_id: req.params.id })
    .populate("user")
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ nopostsfound: "No posts found" }));
};

module.exports = {
  getAllPostedon,
  getPostedonById,
  createPostedon,
  updatePostedonById,
  deletePostedon,
  getapllicantsByjob,
};
