import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import auth from "./auth";
import carousel from "./carousel";
import invoice from "./invoice";

const reducer = combineReducers({
  auth,
  carousel,
  invoice,
});

const store = configureStore({ reducer });
export default store;
