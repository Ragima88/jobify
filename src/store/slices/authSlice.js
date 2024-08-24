import { createSlice } from "@reduxjs/toolkit";

const getInitialAuth = () => {
  try {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const currentUser = localStorage.getItem("currentUser");
    const users = localStorage.getItem("users");
    return {
      isLoggedIn: isLoggedIn ? JSON.parse(isLoggedIn) : false,
      currentUser: currentUser ? JSON.parse(currentUser) : null,
      users: users ? JSON.parse(users) : [],
    };
  } catch (error) {
    return {
      isLoggedIn: false,
      currentUser: null,
      users: [],
    };
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: getInitialAuth().isLoggedIn,
    currentUser: getInitialAuth().currentUser,
    users: getInitialAuth().users,
  },
  reducers: {
    signUp: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    logIn: (state, action) => {
      const user = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.isLoggedIn = true;
        state.currentUser = user;
        localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      }
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
  },
});

export const { signUp, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
