import { createSlice } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    schedule: [],
    selectedschedule: {},
    errors: "",
   
  },
  reducers: {
    populateschedule(state, action) {
      state.schedule = action.payload;
    },
    selectscheduled(state, action) {
      state.selectedschedule = action.payload;
    },

    addschedule: (state, action) => {
      const payload = action.payload;
      state.schedule.push(payload);
    },
    deleteschedule: (state, action) => {
      const payload = action.payload;
      const index = state.schedule.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.schedule.splice(index, 1);
      }
    },
    updateschedule: (state, action) => {
      const payload = action.payload;
      const index = state.schedule.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.schedule[index] = payload;
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});


/* selectors */
export const selectschedules = (state) => {
  return [state.schedule.schedule, state.schedule.errors];
};

export const selectSelectedschedule = (state) => {
    return state.schedule.selectedschedule;
    };
/* end selectors */
export const {
  populateschedule,
  setErrors,
  addschedule,
  deleteschedule,
  updateschedule,
  selectscheduled
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
