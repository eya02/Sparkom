import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import ForumSearchBar from "./ForumSearchBar"
import Pagination from "./Pagination"
import YourQuestion from "./YourQuestion"


const Question = props => (
  
<tr>
        <td className="forum">
          <div className="forum-item">
            <div className="content">
            <Link
                      to={`/question/${props.question._id}`}
                      style={{ textDecoration: "none" }}
                    >
              <a href="questionpage" className="h6 title">
                {props.question.title}
              </a>
              </Link>
             
             
              
            </div>
          </div>
        </td>
        <td className="topics">
          <a href="#" className="h6 count">
          {props.question.answers.length}
          </a>
        </td>
        <td className="topics">
        <a href="forumList" class="badge badge-primary ml-1">
              {props.question.type}
              </a>
        </td>

        <td className="freshness">
          <div className="author-freshness">
            
            <a href="#" className="h6 title">
          
            
            </a>
            <time className="entry-date updated" datetime="2017-06-24T18:18">
            {format(props.question.createdAt)}             
           </time>
          </div>
        </td>
      </tr>

);

export default class AllQuestion extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      questions: [],
     
    };
  }
  componentDidMount() {
    
    axios
      .get("http://127.0.0.1:3002/api/questions")
      .then(response => {
        this.setState({ questions: response.data });
      })
      .catch(error => {
        console.log(error);
      });

      
  }

  

   

questionList() {
    console.log(this.state.questions);
    return this.state.questions.map(currentquestion => {
      return (
        
        
        
                 
                <Question
          question={currentquestion}
          key={currentquestion._id}
        />

      );
    });
  }



  render() {
    return (

<div>
      <Header />
      <ForumSearchBar />
      <div class="container">
	<div class="row">
    <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    <div class="ui-block">
            
            <table className="forums-table">
              <thead>
                <tr>
                  <th className="forum">Question</th>

                  <th className="topics">Answers</th>

                  <th className="posts">Type</th>
                  <th className="freshness">Created</th>
                </tr>
              </thead>

              <tbody>
   
    {this.questionList()}

    </tbody>
              </table>
            </div>
              <Pagination />
</div>

              <YourQuestion />
              </div>
            </div>
            </div>
    );
  }
}