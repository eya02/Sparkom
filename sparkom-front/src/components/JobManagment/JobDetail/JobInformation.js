import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import {
  setErrors,
  selectSelectedJob,
  fetchJobById,
  deleteJob,
} from "../../../store/slices/jobs";
import { useDispatch, useSelector } from "react-redux";
import { queryApi } from "../../../utils/queryApi";

import { useHistory, useParams } from "react-router";

function JobInformation() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const job = useSelector(selectSelectedJob);
  useEffect(() => {
    dispatch(fetchJobById);
  }, [dispatch, id]);

  const deleteJobEvent = async () => {
    const [err] = await queryApi("job/deleteJob/" + job._id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteJob(job._id));
      history.push("/findjob");
    }
  };

  return (
    <div>
      <article className="hentry blog-post single-post single-post-v3">
        <h1 className="post-title">{job?.title}</h1>
        <h6>{job?.description}</h6>

        <div className="post-content-wrap">
          <div className="post-content">
            <h5>About The job</h5>
            <h6>{job?.description}</h6>
            <p></p>

            <h6>Responsibilities</h6>
            <ol>
              <li>{job?.Responsibility}</li>
            </ol>
          </div>

          <Container>
            <Row>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Contract</li>
                  <li> {job?.contract}</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Expérience</li>
                  <li>{job?.experience}</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li>Étude</li>
                  <li>{job?.study}</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Salaire</li>
                  <li>{job?.salary}dt</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li> Langues</li>
                  <li> {job?.Languages}</li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="listdetails">
                  <li>Employes Needed</li>
                  <li>{job?.employees_needed}</li>
                </ul>
              </Col>

              <Col sm={4}>
                <button onClick={deleteJobEvent}>Delete</button>
              </Col>
              <Col sm={4}>
                <Link
                  to={`/jobupdate/${job?._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <a href="jobupdate" class="jobtitle">
                    Update
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </article>
    </div>
  );
}

export default JobInformation;
