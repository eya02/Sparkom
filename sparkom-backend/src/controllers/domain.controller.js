const Domain = require("../models/domain");

const createDomain = async (req, res) => {
  const domain = new Domain(req.body);
  try {
    await domain.save();
    res.status(201).send(domain);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateDomain = async (req, res) => {
  try {
    const domain = await Domain.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!domain) return res.status(404).send("Inexisting Domain");
    return res.send(domain);
  } catch (e) {
    res.status(500).send();
  }
};

const allDomains = async (req, res) => {
  try {
    const domains = await Domain.find({});
    res.send(domains);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getDomainByName = async (req, res) => {
  const { name } = req.query;
  try {
    const domain = await Domain.findOne({ name });
    if (!domain) return res.status(404).send("No Domain with the Entred Name");
    res.send(domain);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteDomain = async (req, res) => {
  try {
    const domain = await Domain.findByIdAndDelete(req.params.id);
    if (!domain) return res.status(404).send("Domain Not Found");
    res.send(" Domain deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = {
  createDomain,
  updateDomain,
  allDomains,
  getDomainByName,
  deleteDomain,
};
