import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { useState } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function CardForm(props) {
  const card = props.dm;

  const [, setShowLoader] = useState(false);
  const style = { width: "250px" };

  const [, setError] = useState({ visible: false, message: "" });

  const history = useHistory();
  const [cardData, setCardData] = useState({
    due_date: new Date(),
  });
  const { due_date } = cardData;

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [res, err] = await queryApi(
        "cards/AddDescription/" + props.idc,
        values,
        "PUT",
        false
      );
      if (err) {
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
        console.log(err);
      } else {
        history.push("/EditCard/" + props.idc);
        console.log("hedhiii", res);
      }
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const [, err] = await queryApi(
      "cards/AddDueDate/" + props.idc,
      cardData,
      "PUT",
      false
    );
    if (err) {
      setShowLoader(false);
      setError({
        visible: true,
        message: err?.message,
      });
    } else {
    }
  };

  const members = (idd) => {
    history.replace("/CardMembers/" + props.idc + "/" + card.list_id);
    console.log(history);
  };
  const lists = (idd) => {
    history.replace("/CardLists/" + props.idc + "/" + card.list_id);
    console.log(history);
  };
  return (
    <div class="ui-block">
      <div class="ui-block-title">
        <p>
          <h6 class="title">
            <i class="far fa-credit-card"></i> {card.Card_name}
          </h6>{" "}
          {/*in<a href="#"> Test</a> list*/}
        </p>
      </div>

      <div class="ui-block-content">
        <div class="row">
          <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating">
              <form className="content" onSubmit={formik.handleSubmit}>
                <h7>
                  <i class="fas fa-align-left" /> Description :
                </h7>
                <br />
                {card.Description != null ? (
                  <h8> Current Description : {card.Description}</h8>
                ) : (
                  <h8></h8>
                )}

                <TextareaAutosize
                  class="form-control"
                  aria-label="empty textarea"
                  placeholder="write here"
                  id="description"
                  label="description"
                  variant="outlined"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                  fullWidth
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-md full-width"
                  onClick={() => {
                    window.location.reload(false);
                  }}
                >
                  {" "}
                  {card.Description != null
                    ? "Update Description"
                    : "Add Description"}{" "}
                </button>
              </form>
            </div>

            {/*<div class="form-group label-floating">
              <h7>
                <i class="fas fa-comments"></i> Activity
              </h7>
              <input
                class="form-control"
                placeholder="add a comment"
                type="email"
              />
                </div>*/}
          </div>

          <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
            <div class="form-group label-floating" style={{ float: "right" }}>
              <h6>Add to card</h6>
              <button
                onClick={() => members(card._id)}
                class="btn btn-smoke btn-md btn-light-bg"
                style={style}
              >
                {" "}
                <i class="fas fa-user"></i> Members
              </button>
              <br />
 

              <br />
              {/*<a
                href="#"
                class="btn btn-smoke btn-md btn-light-bg"
                style={style}
              >
                {" "}
                <i class="fas fa-clock"></i> Due date
              </a>*/}

              <form className="content" onSubmit={handleSubmit}>
                <div className="form-group date-time-picker label-floating">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div
                      className="form-group label-floating btn btn-smoke "
                      style={style}
                    >
                      <KeyboardDatePicker
                        inputVariant="outlined"
                        label="Due Date"
                        format="MM/dd/yyyy"
                        value={due_date}
                        onChange={(e) =>
                          setCardData({ ...cardData, due_date: e })
                        }
                        fullWidth
                      />
                      <button
                        type="submit"
                        className="btn btn-primary btn-s "
                        onClick={() => {
                          window.location.reload(false);
                        }}
                      >
                        {card.Due_date != null ? "Update Date" : "Add Date"}
                      </button>
                    </div>
                  </MuiPickersUtilsProvider>
                </div>
              </form>

              {/*<a
                href="#"
                class="btn btn-smoke btn-md btn-light-bg"
                style={style}
              >
                {" "}
                <i class="fas fa-paperclip"></i> Attachment
              </a>*/}
              <br />
              <br />
              <h6>Action</h6>

              <button
                class="btn btn-smoke btn-md btn-light-bg"
                style={style}
                onClick={() => lists(card._id)}
              >
                <i class="fas fa-arrow-alt-circle-right"></i> Move
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const yupSchema = Yup.object({
  description: Yup.string()
    .min(3, "Minimum 3 caractéres")
    .max(80, "Maximum 80 caractéres")
    .required("Champs requis!"),
});
