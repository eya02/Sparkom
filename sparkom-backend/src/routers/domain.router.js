const express = require("express");
const auth = require("../middleware/auth");
const {
  createDomain,
  updateDomain,
  allDomains,
  getDomainByName,
  deleteDomain,
} = require("../controllers/domain.controller");

const router = new express.Router();

router.post("/", auth, createDomain);
router.patch("/:id", auth, updateDomain);
router.get("/", allDomains);
router.get("/search", getDomainByName);
router.delete("/:id", auth, deleteDomain);

module.exports = router;
