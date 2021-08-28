const express = require("express");
const {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompanyById,
  deleteCompany,
  getCompByOwner,
} = require("../controllers/company.controller");

const router = new express.Router();

router.post("/", createCompany);
router.get("/showcompanies", getAllCompanies);
router.get("/showbyId/:id", getCompanyById);
router.patch("/updatecompany/:id", updateCompanyById);
router.delete("/deletecompany/:id", deleteCompany);
router.get("/showbyOwnerId/:id", getCompByOwner);

module.exports = router;
