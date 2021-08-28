import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    resume: null,
  },
  reducers: {
    populateResume(state, action) {
      state.resume = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    updateResume(state, action) {
      state.resume = action.payload;
    },
  },
});

//******** Selectors *************************/

export const fetchProfile = () => async (dispatch) => {
  const [res, error] = await queryApi("profile/me");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateResume(res));
  }
};

export const resumeSelector = (state) => state.resume.resume;

export const { updateResume, setErrors, populateResume } = resumeSlice.actions;
export default resumeSlice.reducer;
