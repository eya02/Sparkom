const Skill = require("../models/skill");

const createSkill = async (req, res) => {
  const skill = new Skill(req.body);
  try {
    await skill.save();
    res.status(201).send(skill);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!skill) return res.status(404).send("Inexisting Skill");
    return res.send(skill);
  } catch (e) {
    res.status(500).send();
  }
};

const allSkills = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.send(skills);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).send("Skill Not Found");
    res.send(" Skill deleted ");
  } catch (e) {
    res.status(500).send();
  }
};
const skillsByDomain = async (req, res) => {
  try {
    const skills = await Skill.find({ domain_id: req.params.id });
    if (!skills) return res.status(404).send("Skill Not Found");
    res.send(skills);
  } catch (e) {
    res.status(500).send(e);
  }
};

//**Skill By ID */
const skillByID = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    console.log(skill);
    if (!skill) return res.status(404).send("Skill Not Found");
    res.send(skill);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  createSkill,
  updateSkill,
  allSkills,
  deleteSkill,
  skillsByDomain,
  skillByID,
};
