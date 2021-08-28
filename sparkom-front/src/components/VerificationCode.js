import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import LandingPage from "./LandingPage";
import SweetAlert from "./SweetAlert";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
import { activeUserSelector, login } from "../store/slices/auth";
export default function VerificationCode() {
  const [verifCode, setVerifCode] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { email } = useSelector(activeUserSelector);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [res, err] = await queryApi(
      "users/verif",
      { email, verif_code: verifCode },
      "POST"
    );
    if (err) {
      SweetAlert("Error !", "Invalid Verification Code", "error");
    } else {
      dispatch(login(res));
      history.push("/settings/changepwd");
    }
  };
  return (
    <LandingPage>
      <div className="registration-login-form pl-0 " style={{ minHeight: 200 }}>
        <div className="title h6">
          <b>Enter Your Verifiaction Code</b>
        </div>
        <form className="content" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="form-group label-floating is-empty">
                <TextField
                  className="is-invalid"
                  id="verifCode"
                  name="verifCode"
                  label="verification Code"
                  variant="outlined"
                  value={verifCode}
                  onChange={(e) => setVerifCode(e.target.value)}
                  fullWidth
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary full-width"
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </LandingPage>
  );
}
