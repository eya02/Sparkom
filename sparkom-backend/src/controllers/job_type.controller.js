const express = require("express");

const Job_type = require("../models/Job_type");

// @route GET api/company/showcompanies
// @description Get all companies
// @access Public
const getAlljob_types = async (req, res) => {
  Job_type.find()
    .then((job_types) => res.json(job_types))
    .catch((err) =>
      res.status(404).json({ nojob_types: "No job types found" })
    );
};

// @route GET pi/company/:id
// @description Get single book by id
// @access Public
const getJob_typeById = async (req, res) => {
  Job_type.findById(req.params.id)
    .then((job_types) => res.json(job_types))
    .catch((err) =>
      res.status(404).json({ noJob_typefound: "No job_types found" })
    );
};

// @route GET api/company
// @description api/company/addcomp
// @access Public
const createJob_type = async (req, res) => {
  Job_type.create(req.body)
    .then((job_types) => res.json({ msg: "Job_type added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this Company" })
    );
};

// @route GET api/books/:id
// @description Update book
// @access Public
const updateJob_typeById = async (req, res) => {
  Job_type.findByIdAndUpdate(req.params.id, req.body)
    .then((job_types) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
};

// @route GET api/books/:id
// @description Delete book by id
// @access Public
const deleteJob_type = async (req, res) => {
  Job_type.findByIdAndRemove(req.params.id, req.body)
    .then((job_types) =>
      res.json({ mgs: "Job_type entry deleted successfully" })
    )
    .catch((err) => res.status(404).json({ error: "No such a Job_type" }));
};

module.exports = {
  getAlljob_types,
  getJob_typeById,
  createJob_type,
  updateJob_typeById,
  deleteJob_type,
};
