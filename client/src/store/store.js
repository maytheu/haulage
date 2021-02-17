import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import auth from "./auth";
import carousel from "./carousel";

const reducer = combineReducers({
  auth,
  carousel,
});

const store = configureStore({ reducer });
export default store;
