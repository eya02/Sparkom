import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import LandingPage from "./LandingPage";
import SweetAlert from "./SweetAlert";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { queryApi } from "../utils/queryApi";
import { updateUser } from "../store/slices/auth";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const [res, err] = await queryApi("users/forgot", { email }, "POST");
    if (err) {
      SweetAlert("Error !", err, "error");
      console.log(err);
    } else {
      console.log(res);
      SweetAlert(
        "check your Phone !",
        "Verification code has been sent to your phone",
        "success"
      );
      dispatch(updateUser(res));
      history.push("/verif");
    }
  };
  return (
    <LandingPage>
      <div className="registration-login-form pl-0 " style={{ minHeight: 200 }}>
        <div className="title h6">
          <b>Forgot Password</b>
        </div>
        <form className="content" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="form-group label-floating is-empty">
                <TextField
                  className="is-invalid"
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary full-width"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </LandingPage>
  );
}
