import React from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isLogged } from "../../helpers/auth";
import { getAllPosts } from "../../redux/actions/postActions";
import PostList from "./PostList";
import AddPost from "./AddPost";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { activeUserSelector } from "../../store/slices/auth";
export function HomeAmen({ posts }) {
  const jwt = isLogged();
  const dispatch = useDispatch();
  const activeUser = useSelector(activeUserSelector);

  React.useEffect(() => {
    console.log("test");
    dispatch(
      getAllPosts(JSON.stringify(localStorage.getItem("token")), activeUser._id)
    );
  }, [dispatch]);

  return (
    <div class="container">
      <div class="row">
        <LeftSidebar />
        <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div id="newsfeed-items-grid">
            <AddPost />
            <PostList posts={posts && posts} />
          </div>
        </div>
        <RightSidebar />
      </div>
    </div>
  );
}

const mapStateToProps = ({ post: { posts } }) => ({
  posts,
});

export default connect(mapStateToProps, null)(HomeAmen);
