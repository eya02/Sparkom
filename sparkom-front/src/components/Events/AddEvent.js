import React, { Fragment, useState } from "react";
import clsx from "clsx";

import {
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  Card,
  FormControl,
  FormHelperText,
  Button,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { useFormik } from "formik";
import { queryApi } from "../../utils/queryApi";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

const LivePreviewExample = () => {
  const classes = useStyles();
  const history = useHistory();

  const [, setError] = useState({ visible: false, message: "" });

  let { id } = useParams();

  const activeUser = useSelector(activeUserSelector);
  const formik = useFormik({
    initialValues: {
      registrationNumber: "",
      model: "",
      weightCapacity: 0,
      trunkVolume: 0,
    },
    onSubmit: async (values) => {
      console.log(values);
      history.replace("/ge/" + id);
      const [, err] = await queryApi(
        "group/addEvent/" + activeUser._id + "/" + id,
        values,
        "POST",
        true
      );

      if (err) {
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else history.replace("/allg");
    },
  });

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <form onSubmit={formik.handleSubmit}>
            <Card className="p-4 mb-4">
              <div className="font-size-lg font-weight-bold">Add Event</div>
              <Divider className="my-4" />
              <div>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-registration-number">
                    name{" "}
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-registration-number"
                    name="name"
                    onChange={formik.handleChange}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={130}
                  />
                </FormControl>

                <FormControl
                  className={clsx(classes.margin)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-weight">
                    description
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    name="description"
                    onChange={formik.handleChange}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={110}
                  />
                </FormControl>

                <FormControl
                  className={clsx(classes.margin)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-volume"></InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-volume"
                    name="Date"
                    type="date"
                    onChange={formik.handleChange}
                    labelWidth={90}
                  />
                </FormControl>

                <FormControl
                  className={clsx(classes.margin)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-volume">
                    address
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-volume"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    labelWidth={50}
                  />
                </FormControl>
                <div className="form-group text_box">
                  <label className="f_p text_c f_400">
                    {" "}
                    <strong>Upload your Profile picture : </strong>
                  </label>
                  <br />
                  <Input
                    id="fileinput"
                    type="file"
                    name="img"
                    onChange={(event) => {
                      formik.setFieldValue("img", event.target.files[0]);
                    }}
                  />
                  {formik.errors.image && formik.touched.image && (
                    <FormHelperText error={formik.errors.image}>
                      {formik.errors.image}
                    </FormHelperText>
                  )}
                </div>
              </div>
              <Button
                className="m-2 flex-end"
                variant="contained"
                color="primary"
                type="submit"
              >
                Add event
              </Button>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LivePreviewExample;
