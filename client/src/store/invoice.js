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
    saveInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    invoices: (state, action) => {
      state.invoice = action.payload;
    },
    errors: (state, action) => {
      state.invoice = action.payload;
    },
  },
});

export default slice.reducer;

const {
  postInvoice,
  printInvoice,
  saveInvoice,
  invoices,
  errors,
} = slice.actions;

export const getPostInvoice = (number) => async (dispatch) => {
  try {
    const res = await axios.post(`${SERVER}invoice`, number);
    await axios.get(`${SERVER}pdf?number=${number.number}`);
    return dispatch(postInvoice(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getPrintInvoice = (number) => async (dispatch) => {
  try {
    //const res =
    await axios.get(`${SERVER}invoice/print/${number}`);
    dispatch(printInvoice());
  } catch (err) {
    return dispatch(errors());
  }
};

export const getSaveInvoice = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${ADMIN_SERVER}save_invoice`, data);
    return dispatch(saveInvoice(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getInvoices = () => async (dispatch) => {
  try {
    const res = await axios.get(`${ADMIN_SERVER}invoices`);
    return dispatch(invoices(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};
