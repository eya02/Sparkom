import LandingPage from "./LandingPage";
import BusinessIcon from "@material-ui/icons/Business";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";

import { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import { FormControl, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";
/*********************************************************************** */
export default function CompanySignup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LandingPage>
      <div className="registration-login-form">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <Link to="/signup" className="nav-link active">
              <svg className="olymp-register-icon c-primary">
                <PersonAddOutlinedIcon />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/company" className="nav-link">
              <svg className="olymp-register-icon ">
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
            <form className="content">
              <div className="row">
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="compname"
                      label="Company Name"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="email"
                      label="Company Email"
                      variant="outlined"
                      type="email"
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
                        labelWidth={70}
                      />
                    </FormControl>
                  </div>
                  {/** Adress */}
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="compaddress"
                      label="Company Address"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </div>
                {/** */}

                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="city"
                      label="City / Province"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      id="pcode"
                      label="Zip/Postal Code"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </div>
                {/** Phone Number*/}
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <MuiPhoneNumber
                    defaultCountry={"tn"}
                    variant="outlined"
                    label="Phone Number"
                    onChange=""
                    fullWidth
                  />

                  <div className="form-group label-floating is-empty "></div>
                  <a href="#top" className="btn btn-primary btn-lg full-width">
                    Complete Registration!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LandingPage>
  );
}
