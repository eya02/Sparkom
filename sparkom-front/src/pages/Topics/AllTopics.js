import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import TopicSearchBar from "./TopicSearchBar.js";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

const style1 = {
  border: 0,
  color: "#fff",
  background: "#236aed",
};
const Topic = props => (
  
<div class="ui-block">
    <div class="birthday-item inline-items badges">
                {/*<div class="author-thumb ">
                    <img src={TopicPic} alt="author" />
</div>*/}
    
                <div class="birthday-author-name">
                <Link
                      to={`/topic/${props.topic._id}`}
                      style={{ textDecoration: "none" }}
                    >
                    <a href="topicpage" class="h6 author-name"> {props.topic.title}</a>
                    </Link>
                    <div class="birthday-date">{" 5k"} followers</div>
                </div>
                <div class="skills-item">
                                    <Button
                                      variant="contained"
                                      style={style1}
                                      size="small"
                                      //className={classes.button}
                                    >
                                      Follow
                                    </Button>
                                  </div>
                </div>
    
    
            </div>


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
      .then(response => {
        this.setState({ topics: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  

   

  topicList() {
    console.log(this.state.topics);
    return this.state.topics.map(currenttopic => {
      return (
         <div>
             <Topic
          topic={currenttopic}
          key={currenttopic._id}
        /></div>
        
        
      );
    });
  }



  render() {
    return (

<div >
<Header />
<TopicSearchBar />
<div>
    <div className="container">
<div className="row">
<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
{this.topicList()}
</div>
</div>
</div>
</div>
  </div>
    );
    
  }
}