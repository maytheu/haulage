import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ADMIN_SERVER = "/api/admin/";
const SERVER = "/api/";

const slice = createSlice({
  name: "invoice",
  initialState: {
    invoice: {},
  },
  reducers: {
    postInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    printInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    errors: (state, action) => {
      state.invoice = action.payload;
    },
  },
});

export default slice.reducer;

const { postInvoice, printInvoice, errors } = slice.actions;

export const getPostInvoice = (number) => async (dispatch) => {
  try {
    const res = await axios.post(`${SERVER}invoice`, number);
    return dispatch(postInvoice(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getPrintInvoice = (number) => async (dispatch) => {
  try {
    const res = await axios.get(`${SERVER}print?number=${number}`);
    console.log(res);
    dispatch(printInvoice());
  } catch (err) {
    return dispatch(errors());
  }
};
