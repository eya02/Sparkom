import { useFormik } from "formik";
import React from "react";
import { setErrors, addschedule } from "../../../store/slices/schedule";
import { queryApi } from "../../../utils/queryApi";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { activeUserSelector } from "../../../store/slices/auth";
import { useParams } from "react-router";

function Postuler() {
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const dispatch = useDispatch();
  const initialValues = {
    description: "",
    user: "",
    job_id: "",
  };
  const { id } = useParams();

  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      values.user = activeUser._id;
      values.job_id = id;
      const [res, err] = await queryApi("postedon/", values, "POST", false);
      if (err) {
        setErrors({
          visible: true,
          message: err,
        });
      } else {
        dispatch(addschedule(res));
        history.push("/findjob");
      }
    },
  });

  return (
    <div>
      <div className="applyform ">
        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            data-mh="log-tab"
          >
            <div className="title h6">Application Form</div>
            <form className="content" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <TextField
                      className="is-invalid"
                      id="description"
                      name="description"
                      label="Description"
                      variant="outlined"
                      value={formik.values.description}
                      helpertext={
                        formik.touched.description && formik.errors.description
                      }
                      error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                      }
                      onChange={formik.handleChange}
                      fullWidth
                    />
                  </div>
                </div>

                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary full-width"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="tab-pane"
            id="profile"
            role="tabpanel"
            data-mh="log-tab"
          >
            <div className="title h6">Login to your Account</div>
            <form className="content">
              <div className="row">
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Your Email</label>
                    <input className="form-control" placeholder type="email" />
                  </div>
                  <div className="form-group label-floating is-empty">
                    <label className="control-label">Your Password</label>
                    <input
                      className="form-control"
                      placeholder
                      type="password"
                    />
                  </div>
                  <div className="remember">
                    <div className="checkbox">
                      <label>
                        <input name="optionsCheckboxes" type="checkbox" />
                        Remember Me
                      </label>
                    </div>
                    <a href="#top" className="forgot">
                      Forgot my Password
                    </a>
                  </div>
                  <a href="#top" className="btn btn-lg btn-primary full-width">
                    Login
                  </a>
                  <div className="or" />
                  <a
                    href="#top"
                    className="btn btn-lg bg-facebook full-width btn-icon-left"
                  >
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                    Login with Facebook
                  </a>
                  <a
                    href="#top"
                    className="btn btn-lg bg-twitter full-width btn-icon-left"
                  >
                    <i className="fab fa-twitter" aria-hidden="true" />
                    Login with Twitter
                  </a>
                  <p>
                    Don’t you have an account? <a href="#top">Register Now!</a>{" "}
                    it’s really simple and you can start enjoing all the
                    benefits!
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const yupSchema = Yup.object({});

export default Postuler;
