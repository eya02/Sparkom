import React from "react";
import PostForm from "./PostForm";
import PostText from "./PostText";
import PostPhoto from "./PostPhoto";
import PostVideo from "./PostVideo";

export default function Feed() {
  return (
    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
        <PostForm />
        <PostText />
        <PostPhoto />
      </div>
    </div>
  );
}
