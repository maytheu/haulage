import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ADMIN_SERVER = "/api/admin/";

const slice = createSlice({
  name: "auth",
  initialState: {
    auth: { auth: false },
  },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
    adminAuth: (state, action) => {
      state.auth = action.payload;
    },
    errors: (state, action) => {
      state.invoice = action.payload;
    },
  },
});

//reducers
export default slice.reducer;

const { login, adminAuth, errors } = slice.actions;

//actions
export const loginAdmin = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${ADMIN_SERVER}login`, user);
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
