import React from "react";
import { useDispatch } from "react-redux";
import LandingPage from "./LandingPage";
import BusinessIcon from "@material-ui/icons/Business";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FormControl, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputAdornment from "@material-ui/core/InputAdornment";
import { Link, useHistory } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
import { login } from "../store/slices/auth";
import SweetAlert from "./SweetAlert";
//**************************************************************************** */
export default function Register() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    gender: "",
    email: "",
    password: "",
    birthday: new Date(),
    phone: "",
  });

  const {
    firstname,
    lastname,
    username,
    gender,
    email,
    password,
    birthday,
    phone,
  } = userData;

  const handleChange = (e) => {
    console.log(e.target);
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const [res, err] = await queryApi("users", userData, "POST", false);
    if (err) {
      SweetAlert("Error!", err, "error");
    } else {
      dispatch(login(res));
      history.push("/me");
    }
  };

  return (
    <LandingPage>
      <div className="registration-login-form">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <Link to="/signup" className="nav-link active" role="tab">
              <svg className="olymp-register-icon ">
                <PersonAddOutlinedIcon />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/company" className="nav-link" role="tab">
              <svg className="olymp-register-icon c-primary">
                <BusinessIcon />
              </svg>
            </Link>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            data-mh="log-tab"
          >
            <div className="title h6">Register to Sparkom</div>

            <form className="content" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="firstname"
                      label="First Name"
                      variant="outlined"
                      value={firstname}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="lastname"
                      label="Last Name"
                      variant="outlined"
                      value={lastname}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                </div>

                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="username"
                      label="Username"
                      variant="outlined"
                      value={username}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    {/** Gender*/}
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="genderLabel">Gender</InputLabel>
                      <Select
                        labelId="gender"
                        id="gender"
                        //onChange={(e) => setGender(e.target.value)}
                        value={gender.value}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            gender: e.target.value,
                          })
                        }
                        label="Gender"
                      >
                        <MenuItem value="m">Male</MenuItem>
                        <MenuItem value="f">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="email"
                      label="Your Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <div className="form-group label-floating is-empty ">
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
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
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        value={password}
                        onChange={handleChange}
                        labelWidth={70}
                      />
                    </FormControl>
                  </div>
                  <div className="form-group date-time-picker label-floating">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <div className="form-group label-floating">
                        <KeyboardDatePicker
                          inputVariant="outlined"
                          label="Birthday"
                          format="MM/dd/yyyy"
                          value={birthday}
                          onChange={(e) =>
                            setUserData({ ...userData, birthday: e })
                          }
                          fullWidth
                        />
                      </div>
                    </MuiPickersUtilsProvider>
                  </div>

                  {/** Phone Number*/}

                  <MuiPhoneNumber
                    defaultCountry={"tn"}
                    id="phone"
                    variant="outlined"
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setUserData({ ...userData, phone: e })}
                    fullWidth
                  />

                  <div className="form-group label-floating is-empty "></div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg full-width"
                  >
                    Complete Registration!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LandingPage>
  );
}
