import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import profile from "./slices/profile";
import resume from "./slices/resume";
import quiz from "./slices/quiz";
import jobs from "./slices/jobs";
import companies from "./slices/company";
import post from "../redux/reducers/post/postReducer";
import question from "../redux/reducers/question/questionReducer";
import { reducer as reducerForm } from "redux-form";
import schedule from "./slices/schedule";

export default combineReducers({
  auth,
  profile,
  resume,
  quiz,
  jobs,
  companies,
  form: reducerForm,
  post,
  schedule,
  question,
});
