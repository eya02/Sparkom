import React from "react";
import logo from "../assets/img/logosparkom.png";
import { Link } from "react-router-dom";
export default function LandingPage({ children }) {
  return (
    <div className="landing-page">
      <div className="content-bg-wrap"></div>

      <div
        className="header--standard header--standard-landing"
        id="header--standard"
      >
        <div className="container">
          <div className="header--standard-wrap">
            <Link to="/" className="logo">
              <div className="img-wrap">
                <img src={logo} style={{ width: "200px" }} alt="Olympus" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-spacer--standard"></div>

      <div className="container">
        <div className="row display-flex">
          <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="landing-content">
              <h1>Welcome to the Biggest Social Network in the World</h1>
              <p>
                Welcome to Sparkom the Biggest Social Network in the World
                Connecting People from All over the world. Share you thoughts,
                write blog posts, show your favourite music via Stopify, earn
                badges and much more!
              </p>
              <Link to="/signup" className="btn  btn-md btn-border c-white ">
                Register Now!
              </Link>
            </div>
          </div>

          <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
