import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchProfile,
  fetchFriends,
  fetchAllProfiles,
} from "../../store/slices/profile";
import NavBar from "../NavBar/NavBar";
import Header from "../ProfileSettings/Header";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import alanBtn from "@alan-ai/alan-sdk-web";
import { populateQuiz } from "../../store/slices/quiz";

export default function MyProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALLAN_KEY,
      onCommand: ({ command, questions }) => {
        if (command === "quizQuestions") {
          dispatch(populateQuiz(questions));
          history.push("/quiz");
        }
      },
    }).playText(
      "Welcome To Sparkom , Im Sparki your voice Assistant during your journey. How Can i Help you"
    );
    dispatch(fetchProfile());
    dispatch(fetchFriends());
    dispatch(fetchAllProfiles());
  }, [dispatch, history]);

  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div className="container">
        <div className="row">
          <Header />
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
