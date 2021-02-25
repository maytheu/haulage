import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ADMIN_SERVER = "/api/admin/";
//const user = localStorage.getItem("auth")? JSON.parse(localStorage.getItem("auth")): {success: false}

const slice = createSlice({
  name: "auth",
  initialState: {
    auth: { success: false },
    // auth: user,
  },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
      // localStorage.setItem("auth", JSON.parse(action.payload));
    },
    adminAuth: (state, action) => {
      state.auth = action.payload;
    },
    logout: (state, action) => {
      state.auth = action.payload;
      //localStorage.removeItem("auth");
    },
    viewProfile: (state, action) => {
      state.auth = action.payload;
    },
    editProfile: (state, action) => {
      state.auth = action.payload;
    },
    errors: (state, action) => {
      state.auth = action.payload;
    },
  },
});

//reducers
export default slice.reducer;

const {
  login,
  adminAuth,
  logout,
  viewProfile,
  editProfile,
  errors,
} = slice.actions;

//actions
export const loginAdmin = (user) => async (dispatch) => {
  try {
    console.log(user);
    const res = await axios.post(`${ADMIN_SERVER}login`, user);
    console.log(res);
    return dispatch(login(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const authAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get(`${ADMIN_SERVER}auth`);
    return dispatch(adminAuth(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getLogout = () => async (dispatch) => {
  try {
    const res = await axios.get(`${ADMIN_SERVER}logout`);
    return dispatch(logout(res));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getViewProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${ADMIN_SERVER}view`);
    console.log(res);
    return dispatch(viewProfile(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getEditProfile = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${ADMIN_SERVER}update`, data);
    console.log(res);
    return dispatch(editProfile(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};
