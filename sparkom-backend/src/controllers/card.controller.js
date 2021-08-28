const Card = require("../Models/cards");
const _ = require("lodash");




const AddDescription = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.card_id,
    { Description: req.body.description  },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

const AddDueDate = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.card_id,
    { Due_date: req.body.due_date  },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};
const AddMembers = (req, res) => {
  Card.findByIdAndUpdate(
  req.body.card_id,
  { $push: { Members: req.body.userId } },
  { new: true }
).exec((err, result) => {
  if (err) res.json({ error: err });
  res.json(result);
});
};
const DeleteMember = (req, res) => {
  Card.findByIdAndUpdate(
    req.body.card_id,
    { $pull: { Members: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};
const UpdateList = (req, res) => {
  Card.findByIdAndUpdate(
    req.body.card_id,
    { list_id: req.body.listId},
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

module.exports = { AddDescription,AddDueDate,AddMembers,DeleteMember ,UpdateList};
