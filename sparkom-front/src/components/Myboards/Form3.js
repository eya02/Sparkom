import React from "react";


import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";
import { FormControl } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { queryApi } from "../../utils/queryApi";
import { activeUserSelector } from "../../store/slices/auth";
import { useSelector } from "react-redux";
//**************************************************************************** */
export default function Form3() {
  const history = useHistory();
  const activeUser = useSelector(activeUserSelector);
  
  const [, setShowLoader] = useState(false);
  
  const [userData, setUserData] = useState({
    board_name: "",
    is_public: "",
  });

  const { board_name, is_public } = userData;

  const [, setError] = useState({ visible: false, message: "" });

  const handleChange = (e) => {
    console.log(e.target);
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const [, err] = await queryApi(
      "boards/add/" + activeUser._id,
      userData,
      "POST",
      false
    );
    if (err) {
      setShowLoader(false);
      setError({
        visible: true,
        message: err?.message,
      });
    } else {
      history.push("/boards");
    }
  };

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

          <form className="content" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group label-floating is-empty">
                  <TextField
                    id="board_name"
                    label="Board Name"
                    variant="outlined"
                    value={board_name}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
              </div>

              <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group label-floating is-empty">
                  {/** Gender*/}
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="TypeLabel">Type</InputLabel>
                    <Select
                      labelId="Type"
                      id="Type"
                      //onChange={(e) => setGender(e.target.value)}
                      value={is_public.value}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          is_public: e.target.value,
                        })
                      }
                      label="type"
                    >
                      <MenuItem value="true">public</MenuItem>
                      <MenuItem value="false">private</MenuItem>
                    </Select>
                  </FormControl>
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
