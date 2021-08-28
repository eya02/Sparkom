import React from "react";
import Header from "./Header";
import ForumSearchBar from "./ForumSearchBar";
import ForumQuestions from "./ForumQuestions";
import Pagination from "../Pagination";
import YourQuestion from "./YourQuestion";


function ForumList() {
  return (
    <div>
      <Header />
      <ForumSearchBar />
      <div class="container">
	<div class="row">
    <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">

      <ForumQuestions />
              <Pagination />
</div>

              <YourQuestion />
              </div>
            </div>
            </div>
          
  );
}

export default ForumList;
