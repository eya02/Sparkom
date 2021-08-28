import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Topic = (props) => (
  <li className="js-open-popup" data-popup-target=".playlist-popup">
    <div className="composition">
      <Link to={`/topic/${props.topic._id}`} style={{ textDecoration: "none" }}>
        <a href="topicpage" class="h6 author-name">
          {" "}
          {props.topic.title}
        </a>
      </Link>
    </div>

    <div className="composition-time">
      <span className="notification-icon"></span>
    </div>
  </li>
);

export default class AllTopics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:3002/api/topics")
      .then((response) => {
        this.setState({ topics: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  topicList() {
    console.log(this.state.topics);
    return this.state.topics.map((currenttopic) => {
      return (
        <div>
          <Topic topic={currenttopic} key={currenttopic._id} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui-block">
        <div className="ui-block-title">
          <a href="topics" className="text-dark">
            <h6 className="title">Top Topics</h6>
          </a>
        </div>

        <ol className="widget w-playlist">{this.topicList()}</ol>
      </div>
    );
  }
}
