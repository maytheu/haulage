import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ADMIN_SERVER = "/api/admin/";
const SERVER = "/api/";

const slice = createSlice({
  name: "carousel",
  initialState: {
    carousel: [],
  },
  reducers: {
    slider: (state, action) => {
      state.carousel = action.payload;
    },
  },
});

export default slice.reducer;

const { slider } = slice.actions;

export const getSlider = () => async (dispatch) => {
  const res = await axios.get(`${SERVER}carousel`);
  console.log(res)
  dispatch(slider(res.data));
};
