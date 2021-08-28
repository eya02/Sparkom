import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Joblists from "./JobList";
import Filter from "./Filter";
import { fetchJobs, selectJobs } from "../../../store/slices/jobs";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";

function Index() {
  const dispatch = useDispatch();
  const [jobs] = useSelector(selectJobs);
  useEffect(() => {
    dispatch(fetchJobs);
  }, [dispatch]);

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

      <Filter />

      <Container>
        <Row>
          <Col sm={9}>
            <Container>
              <Row>
                {jobs?.map((job) => (
                  <Col sm={6}>
                    <Joblists job={job} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Index;
