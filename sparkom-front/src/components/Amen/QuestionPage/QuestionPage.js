import React from "react";
import Header from "../ForumList/Header";
import TitleBar from "./TitleBar";
import QuestionDetail from "./QuestionDetail";
import AddReply from "./AddReply";
import RelatedQuestion from "./RelatedQuestion";
function QuestionPage() {
  return (
    <div>
      <Header />
      <div class="container">
        <div class="row">
          <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="ui-block responsive-flex">

<TitleBar/>

<QuestionDetail/>

<AddReply/>
            </div>
            
          </div>
          <RelatedQuestion/>

        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
