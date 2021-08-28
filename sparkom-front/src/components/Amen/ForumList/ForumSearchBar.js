import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const style1 = {
  border: 0,
  color: "#fff",
  background: "#236aed",
};

function ForumSearchBar() {
  const classes = useStyles();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <div className="h6 title">Questions List</div>
                <div className="align-right">
                  <FormControl className={classes.margin}>
                    <BootstrapInput
                      id="demo-customized-textbox"
                      placeholder="Search..."
                    />
                  </FormControl>
                  <a href="addQuestion" className="btn btn-blue btn-md">
                    Add Question
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumSearchBar;
