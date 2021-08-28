import React from 'react'
import Header from '../ForumList/Header'
import QuestionForm from './QuestionForm'
import YourQuestion from "../ForumList/YourQuestion";

function AddQuestion() {
    return (
        <div>
             <Header />
             <div class="container">
	<div class="row">
    <div class="col col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">

          <QuestionForm/>    
</div>
<YourQuestion/>
              </div>
            </div>
        </div>
    )
}

export default AddQuestion
