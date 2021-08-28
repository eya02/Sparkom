import React from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAllPosts } from "../../../redux/actions/postActions";
import PostList from "./PostList";
import AddPost from "./AddPost";
import Feed from "./Feed";

import NavBar from "../../../components/NavBar/NavBar";
import {
  activeUserSelector,
  thistoken,
  isAuthenticatedSelector,
} from "../../../store/slices/auth";
import { useSelector } from "react-redux";
function Home({ posts }) {
  const dispatch = useDispatch();
  const activeUser = useSelector(activeUserSelector);
  const token = useSelector(thistoken);
  React.useEffect(() => {
    
      function loadPosts() {
        dispatch(getAllPosts(token, activeUser._id));
      }
      loadPosts();
    
  }, []);

  return (

      <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
      <div id="newsfeed-items-grid">
              <AddPost />
              <PostList posts={posts && posts} />
          
    </div></div>
  );
}

const mapStateToProps = ({ post: { posts } }) => ({
  posts,
});

export default connect(mapStateToProps, null)(Home);
