import questionTypes from "../../types/questionTypes";
import { isLogged } from "../../../helpers/auth";

const intialState = {
  questions: [],
  userQuestions: [],
};

const questionReducer = (state = intialState, action) => {
  switch (action.type) {
    case questionTypes.GET_ALL:
      return {
        ...state,
        questions: action.payload,
      };
    case questionTypes.USER_QUESTIONS:
      return {
        ...state,
        userQuestions: action.payload,
      };
    case questionTypes.ADD_QUESTION:
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };
    case questionTypes.REMOVE_QUESTION:
      const updatedQuestions = state.questions.filter(
        (question) => question._id !== action.payload._id
      );
      const updatedUserQuestions = state.userQuestions.filter((question) => {
        if (question.questionedBy._id === action.userId) {
          return question._id !== action.payload._id;
        }
      });
      return {
        ...state,
        questions: updatedQuestions,
        userQuestions: updatedUserQuestions,
      };
    case questionTypes.LIKE_UNLIKE_QUESTION:
      const newUpdatedQuestions = state.questions.filter((question) => {
        if (question._id === action.payload._id) {
          question.likes = action.payload.likes;
          return state.questions;
        }
        return state.questions;
      });
      const newUserUpdatedQuestions = state.userQuestions.filter((question) => {
        question.likes = action.payload.likes;
        return state.userQuestions;
      });

      return {
        ...state,
        questions: newUpdatedQuestions,
        userQuestions: newUserUpdatedQuestions,
      };
    case questionTypes.ADD_DELETE_COMMENT:
      const afterCommentActionUpdatedQuestions = state.questions.filter((question) => {
        if (question._id === action.payload._id) {
          question.comments = action.payload.comments;
          return state.questions;
        }
        return state.questions;
      });
      const afterCommentActionUserUpdatedQuestions = state.userQuestions.filter(
        (question) => {
          question.comments = action.payload.comments;
          return state.userQuestions;
        }
      );
      return {
        ...state,
        questions: afterCommentActionUpdatedQuestions,
        userQuestions: afterCommentActionUserUpdatedQuestions,
      };

    default:
      return state;
  }
};

export default questionReducer;