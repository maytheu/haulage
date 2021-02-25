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
    sliderText: (state, action) => {
      state.carousel = action.payload;
    },
    postSliderText: (state, action) => {
      state.carousel = action.payload;
    },
    deleteSlide: (state, action) => {
      state.carousel = action.payload;
    },
    errors: (state, action) => {
      state.carousel = action.payload;
    },
  },
});

export default slice.reducer;

const {
  slider,
  sliderText,
  postSliderText,
  deleteSlide,
  errors,
} = slice.actions;

export const getSlider = (img) => async (dispatch) => {
  try {
    const res = await axios.get(`${SERVER}carousel/${img}`);
    return dispatch(slider(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getSliderText = () => async (dispatch) => {
  try {
    const res = await axios.get(`${SERVER}carouseL_text`);
    return dispatch(sliderText(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getPostSliderText = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${ADMIN_SERVER}carousel_text`, data);
    return dispatch(postSliderText(res.data));
  } catch (err) {
    return dispatch(errors());
  }
};

export const getDelete = (img) => async (dispatch) => {
  try {
    await axios.get(
      `${ADMIN_SERVER}del/carousel_text?image=${img}`
    );
    return dispatch(deleteSlide());
  } catch (err) {
    return dispatch(errors());
  }
};
