import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { queryApi } from "../../utils/queryApi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateResume } from "../../store/slices/resume";

export default function ResumeGenerator() {
  const [profileUrl, setProfileUrl] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    const [res, err] = await queryApi(`profile/me/scrap?url=${profileUrl}`);
    if (err) {
      setShowLoader(false);
      console.log(err);
    } else {
      dispatch(updateResume(res));
      console.log(res);
      history.push("/resume");
    }
  };
  return (
    <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
      <form className="content" onSubmit={handleSubmit}>
        <div className="form-group label-floating">
          <TextField
            id="outlined-basic"
            label="Linkedin Profile URL"
            variant="outlined"
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            fullWidth
          />
        </div>

        {showLoader ? (
          <button
            class="btn btn-primary btn-lg full-width"
            type="button"
            disabled
          >
            <span
              class="spinner-border spinner-border-sm mr-3"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        ) : (
          <button type="submit" className="btn btn-primary btn-lg full-width">
            Generate Resume
          </button>
        )}
      </form>
    </div>
  );
}
