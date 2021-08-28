const Cv = require("../models/cv");

const createCv = async (req, res) => {
  const cv = new Cv({ ...req.body, userId: req.user._id });
  try {
    await cv.save();
    res.status(201).send(cv);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateCv = async (req, res) => {
  const insertedUpdates = Object.keys(req.body);
  const allowedUpdates = [
    "description",
    "experience",
    "education",
    "projects",
    "cv_pdf",
  ];

  const isAllowed = insertedUpdates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isAllowed) return res.status(400).send("eroor Invalid update ! ");

  try {
    const myCv = await Cv.findOne({ userId: req.user._id });
    if (!myCv) return res.status(404).send("You don't have a Cv");

    insertedUpdates.forEach((updatedField) => {
      myCv[updatedField] = req.body[updatedField];
    });
    await myCv.save();
    res.send(myCv);
  } catch (e) {
    res.status.send(400);
  }
};

const myCv = async (req, res) => {
  try {
    const myCv = await Cv.findOne({ userId: req.user._id });
    if (!myCv) return res.status(404).send("You don't have a Cv");
    res.send(myCv);
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteCv = async (req, res) => {
  try {
    const myCv = await Cv.findOne({ userId: req.user._id });
    if (!myCv) return res.status(404).send("You don't have a Cv");
    await myCv.remove();
    res.send("cv Deleted");
  } catch (e) {
    res.status(500).send();
  }
};
module.exports = { createCv, updateCv, myCv, deleteCv };
