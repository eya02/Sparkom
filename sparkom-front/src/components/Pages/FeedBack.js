import React, { Component } from "react";
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet

class FeedBack extends Component {
  render() {
    // See al=l customizable props below

    return (
      <Feedback
        emailDefaultValue={"eyabellil44@gmail.com"}
        projectId="6092267ce2cb6100047099ea"
        feedbackTypes={["Bad", "Normal", "Good"]}
      />
    );
  }
}
export default FeedBack;
