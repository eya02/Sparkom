import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  fetchJobById,
  selectSelectedJob,
  setErrors,
  updateJob,
} from "../../../store/slices/jobs";
import { queryApi } from "../../../utils/queryApi";
import * as Yup from "yup";

import { Container, TextField } from "@material-ui/core";

import { selectCompanies, fetchCompanies } from "../../../store/slices/company";

import { activeUserSelector } from "../../../store/slices/auth";
import { useFormik } from "formik";
import NavBar from "../../NavBar/NavBar";

function JobUpdate() {
  const [, setShowLoader] = useState(false);
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  const dispatch = useDispatch();
  const job = useSelector(selectSelectedJob);
  const [, setCompdetails] = useState(false);
  const [companies] = useSelector(selectCompanies);

  useEffect(() => {
    dispatch(fetchJobById);
    dispatch(fetchCompanies());
    setCompdetails(
      companies.filter((comp) => comp.company_owner == activeUser._id)
    );
  }, [dispatch, companies, activeUser]);

  const formik = useFormik({
    initialValues: job,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log(values, currentFile, "-----------------");
      values.image = currentFile;
      values.company_id = companies[0]._id;

      setShowLoader(true);
      const [res, err] = await queryApi(
        "job/updateJob/" + job._id,
        values,
        "PATCH",
        false
      );
      if (err) {
        setShowLoader(false);
        setErrors({
          visible: true,
          message: err,
        });
      } else {
        dispatch(updateJob(res));
        history.push("/findjob");
      }
    },
  });
  const [currentFile] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <div className="main-header">
          <div className="content-bg-wrap bg-events" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Update Your Job offer</h1>
                  <p>Update Your Hiring offer !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Container>
          <form className="content" onSubmit={formik.handleSubmit}>
            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <h2 className="presentation-margin">Hiring Form</h2>
              <div className="ui-block">
                <div className="ui-block-content">
                  <div className="row">
                    <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="title"
                          name="title"
                          label={job.title}
                          variant="outlined"
                          value={formik.values.title}
                          helpertext={
                            formik.touched.title && formik.errors.title
                          }
                          error={
                            formik.touched.title && Boolean(formik.errors.title)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                        ,
                      </div>
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="description"
                          name={job.description}
                          label="Description"
                          variant="outlined"
                          value={formik.values.description}
                          helpertext={
                            formik.touched.description &&
                            formik.errors.description
                          }
                          error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </div>

                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="contract"
                          name="contract"
                          label={job.contract}
                          variant="outlined"
                          value={formik.values.contract}
                          helpertext={
                            formik.touched.contract && formik.errors.contract
                          }
                          error={
                            formik.touched.contract &&
                            Boolean(formik.errors.contract)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </div>
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="salary"
                          name="salary"
                          label={job.salary}
                          variant="outlined"
                          value={formik.values.salary}
                          helpertext={
                            formik.touched.salary && formik.errors.salary
                          }
                          error={
                            formik.touched.salary &&
                            Boolean(formik.errors.salary)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </div>
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="experience"
                          name="experience"
                          label={job.experience}
                          variant="outlined"
                          value={formik.values.experience}
                          helpertext={
                            formik.touched.experience &&
                            formik.errors.experience
                          }
                          error={
                            formik.touched.experience &&
                            Boolean(formik.errors.experience)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </div>
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="study"
                          name="study"
                          label={job.study}
                          variant="outlined"
                          value={formik.values.study}
                          helpertext={
                            formik.touched.study && formik.errors.study
                          }
                          error={
                            formik.touched.study && Boolean(formik.errors.study)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </div>
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="Languages"
                          name="Languages"
                          label={job.Languages}
                          variant="outlined"
                          value={formik.values.Languages}
                          helpertext={
                            formik.touched.Languages && formik.errors.Languages
                          }
                          error={
                            formik.touched.Languages &&
                            Boolean(formik.errors.Languages)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </div>
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="Responsibility"
                          name="Responsibility"
                          label={job.Responsibility}
                          variant="outlined"
                          value={formik.values.Responsibility}
                          helpertext={
                            formik.touched.Responsibility &&
                            formik.errors.Responsibility
                          }
                          error={
                            formik.touched.Responsibility &&
                            Boolean(formik.errors.Responsibility)
                          }
                          onChange={formik.handleChange}
                          fullWidth
                        />
                      </div>
                      <div className="form-group label-floating is-empty">
                        <TextField
                          className="is-invalid"
                          id="employees_needed"
                          name="employees_needed"
                          label={job.employees_needed}
                          variant="outlined"
                          value={formik.values.employees_needed}
                          helpertext={
                            formik.touched.employees_needed &&
                            formik.errors.employees_needed
                          }
                          error={
                            formik.touched.employees_needed &&
                            Boolean(formik.errors.employees_needed)
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
                        Update Your Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}
const yupSchema = Yup.object({
  title: Yup.string()
    .min(8, "Minimum 3 caractéres")
    .max(40, "Maximum 40 caractéres")
    .required("Champs requis!"),
  description: Yup.string()
    .min(7, "Minimum 7 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
  contract: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(5, "Maximum 4 caractéres")
    .required("Champs requis!"),
  salary: Yup.number().required("Champs requis!"),
  experience: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(5, "Maximum 4 caractéres")
    .required("Champs requis!"),
  study: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(10, "Maximum 10 caractéres")
    .required("Champs requis!"),
  Languages: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(10, "Maximum 10 caractéres")
    .required("Champs requis!"),
  Responsibility: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(10, "Maximum 10 caractéres")
    .required("Champs requis!"),
  employees_needed: Yup.number().required("Champs requis!"),
});
export default JobUpdate;
