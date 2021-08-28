import React from "react";
import { Container } from "@material-ui/core";
import Schedule from "./Schedule";
import NavBar from "../../NavBar/NavBar";
function Index() {
  return (
    <div>
      <NavBar />
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Make Hiring Easier With Scheduling</h1>
                <p>Add rdv to make it easier for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Schedule />
      </Container>
    </div>
  );
}

export default Index;
