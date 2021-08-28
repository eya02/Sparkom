import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
  },
  reducers: {
    logout(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    },
    login(state, action) {
      const { token, user } = action.payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        isAuthenticated: true,
        token,
        user,
      };
    },
    googleAuth(state, action) {
      const { tokenId, profileObj } = action.payload;
      localStorage.setItem("token", tokenId);
      const { familyName, givenName, imageUrl, name, email } = profileObj;
      const user = {
        email,
        firstname: givenName,
        lastname: familyName,
        avatar: imageUrl,
        username: name,
      };
      console.log(tokenId);

      return {
        ...state,
        isAuthenticated: true,
        token: tokenId,
        user,
        oAuth: true,
      };
    },

    facebookAuth(state, action) {
      const { accessToken, email, name, picture } = action.payload;
      localStorage.setItem("token", accessToken);
      const user = {
        email,
        firstname: name.substr(0, name.indexOf(" ")),
        lastname: name.substr(name.indexOf(" ") + 1),
        avatar: picture.data.url,
        username: name,
      };
      console.log(user);
      return {
        ...state,
        isAuthenticated: true,
        token: accessToken,
        user,
        oAuth: true,
      };
    },

    updateUser(state, action) {
      state.user = action.payload;
    },
  },
});

//******** Selectors *************************/

export const activeUserSelector = (state) => state.auth?.user;
export const isAuthenticatedSelector = (state) => state.auth?.isAuthenticated;
export const oAuthSelector = (state) => state.auth?.oAuth;
export const avatarSelector = (state) => state.auth?.user?.avatar;
export const thistoken = (state) => state.auth?.token;

export const { login, logout, googleAuth, facebookAuth, updateUser } =
  authSlice.actions;
export default authSlice.reducer;
