import React from "react";
import Header from "./Header";
import TopicSearchBar from "./TopicSearchBar.js";
import TopicList from "./TopicList";
import NavBar from "../../NavBar/NavBar";

export default function AllTopics() {
  return (
    <>
      <NavBar />
      <div className="header-spacer header-spacer-small mb-3"></div>
      <div>
        <Header />
        <TopicSearchBar />
        <TopicList />
      </div>
    </>
  );
}
