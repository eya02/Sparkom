import React from "react";
import Header from "./Header";
import TopicList from "./TopicList";
import TopicSearchBar from "./TopicSearchBar.js";


export default function AllTopics() {
  return (
    <div >
      <Header />
      <TopicSearchBar />
      <TopicList />
      
    </div>
  );
}
