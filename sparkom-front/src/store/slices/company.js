import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";
const companysSlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    selectedCompany: {},
    errors: "",
  },
  reducers: {
    populateCompanies(state, action) {
      state.companies = action.payload;
    },
    selectCompany(state, action) {
      state.selectedCompany = action.payload;
    },

    addCompany: (state, action) => {
      const payload = action.payload;
      state.companies.push(payload);
    },
    deleteCompany: (state, action) => {
      const payload = action.payload;
      const index = state.jobs.findIndex((item) => item._id === payload);
      if (index !== -1) {
        state.companies.splice(index, 1);
      }
    },
    updateCompany: (state, action) => {
      const payload = action.payload;
      const index = state.companies.findIndex(
        (item) => item._id === payload._id
      );
      if (index !== -1) {
        state.companies[index] = payload;
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
  },
});

export const fetchCompanies = () => async (dispatch) => {
  const [res, err] = await queryApi("company/showcompanies");
  if (err) {
    dispatch(setErrors(err));
  } else {
    dispatch(populateCompanies(res));
  }
};

export const selectCompanies = (state) => {
  return [state.companies.companies, state.companies.errors];
};

export const {
  populateCompanies,
  setErrors,
  updateCompany,
  deleteCompany,
  addCompany,
  selectCompany,
} = companysSlice.actions;
export default companysSlice.reducer;
