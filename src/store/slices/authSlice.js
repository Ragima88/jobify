import { createSlice } from "@reduxjs/toolkit";

const getInitialUsers = () => {
  try {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  } catch (error) {
    return [];
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    currentUser: null,
    users: getInitialUsers(),
  },
  reducers: {
    signUp: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    logIn: (state, action) => {},
    logOut: (state) => {},
  },
});

export const { signUp, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
