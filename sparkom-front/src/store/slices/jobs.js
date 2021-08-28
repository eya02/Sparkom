import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { queryApi } from "../../utils/queryApi";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    selectedJob: {},
    errors: "",
  },
  reducers: {
    populateJobs(state, action) {
      state.jobs = action.payload;
    },
    selectJob(state, action) {
      state.selectedJob = action.payload;
    },

    addJob: (state, action) => {
      const payload = action.payload;
      state.jobs.push(payload);
    },
    deleteJob: (state, action) => {
      const payload = action.payload;
      const index = state.jobs.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.jobs.splice(index, 1);
      }
    },
    updateJob: (state, action) => {
      const payload = action.payload;
      const index = state.jobs.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.jobs[index] = payload;
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

// export const fetchJobById = async (dispatch) => {
//   const [res, err] = await queryApi(`job/showbyId/${dispatch._id}`);

//   if (err) {
//     dispatch(setErrors(err));
//   } else {
//     console.log(res);
//     dispatch(selectJob(res));
//   }
// };

export const fetchJobById = createAsyncThunk(async (dispatch) => {
  const [res, err] = await queryApi(`job/showbyId/${dispatch._id}`);
  if (err) {
    dispatch(setErrors(err));
  } else {
    console.log(res);
    dispatch(selectJob(res));
  }
});

export const fetchJobs = async (dispatch) => {
  const [res, err] = await queryApi("job/showJob");
  if (err) {
    dispatch(setErrors(err));
  } else {
    dispatch(populateJobs(res));
  }

  console.log(res);
};

/* selectors */
export const selectJobs = (state) => {
  return [state.jobs.jobs, state.jobs.errors];
};

export const selectSelectedJob = (state) => {
  return state.jobs.selectedJob;
};
/* end selectors */
export const {
  populateJobs,
  setErrors,
  addJob,
  deleteJob,
  updateJob,
  selectJob,
} = jobsSlice.actions;
export default jobsSlice.reducer;
