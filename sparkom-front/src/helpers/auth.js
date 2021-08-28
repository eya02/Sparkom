export const saveUserToLocalStorage = (jwt) => {
  localStorage.setItem("token", JSON.stringify(jwt));
};

export const isLogged = () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  } else {
    return false;
  }
};

export const logout = (cb) => {
  localStorage.removeItem("token");
  document.cookie = "t=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  cb();
};

export const checkAuth = (userId) => {
  return isLogged().user._id === userId;
};
