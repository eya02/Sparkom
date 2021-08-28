import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FormControl } from "@material-ui/core";
import { myProfileSelector, updateProfile } from "../../store/slices/profile";
import { activeUserSelector, updateUser } from "../../store/slices/auth";
import { queryApi } from "../../utils/queryApi";
import SweetAlert from "../SweetAlert";
//*****************************************************************/
const PersonalInformation = () => {
  const myProfileInfo = useSelector(myProfileSelector);
  const activeUser = useSelector(activeUserSelector);
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState(myProfileInfo);
  const [userData, setUserData] = useState(activeUser);
  console.log(profileData);
  const { bio, occupation } = profileData;
  const {
    firstname,
    lastname,
    username,
    email,
    phone,
    date_of_birth,
    gender,
  } = userData;

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "bio" || id === "occupation") {
      setProfileData({ ...profileData, [id]: value });
    } else {
      setUserData({ ...userData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profileData);
    console.log(userData);

    const [res, err] = await queryApi(
      "profile/me",
      { bio, occupation },
      "PATCH"
    );
    console.log(res, err);
    const [userRes, userErr] = await queryApi(
      "users",
      { firstname, lastname, username, email, phone, date_of_birth, gender },
      "PATCH"
    );
    if (err || userErr) {
      err
        ? SweetAlert("Error!", err, "error")
        : SweetAlert("Error!", userErr, "error");
    } else {
      SweetAlert(
        "Profile Updated !",
        "Profile Updated Successfully",
        "success"
      );
      dispatch(updateProfile(res));
      dispatch(updateUser(userRes));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/*first Column*/}
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating">
            <TextField
              id="firstname"
              label="FirstName"
              variant="outlined"
              color="primary"
              value={firstname}
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div className="form-group label-floating">
            <TextField
              id="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="form-group date-time-picker label-floating">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div className="form-group label-floating">
                <KeyboardDatePicker
                  id="date_of_birth"
                  inputVariant="outlined"
                  label="Birthday"
                  format="MM/dd/yyyy"
                  value={date_of_birth}
                  onChange={(e) =>
                    setUserData({ ...userData, date_of_birth: e })
                  }
                  fullWidth
                />
              </div>
            </MuiPickersUtilsProvider>
          </div>
        </div>
        {/* Column 2 Start */}
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating">
            <TextField
              id="lastname"
              label="LastName"
              variant="outlined"
              value={lastname}
              onChange={handleChange}
              fullWidth
            />
          </div>

          <div className="form-group label-floating">
            <TextField
              id="email"
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleChange}
              fullWidth
            />
          </div>

          <MuiPhoneNumber
            id="phone"
            variant="outlined"
            label="Phone Number"
            value={phone}
            onChange={(e) => setUserData({ ...userData, phone: e })}
            fullWidth
          />
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating">
            <TextField
              id="bio"
              label="Description"
              multiline
              rows={2}
              variant="outlined"
              value={bio}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="form-group label-floating is-empty">
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    gender: e.target.value,
                  })
                }
                label="Gender"
              >
                <MenuItem value="m">Male</MenuItem>
                <MenuItem value="f">Female</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="form-group label-floating">
            <TextField
              id="occupation"
              label="Occupation"
              variant="outlined"
              value={occupation}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>

        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button
            type="restore"
            className="btn btn-secondary btn-lg full-width"
          >
            Restore all Attributes
          </button>
        </div>
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <button type="submit" className="btn btn-primary btn-lg full-width">
            Save all Changes
          </button>
        </div>
      </div>
    </form>
  );
};
export default PersonalInformation;
