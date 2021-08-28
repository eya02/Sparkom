const express = require("express");
const auth = require("../middleware/auth");

const {
  getAllQuestions,
  addQuestion,
  userQuestions,
  getQuestionById,
  isOwner,
  likeQuestion,
  unlikeQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestion,
  addAnswer,
  deleteAnswer,
} = require("../controllers/question");
const { getProfileByID } = require("../controllers/profile.controller");

const router = express.Router();

router.get("/api/questions", getAllQuestions);
router.get("/api/questions/by/:userId", auth, userQuestions);
router.delete(
  "/api/question/:questionId",
  auth,
  isOwner,
  deleteQuestion
);
router.post("/api/question/create/:userId", auth, addQuestion);
router.put("/api/question/like", auth, likeQuestion);
router.put("/api/question/unlike", auth, unlikeQuestion);

router.param("userId", getProfileByID);
router.param("questionId", getQuestionById);
router.put("/api/questions/:questionId", auth, updateQuestion);
router.get("/api/question/:questionId", getQuestion);
router.put("/api/question/answer", auth, addAnswer);
router.put("/api/question/unanswer", auth, deleteAnswer);

module.exports = router;
