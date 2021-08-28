import "date-fns";
import React from "react";
import "../../../assets/css/Jobs.css";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function FilterDate() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-04-06T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="Starting Date"
            label="Starting Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default FilterDate;
