import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Card } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { queryApi } from "../../utils/queryApi";
export default function ActionButtonL(props) {
  const [, setError] = useState({ visible: false, message: "" });

  const [state, setState] = useState({
    FormOpen: false,
    text: "",
  });

  const openForm = () => {
    setState({
      FormOpen: true,
    });
  };
  const closeForm = (e) => {
    setState({
      FormOpen: false,
    });
  };

  const formik = useFormik({
    initialValues: {
      card_name: "",
      order: 0,
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [res, err] = await queryApi(
        "cards/add/" + props.list_id,
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
  const renderAddButton = () => {
    //const {list} = this.props;
    const buttontext = "Add another card";
    const buttonOpacity = 1;
    const buttonColor = "inherit";
    const buttonBackgground = "inherit";

    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonOpacity,
          color: buttonColor,
          backgroundColor: buttonBackgground,
        }}
      >
        <p>+ {buttontext}</p>
      </div>
    );
  };

  const renderForm = () => {
    //const { list } = this.props;

    return (
      <div>
        <form className="content" onSubmit={formik.handleSubmit}>
          <Card
            style={{
              overflow: "visible",
              minHeight: 80,
              minWidth: 272,
              padding: "6px 8px 2px",
            }}
          >
            <TextField
              id="card_name"
              label="Card name"
              variant="outlined"
              value={formik.values.card_name}
              onChange={formik.handleChange}
              error={
                formik.touched.card_name && Boolean(formik.errors.card_name)
              }
              helperText={formik.touched.card_name && formik.errors.card_name}
              fullWidth
            />
          </Card>
          <div style={styles.formButtonGroup}>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <CloseIcon
              style={{ marginLeft: 8, cursor: "pointer" }}
              onClick={closeForm}
            ></CloseIcon>
          </div>
        </form>
      </div>
    );
  };

  return state.FormOpen ? renderForm() : renderAddButton();
}
const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    padding: 10,
  },
  formButtonGroup: {
    marginTop: "flex",
    alignItems: "center",
  },
};

const yupSchema = Yup.object({
  card_name: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});
