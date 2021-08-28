import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { addCompany } from "../../../store/slices/company";
import { queryApi } from "../../../utils/queryApi";
import * as Yup from "yup";
import { activeUserSelector } from "../../../store/slices/auth";
import { useHistory } from "react-router-dom";
function RegisterForm() {
  const activeUser = useSelector(activeUserSelector);
  const dispatch = useDispatch();
  const [, setShowLoader] = useState(false);
  const [, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  const initialValues = {
    company_name: "",
    company_details: "",
    company_owner: `${activeUser._id}`,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      setShowLoader(true);
      console.log(values);
      const [res, err] = await queryApi("company/", values, "POST", false);
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: err,
        });
      } else {
        dispatch(addCompany(res));
        history.push("/me");
        console.log(res);
      }
    },
  });
  return (
    <div>
      <Container>
        <form className="content" onSubmit={formik.handleSubmit}>
          <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
            <h2 className="presentation-margin">Company Registration</h2>
            <div className="ui-block">
              <div className="ui-block-content">
                <div className="row">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="company_name"
                        name="company_name"
                        label="Company name"
                        variant="outlined"
                        value={formik.values.company_name}
                        helpertext={
                          formik.touched.company_name &&
                          formik.errors.company_name
                        }
                        error={
                          formik.touched.company_name &&
                          Boolean(formik.errors.company_name)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="company_details"
                        name="company_details"
                        label="Company details"
                        variant="outlined"
                        value={formik.values.company_details}
                        helpertext={
                          formik.touched.company_details &&
                          formik.errors.company_details
                        }
                        error={
                          formik.touched.company_details &&
                          Boolean(formik.errors.company_details)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>

                    <div className="form-group label-floating is-empty"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary full-width"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

const yupSchema = Yup.object({
  company_name: Yup.string()
    .min(8, "Minimum 3 caractéres")
    .max(40, "Maximum 40 caractéres")
    .required("Champs requis!"),
  company_details: Yup.string()
    .min(7, "Minimum 7 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});

export default RegisterForm;
