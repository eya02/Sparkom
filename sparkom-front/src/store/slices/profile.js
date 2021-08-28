import { createSlice } from "@reduxjs/toolkit";
import { queryApi } from "../../utils/queryApi";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userProfile: null,
    errors: "",
    allProfiles: [],
    friendsList: [],
  },
  reducers: {
    populateProfile(state, action) {
      state.userProfile = action.payload;
    },
    populateFriends(state, action) {
      state.friendsList = action.payload;
    },
    populateAllProfiles(state, action) {
      state.allProfiles = action.payload;
    },
    unfollowFriend(state, action) {
      const payload = action.payload;
      const index = state.friendsList.findIndex(
        (friend) => friend._id === payload
      );
      if (index !== -1) {
        state.friendsList.splice(index, 1);
      }
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    updateProfile(state, action) {
      state.userProfile = action.payload;
    },
  },
});

//******** Selectors *************************/

export const fetchProfile = () => async (dispatch) => {
  const [res, error] = await queryApi("profile/me");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateProfile(res));
  }
};

export const fetchFriends = () => async (dispatch) => {
  const [res, error] = await queryApi("profile/me/followers");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateFriends(res));
  }
};

export const fetchAllProfiles = () => async (dispatch) => {
  const [res, error] = await queryApi("profile/me/all");
  if (error) {
    dispatch(setErrors(error));
  } else {
    dispatch(populateAllProfiles(res));
  }
};
export const myProfileSelector = (state) => state.profile?.userProfile;
export const friendsSelector = (state) => state.profile?.friendsList;
export const allProfilesSelector = (state) => state.profile?.allProfiles;

// export const activeUserSelector = (state) => state.auth?.user;
// export const isAuthenticatedSelector = (state) => state.auth?.isAuthenticated;
// export const oAuthSelector = (state) => state.auth?.oAuth;
// export const avatarSelector = (state) => state.auth?.user?.avatar;

export const {
  setErrors,
  populateProfile,
  updateProfile,
  populateFriends,
  unfollowFriend,
  populateAllProfiles,
} = profileSlice.actions;
export default profileSlice.reducer;
