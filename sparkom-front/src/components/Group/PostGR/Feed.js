import React from "react";
import PostList from "./PostList";
import AddPost from "./AddPost";
export default function Feed({ posts }) {
  return (
    <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
        <AddPost />
        <PostList posts={posts && posts} />
      </div>
    </div>
  );
}
