import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { addJob } from "../../../store/slices/jobs";
import { queryApi } from "../../../utils/queryApi";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { activeUserSelector } from "../../../store/slices/auth";

import { selectCompanies, fetchCompanies } from "../../../store/slices/company";

function HiringForm() {
  const activeUser = useSelector(activeUserSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const [, setShowLoader] = useState(false);
  const [, setError] = useState({ visible: false, message: "" });

  const [Compdetails, setCompdetails] = useState(false);
  const [companies] = useSelector(selectCompanies);

  useEffect(() => {
    dispatch(fetchCompanies());
    setCompdetails(
      companies.filter((comp) => comp.company_owner == activeUser._id)[0]
    );
  }, []);

  const initialValues = {
    title: "",
    description: "",
    country: "",
    startingdate: "",
    contract: "",
    salary: "",
    experience: "",
    study: "",
    startingtime: "",
    endingtime: "",
    Languages: "",
    Responsibility: "",
    employees_needed: "",
    image: "",
    company_id: Compdetails._id,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      console.log(values, currentFile, "-----------------", Compdetails._id);
      values.image = currentFile;
      values.company_id = Compdetails._id;

      setShowLoader(true);
      const [res, err] = await queryApi("job/", values, "POST", true);
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: err,
        });
      } else {
        dispatch(addJob(res));
        history.push("/findjob");
      }
    },
  });
  const [currentFile, setCurrentFile] = useState(0);
  const selectFile = (event) => {
    setCurrentFile(event.target.files[0]);
  };

  return (
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
                        label="Title"
                        variant="outlined"
                        value={formik.values.title}
                        helpertext={formik.touched.title && formik.errors.title}
                        error={
                          formik.touched.title && Boolean(formik.errors.title)
                        }
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </div>
                    <div className="form-group label-floating is-empty">
                      <TextField
                        className="is-invalid"
                        id="description"
                        name="description"
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
                        label="Contract"
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
                        label="Salary"
                        variant="outlined"
                        value={formik.values.salary}
                        helpertext={
                          formik.touched.salary && formik.errors.salary
                        }
                        error={
                          formik.touched.salary && Boolean(formik.errors.salary)
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
                        label="Experience"
                        variant="outlined"
                        value={formik.values.experience}
                        helpertext={
                          formik.touched.experience && formik.errors.experience
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
                        label="Study"
                        variant="outlined"
                        value={formik.values.study}
                        helpertext={formik.touched.study && formik.errors.study}
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
                        label="Languages"
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
                        label="Responsibility"
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
                        label="employees_needed"
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
                <div className="row mb30">
                  <div className="col col-lg-12">
                    <h6>Upload Logo</h6>
                  </div>
                  <div className="col col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="file-upload">
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        label="Image"
                        variant="outlined"
                        accept="image/*"
                        onChange={selectFile}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary full-width"
                    >
                      Hire Now
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

export default HiringForm;

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
