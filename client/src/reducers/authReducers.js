import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ADMIN_SERVER } from "./types";

const slice = createSlice({
  name: "authReducers",
  initialState: {
    authReducers: {},
  },
  reducers: {
    login: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export default slice.reducer;

const { login } = slice.actions


export const loginAdmin = (data) => async (dispatch) => {
  const res = await axios.post(`${ADMIN_SERVER}login`, data);
  dispatch(login(res.data));
};
