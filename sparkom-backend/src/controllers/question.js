const Question = require("../models/question");
const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");

const getAllQuestions = (req, res) => {
  
  Question.find()
    .populate("annswers", "text created")
    .populate("answers.questionedBy", "_id name")
    .populate("questionedBy", "_id name")
    .sort("-createdAt")
    .exec((err, questions) => {
      if (err) res.json({ error: err });
      res.json(questions);
    });
};

const userQuestions = (req, res) => {
  Question.find({ questionedBy: req.profile._id })
    .populate("answers", "text created")
    .populate("answers.questionedBy", "_id name")
    .populate("questionedBy", "_id name")
    .sort("-createdAt")
    .exec((err, questions) => {
      if (err) res.json({ error: err });
      res.json(questions);
    });
};



const getQuestionById = (req, res, next, id) => {
  Question.findById(id)
    .populate("answers", "text created")
    .populate("answers.questionedBy", "_id name")
    .populate("questionedBy", "_id name")
    .exec((err, question) => {
      if (err) res.json({ error: err });
      req.question = question;
      next();
    });
};

const isOwner = (req, res, next) => {
  let isMine = req.question && req.auth && req.question.questionedBy._id == req.auth._id;
  if (!isMine) {
    return res.json({ error: "Non authorisé" });
  }
  next();
};

/*const addQuestion = (req, res) => {
  const { text } = req.body;
  let question = new Question({ text, questionedBy: req.profile._id });
  question.save((err, data) => {
    if (err) res.json({ error: err });
    res.json(data);
  });
};*/

const addQuestion = (req, res) => {
  console.log("here!");
  let form = new formidable.IncomingForm();
  const { title } = req.body;
  const { body } = req.body;
  const { type } = req.body;
  form.keepExtensions = true;
  let question = new Question({ title,body,type,questionedBy: req.profile._id });
  form.parse(req, (err, fields, files) => {
    ;
    question = _.extend(question, fields);
    
    question.save((err, result) => {
      if (err) return res.json({ error: err });
      res.json(result);
    });
  })
  
};




const updateQuestion = (req, res) => {
  console.log(req.body);
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    let question = req.question;
    question = _.extend(question, fields);
    question.save((err, result) => {
      if (err) return res.json({ error: err });
      res.json(result);
    });
  });
};



const deleteQuestion = (req, res) => {
  let questionToDelete = req.question;
  questionToDelete.remove((err, deletedQuestion) => {
    if (err) res.json({ error: err });
    res.json(deletedQuestion);
  });
};

const likeQuestion = (req, res) => {
  Question.findByIdAndUpdate(
    req.body.questionId,
    { $push: { likes: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

const unlikeQuestion = (req, res) => {
  Question.findByIdAndUpdate(
    req.body.questionId,
    { $pull: { likes: req.body.userId } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};



const getQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    if (!question) return res.status(404).send("question Not Found");
    res.send(question);
  } catch (e) {
    res.status(500).send(e);
  }
};


const addAnswer = (req, res) => {
  let answer = { text: req.body.text };
  answer.questionedBy = req.body.userId;
  Question.findByIdAndUpdate(
    req.body.questionId,
    { $push: { answers: answer } },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

const deleteAnswer = (req, res) => {
  let answer = req.body.answer;
  Question.findByIdAndUpdate(
    req.body.questionId,
    {
      $pull: {
        answers: {
          _id: answer._id,
        },
      },
    },
    { new: true }
  ).exec((err, result) => {
    if (err) res.json({ error: err });
    res.json(result);
  });
};

module.exports = {
  getQuestion,
  getAllQuestions,
  userQuestions,
  getQuestionById,
  isOwner,
  deleteQuestion,
  likeQuestion,
  unlikeQuestion,
  addQuestion,
  updateQuestion,
  addAnswer,
  deleteAnswer,
};