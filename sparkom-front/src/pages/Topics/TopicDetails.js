import React from "react";

import { useParams, Link } from "react-router-dom";
import axios from "axios";
import PostList from "../Post Managment/PostList";
import AddPostTopic from "../Topics/AddPostTopic";
import { useDispatch, connect } from "react-redux";
import LeftSidebar from "../Post Managment/LeftSidebar";
import RightSidebar from "../Post Managment/RightSidebar";
import { isLogged } from "../../helpers/auth";
import { getTopicPosts } from "../../redux/actions/postActions";
function TopicDetails({ posts }) {
  const { topicId } = useParams();
  const [topic, setTopic] = React.useState("");
  const [, setError] = React.useState("");
  const jwt = isLogged();

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (jwt) {
      function loadPosts() {
        dispatch(getTopicPosts(jwt.token, topicId));
      }
      loadPosts();
    }
  }, []);

  React.useEffect(() => {
    async function getTopic() {
      axios.get(`http://127.0.0.1:3002/api/topic/${topicId}`).then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          setTopic(res.data);
        }
      });
    }

    getTopic();
  }, [topicId]);

  if (!jwt) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-8 mx-auto">
            <div className="alert alert-info">
              <Link to="/login">Connectez vous pour voir les tweets</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="main-header">
        <div className="content-bg-wrap bg-badges"></div>
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>{topic.title}</h1>
                <p>
                  Your home feed is based on your topics and the profiles you
                  follow.
                  <br />
                  <b>Share your thoughts with other</b>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <LeftSidebar />
          <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div id="newsfeed-items-grid">
              <AddPostTopic />
              <PostList posts={posts && posts} />
            </div>
          </div>

          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ post: { posts } }) => ({
  posts,
});
export default connect(mapStateToProps, null)(TopicDetails);
