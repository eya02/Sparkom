const Company = require("../models/Company");

// @route GET api/company/showcompanies
// @description Get all companies
// @access Public
const getAllCompanies = async (req, res) => {
  Company.find()
    .then((companys) => res.json(companys))
    .catch((err) =>
      res.status(404).json({ nocompaniesfound: "No companyies found" })
    );
};

// @route GET pi/company/:id
// @description Get single book by id
// @access Public
const getCompanyById = async (req, res) => {
  Company.findById(req.params.id)
    .then((companys) => res.json(companys))
    .catch((err) =>
      res.status(404).json({ nocompaniesfound: "No companys found" })
    );
};

// @route GET api/company
// @description api/company/addcomp
// @access Public
const createCompany = async (req, res) => {
  console.log(req.body);
  Company.create(req.body)
    .then((companys) => res.json({ msg: "Company added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this Company" })
    );
};

// @route GET api/books/:id
// @description Update book
// @access Public
const updateCompanyById = async (req, res) => {
  Company.findByIdAndUpdate(req.params.id, req.body)
    .then((companys) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
};

const getCompByOwner = async (req, res) => {
  Company.find({ company_owner: req.params.id })
    .then((comp) => res.json(comp))
    .catch((err) => res.status(404).json({ noCompfound: "No comp found" }));
};

// @route GET api/books/:id
// @description Delete book by id
// @access Public
const deleteCompany = async (req, res) => {
  Company.findByIdAndRemove(req.params.id, req.body)
    .then((companys) => res.json({ mgs: "company entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a company" }));
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  deleteCompany,
  updateCompanyById,
  getCompByOwner,
};
