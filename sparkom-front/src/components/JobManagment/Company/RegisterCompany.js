import React from "react";
import NavBar from "../../NavBar/NavBar";
import RegisterForm from "./RegisterForm";
function RegisterCompany() {
  return (
    <div>
      <NavBar />
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Register Your Company</h1>
                <p>Add your company here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RegisterForm />
    </div>
  );
}

export default RegisterCompany;
