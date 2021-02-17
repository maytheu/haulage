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
  },
});

//reducers
export default slice.reducer;

const { login, adminAuth } = slice.actions;

//actions
export const loginAdmin = (user) => async (dispatch) => {
  const res = await axios.post(`${ADMIN_SERVER}login`, user);
  dispatch(login(res.data));
};

export const authAdmin = () => async (dispatch) => {
  const res = await axios.get(`${ADMIN_SERVER}auth`);
  dispatch(adminAuth(res.data));
};
