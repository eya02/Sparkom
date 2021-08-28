import { TextField } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  selectCompanies,
  updateCompany,
  deleteCompany,
  fetchCompanies,
} from "../../../store/slices/company";
import { useDispatch, useSelector } from "react-redux";
import { activeUserSelector } from "../../../store/slices/auth";
import { queryApi } from "../../../utils/queryApi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import NavBar from "../../NavBar/NavBar";

function Companyinfos() {
  const history = useHistory();
  const [Compdetails, setCompdetails] = useState(false);
  const dispatch = useDispatch();
  const [companies] = useSelector(selectCompanies);
  const activeUser = useSelector(activeUserSelector);
  useEffect(() => {
    dispatch(fetchCompanies());
    const comp = companies.filter(
      (comp) => comp.company_owner == activeUser._id
    )[0];
    if (!comp) {
      history.push("/me");
      return;
    }
    setCompdetails(comp);
  }, []);

  const deleteCompanyEvent = async () => {
    await queryApi("company/deletecompany/" + Compdetails._id, {}, "DELETE");
    // dispatch(deleteCompany(Compdetails));
    history.push("/me");
  };

  const [, setError] = useState({ visible: false, message: "" });
  const formik = useFormik({
    initialValues: Compdetails,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [res, err] = await queryApi(
        "company/updatecompany/" + Compdetails._id,
        values,
        "PATCH",
        false
      );
      if (err) {
        setError({
          visible: true,
          message: err,
        });
      } else {
        dispatch(updateCompany(res));
        history.push("/me");
      }
    },
  });

  return (
    <>
      <NavBar />
      <div className="main-header">
        <div className="content-bg-wrap bg-events" />
        <div className="container">
          <div className="row">
            <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
              <div className="main-header-content">
                <h1>Company Informations</h1>
                <p>Update Your Company informations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {/*first Column*/}
        <form onSubmit={formik.handleSubmit}>
          <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="form-group label-floating">
              <TextField
                className="is-invalid"
                id="company_name"
                name="company_name"
                label={Compdetails.company_name}
                variant="outlined"
                value={formik.values.company_name}
                helpertext={
                  formik.touched.company_name && formik.errors.company_name
                }
                error={
                  formik.touched.company_name &&
                  Boolean(formik.errors.company_name)
                }
                onChange={formik.handleChange}
                fullWidth
              />
            </div>

            <div className="form-group label-floating">
              <TextField
                className="is-invalid"
                id="company_details"
                name="company_details"
                label={Compdetails.company_details}
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
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          {/* Column 2 Start */}
          <div className="col-12 col-sm-6 col-md-6">
            <button className="btn btn-primary btn-lg full-width">
              Save all Changes
            </button>
          </div>
        </form>
        <div className="col-12 col-sm-6 col-md-6">
          <button
            className="btn btn-secondary btn-lg full-width"
            onClick={deleteCompanyEvent}
          >
            Delete my Company
          </button>
        </div>
      </Container>
    </>
  );
}

const yupSchema = Yup.object({});
export default Companyinfos;
