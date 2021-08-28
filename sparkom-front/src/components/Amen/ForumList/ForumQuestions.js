import React from "react";
import avatar from "../../assets/img/avatar40-sm.jpg";
import Pagination from "../Pagination";

function ForumQuestions() {
  const questions = (authorName, questTime, title, nbVote, nbAnswer) => {
    return (
      <tr>
        <td className="forum">
          <div className="forum-item">
            <div className="content">
              <a href="questionpage" className="h6 title">
                {title}
              </a>
              <br />
              <a href="forumList" class="badge badge-primary ml-1">
                javascript
              </a>
              <a href="forumList" class="badge badge-primary ml-1">
                reactJS
              </a>
            </div>
          </div>
        </td>
        <td className="topics">
          <a href="#" className="h6 count">
            {nbAnswer}
          </a>
        </td>
        <td className="posts">
          <a href="#" className="h6 count">
            {nbVote}
          </a>
        </td>

        <td className="freshness">
          <div className="author-freshness">
            <div className="author-thumb">
              <img src={avatar} alt="author" />
            </div>
            <a href="#" className="h6 title">
              {authorName}
            </a>
            <time className="entry-date updated" datetime="2017-06-24T18:18">
              {questTime}
            </time>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div>
<div class="ui-block">
            
              <table className="forums-table">
                <thead>
                  <tr>
                    <th className="forum">Forum</th>

                    <th className="topics">Answers</th>

                    <th className="posts">Votes</th>
                    <th className="freshness">Author</th>
                  </tr>
                </thead>

                <tbody>
                  {questions(
                    "Amen Allah Ben Ayada",
                    "13 hours, 58 minutes ago",
                    "Adding capture button to bottom centre of the capture window",
                    "5",
                    "2"
                  )}
                  {questions(
                    "Amen Allah Ben Ayada",
                    "13 hours, 58 minutes ago",
                    "Adding capture button to bottom centre of the capture window",
                    "5",
                    "2"
                  )}
                  {questions(
                    "Amen Allah Ben Ayada",
                    "13 hours, 58 minutes ago",
                    "Adding capture button to bottom centre of the capture window",
                    "5",
                    "2"
                  )}
                  {questions(
                    "Amen Allah Ben Ayada",
                    "13 hours, 58 minutes ago",
                    "Adding capture button to bottom centre of the capture window",
                    "5",
                    "2"
                  )}
                  {questions(
                    "Amen Allah Ben Ayada",
                    "13 hours, 58 minutes ago",
                    "Adding capture button to bottom centre of the capture window",
                    "5",
                    "2"
                  )}
                  {questions(
                    "Amen Allah Ben Ayada",
                    "13 hours, 58 minutes ago",
                    "Adding capture button to bottom centre of the capture window",
                    "5",
                    "2"
                  )}
                </tbody>
              </table>
            </div>
            </div>
            
         
       
  );
}

export default ForumQuestions;
