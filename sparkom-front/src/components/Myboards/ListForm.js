import React from "react";
import TextField from "@material-ui/core/TextField";

import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { queryApi } from "../../utils/queryApi";
//**************************************************************************** */
export default function Form2(props) {
  const [, setError] = useState({ visible: false, message: "" });

  const formik = useFormik({
    initialValues: {
      list_name: "",
      order: 0,
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [res, err] = await queryApi(
        "lists/add/" + props.board_id,
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
        window.location.reload(false);
        //history.push("/ShowBoard");

        console.log(res);
      }
    },
  });

  return (
    <div style={style.container}>
      <div>
        {/* Nav tabs */}

        {/* Tab panes */}
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="home"
            role="tabpanel"
            data-mh="log-tab"
          >
            <div className="title h6">Add a list</div>
            <form className="content" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div>
                    <TextField
                      id="list_name"
                      label="List name"
                      variant="outlined"
                      value={formik.values.list_name}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.list_name &&
                        Boolean(formik.errors.list_name)
                      }
                      helperText={
                        formik.touched.list_name && formik.errors.list_name
                      }
                      fullWidth
                    />
                  </div>
                </div>

                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group label-floating is-empty "></div>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const style = {
  container: {
    backgroundColor: "white",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: 180,
    marginRight: 8,
  },
};
const yupSchema = Yup.object({
  list_name: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});
