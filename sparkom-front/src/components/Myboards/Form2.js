import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
//**************************************************************************** */
export default function Form2() {
  const activeUser = useSelector(activeUserSelector);

  const currencies = [
    {
      value: true,
      label: "public",
    },
    {
      value: false,
      label: "private",
    },
  ];
  const [, setError] = useState({ visible: false, message: "" });
  const [currency, setCurrency] = React.useState(false);
  const handleChange = (event) => {
    setCurrency(event.target.value);
    console.log(currency);
    formik.values.is_public = currency;
    console.log(formik.values.is_public);
  };
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      board_name: "",
      is_public: "",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [res, err] = await queryApi(
        "boards/add/" + activeUser._id,
        values,
        "POST",
        false
      );
      if (err) {
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
        console.log(err);
      } else {
        history.push("/boards");
        console.log(res);
      }
    },
  });

  return (
    <div className="registration-login-form">
      {/* Nav tabs */}

      {/* Tab panes */}
      <div className="tab-content">
        <div
          className="tab-pane active"
          id="home"
          role="tabpanel"
          data-mh="log-tab"
        >
          <div className="title h6">Add a board</div>
          <form className="content" onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group label-floating is-empty">
                  <TextField
                    id="board_name"
                    label="Board Name"
                    variant="outlined"
                    value={formik.values.board_name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.Board_name &&
                      Boolean(formik.errors.board_name)
                    }
                    helperText={
                      formik.touched.board_name && formik.errors.board_name
                    }
                    fullWidth
                  />
                </div>
              </div>
              <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group label-floating is-empty">
                  {/*  <TextField
                      id="is_public"
                      label="Type"
                      variant="outlined"
                      value={formik.values.is_public[0]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.is_public &&
                        Boolean(formik.errors.is_public)
                      }
                      helperText={
                        formik.touched.is_public && formik.errors.is_public
                      }
                      fullWidth
                    />*/}

                  {/*<FormControl variant="outlined" fullWidth>
                      <InputLabel id="is_public">Type</InputLabel>
                      <Select
                        labelId="is_public-label"
                        id="is_public"
                        //onChange={(e) => setGender(e.target.value)}
                        value={formik.values.is_public[0]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.is_public && Boolean(formik.errors.is_public)
                        }
                        helperText={
                          formik.touched.is_public && formik.errors.is_public
                        }
                        label="is_public"
                        defaultValue=" "
                      >
                        {formik.values.is_public.map(
                          (option) => (
                            <MenuItem value={option} key={option}>
                              {option}
                            </MenuItem>
                          )
                          // <MenuItem key={option} value={option}>
                          //   {option.name}
                          // </MenuItem>
                        )}
                        <MenuItem value="public">Public</MenuItem>
                        <MenuItem value="private">private</MenuItem>
                      </Select>
                    </FormControl>*/}

                  <TextField
                    id="standard-select-currency"
                    select
                    label="Type"
                    value={formik.values.is_public}
                    onChange={handleChange}
                    helperText="Please select the type"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>

              <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="form-group label-floating is-empty "></div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg full-width"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const yupSchema = Yup.object({
  board_name: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});
