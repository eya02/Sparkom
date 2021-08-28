import React, { useState } from "react";
import { FormControl, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import SweetAlert from "../SweetAlert";
import { useDispatch } from "react-redux";
import { queryApi } from "../../utils/queryApi";
import { updateUser } from "../../store/slices/auth";
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password, password2);
    if (password !== password2) {
      SweetAlert("Error !", "Password Mismatch", "error");
    } else {
      const [res, err] = await queryApi("users", { password }, "PATCH");
      if (err) {
        SweetAlert("Error !", err, "error");
      } else {
        dispatch(updateUser(res));
        SweetAlert(
          "Password Updated !",
          "Password Updated Successfully",
          "success"
        );
        setPassword("");
        setPassword2("");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="form-group label-floating"></div>
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating is-empty">
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                New Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                labelWidth={110}
              />
            </FormControl>
          </div>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating is-empty">
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="password2"
                type={showPassword2 ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword2(!showPassword2)}
                      edge="end"
                    >
                      {showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                labelWidth={130}
              />
            </FormControl>
          </div>
        </div>

        <div className="col col-lg-12 col-sm-12 col-sm-12 col-12"></div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button
            type="restore"
            className="btn btn-secondary btn-lg full-width"
          >
            Restore all Attributes
          </button>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button type="submit" className="btn btn-primary btn-lg full-width">
            Save all Changes
          </button>
        </div>
      </div>
    </form>
  );
}
