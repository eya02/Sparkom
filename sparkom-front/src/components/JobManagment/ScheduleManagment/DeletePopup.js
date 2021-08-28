import { useFormik } from "formik";
import React from "react";
import {
  deleteschedule,
  selectschedules,
  setErrors,
} from "../../../store/slices/schedule";
import * as Yup from "yup";
import { queryApi } from "../../../utils/queryApi";
import { useDispatch, useSelector } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DeletePopup(props) {
  console.log(props, "propssssssss");
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
  };

  const [Schedule] = useSelector(selectschedules);

  /*const deleteScheduleEvent = async () => {
    const [err] = await queryApi("Schedule/deleteschedule/" + job._id, {}, "DELETE");
    if (err) {
    dispatch(setErrors(err));
    console.log(err);
    } else {
    dispatch(deleteJob(job._id));
    history.push("/findjob");
    }
    };*/

  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      const [err] = await queryApi(
        "Schedule/deleteschedule/" + values.id,
        {},
        "DELETE"
      );
      if (err) {
        dispatch(setErrors(err));
        console.log(err);
      } else {
        dispatch(deleteschedule(values.id));
      }
    },
  });

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div
              className="modal-dialog window-popup create-event"
              role="document"
            >
              <div className="modal-content">
                <a
                  href="#top"
                  className="close icon-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <svg className="olymp-close-icon">
                    <use xlinkHref="./assets/svg-icons/sprites/icons.svg#olymp-close-icon" />
                  </svg>
                </a>
                <div className="modal-header">
                  <h6 className="title">RDV Form</h6>
                </div>
                <div className="modal-body">
                  <div className="form-group label-floating">
                    <label className="control-label">Subject</label>

                    <select
                      id="id"
                      name="id"
                      value={formik.values.id}
                      onChange={formik.handleChange}
                    >
                      <option label="Select User" />
                      {Schedule.map((sub) => (
                        <option value={sub._id} label={sub.Subject} />
                      ))}
                    </select>
                  </div>

                  <button
                    className="btn btn-breez btn-lg full-width"
                    type="submit"
                  >
                    Remove RDV
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </MuiPickersUtilsProvider>
    </>
  );
}

const yupSchema = Yup.object({});

export default DeletePopup;
