const Board = require("../Models/boards");
const _ = require("lodash");


const AddMember = (req, res) => {
    Board.findByIdAndUpdate(
    req.body.board_id,
    { $push: { Members: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

const LeaveBoard = (req, res) => {
  Board.findByIdAndUpdate(
    req.body.board_id,
    { $pull: { Members: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

const IsAMember = (req, res) => {
  Board.findById( req.params.board_id
).exec((err, result) => {
  if (err) res.json({ error: err });
  const obj = JSON.parse(JSON.stringify(result));
  const found = null;
  if(obj!=null){
  const found1 = obj.Members.find(element => element==req.params.userId);
  if(found1!=null) res.send(true);
  }else res.send(false);
});
};
module.exports = { AddMember,LeaveBoard,IsAMember };
