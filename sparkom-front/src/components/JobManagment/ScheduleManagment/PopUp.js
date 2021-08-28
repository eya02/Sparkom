import { useFormik } from "formik";
import React from "react";
import { addschedule } from "../../../store/slices/schedule";
import * as Yup from "yup";
import { queryApi } from "../../../utils/queryApi";
import { useDispatch, useSelector } from "react-redux";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { activeUserSelector } from "../../../store/slices/auth";
import TextField from "@material-ui/core/TextField";
function PopUp(props) {
  console.log(props, "propssssssss");
  const dispatch = useDispatch();
  const activeUser = useSelector(activeUserSelector);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());
  const [appUser, setAppUser] = React.useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleStartChange = (date) => {
    setStartTime(date);
  };
  const handleEndChange = (date) => {
    setEndTime(date);
  };
  const handleAppUserChange = (data) => {
    setAppUser(data.target.value);
  };

  const initialValues = {
    StartTime: "",
    EndTime: "",
    User_id: activeUser._id,
    Applicant_id: "",
    Subject: "",
  };

  var gapi = window.gapi;
  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID =
    "1093621710306-elegcmtolg6jrv17n2di3bbronme9eti.apps.googleusercontent.com";
  var API_KEY = "AIzaSyDhzH3S0DwYDzr2-vvt3piHXTm8KmozhnQ";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const formik = useFormik({
    initialValues,
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      let ssdate = new Date(selectedDate);
      let ssStart = new Date(startTime);
      let ssEnd = new Date(endTime);
      values.StartTime = new Date(
        ssdate.getFullYear(),
        ssdate.getMonth(),
        ssdate.getDate(),
        ssStart.getHours(),
        ssStart.getMinutes()
      );
      values.EndTime = new Date(
        ssdate.getFullYear(),
        ssdate.getMonth(),
        ssdate.getDate(),
        ssEnd.getHours(),
        ssEnd.getMinutes()
      );
      values.Applicant_id = appUser;

      const [res] = await queryApi("Schedule/", values, "POST", false);

      dispatch(addschedule(res));
      gapi.load("client:auth2", () => {
        console.log("loaded client");

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });

        gapi.client.load("calendar", "v3", () => console.log("bam!"));

        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            console.log("wtf");
            var event = {
              summary: values.Subject,
              description: "RDV",
              start: {
                dateTime: values.StartTime,
                timeZone: "America/Los_Angeles",
              },
              end: {
                dateTime: values.EndTime,
                timeZone: "America/Los_Angeles",
              },
              recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
              reminders: {
                useDefault: false,
                overrides: [
                  { method: "email", minutes: 24 * 60 },
                  { method: "popup", minutes: 10 },
                ],
              },
            };

            var request = gapi.client.calendar.events.insert({
              calendarId: "primary",
              resource: event,
            });

            request.execute((event) => {
              console.log(event);
              window.open(event.htmlLink);
            });
          });
      });
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
                  href="#"
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
                  <TextField
                    className="is-invalid"
                    id="Subject"
                    name="Subject"
                    label="Subject"
                    variant="outlined"
                    value={formik.values.Subject}
                    helpertext={formik.touched.Subject && formik.errors.Subject}
                    error={
                      formik.touched.Subject && Boolean(formik.errors.Subject)
                    }
                    onChange={formik.handleChange}
                    fullWidth
                  />
                  <div className="form-group label-floating">
                    <label className="control-label">Applicant Name</label>

                    <select
                      id="Applicant_id"
                      name="Applicant_id"
                      value={appUser}
                      onChange={handleAppUserChange}
                    >
                      <option label="Select User" />
                      {props.users.map((user) => (
                        <option value={user._id} label={user.username} />
                      ))}
                    </select>
                  </div>

                  <div className="form-group date-time-picker label-floating">
                    <KeyboardDatePicker
                      margin="normal"
                      id="date"
                      label="Appoinement Date"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </div>

                  <div className="form-group label-floating">
                    <KeyboardTimePicker
                      margin="normal"
                      id="StartTime"
                      value={startTime}
                      onChange={handleStartChange}
                      label="Start Time"
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </div>
                  <div className="form-group label-floating">
                    <KeyboardTimePicker
                      margin="normal"
                      id="EndTime"
                      value={endTime}
                      onChange={handleEndChange}
                      label="Ending Time"
                      KeyboardButtonProps={{
                        "aria-label": "change time",
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-breez btn-lg full-width"
                    type="submit"
                  >
                    Save RDV
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

export default PopUp;
