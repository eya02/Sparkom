import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Postuler from "./Postuler";
import Jobinformation from "./JobInformation";
import NavBar from "../../NavBar/NavBar";
function Index() {
  return (
    <>
      <NavBar />
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Your opportunity is waiting for you</h1>
                <p>Apply for the best jobs that fits you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col sm={7}>
            <Jobinformation />
          </Col>
          <Col sm={5}>
            <Postuler />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Index;
