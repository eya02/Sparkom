import React from "react";
import NavBar from "../../NavBar/NavBar";
import HiringForm from "./HiringForm";
function JobPost() {
  return (
    <div>
      <NavBar />
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Hire The Right Person</h1>
                <p>Post your Hiring offer !</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HiringForm />
    </div>
  );
}

export default JobPost;
