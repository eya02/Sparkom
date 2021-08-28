var List = require("../Models/lists");
const createList = async (req, res) => {
    const post = new List({ ...req.body, board_id: req.board._id });
    try {
      await post.save();
      res.status(201).send(post);
    } catch (e) {
      res.status(400).send(e);
    }
  };
  module.exports = {
    createList
  };