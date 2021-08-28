import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: [],
  },
  reducers: {
    populateQuiz(state, action) {
      state.quiz = action.payload;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    updateQuiz(state, action) {
      state.quiz = action.payload;
    },
  },
});

//******** Selectors *************************/

// export const fetchProfile = () => async (dispatch) => {
//   const [res, error] = await queryApi("profile/me");
//   if (error) {
//     dispatch(setErrors(error));
//   } else {
//     dispatch(populateResume(res));
//   }
// };

export const quizSelector = (state) => state.quiz.quiz;
export const badgesSelector = (state) => state.quiz.badges;

export const { populateQuiz, addQuiz, updateQuiz } = quizSlice.actions;
export default quizSlice.reducer;
