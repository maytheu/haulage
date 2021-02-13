import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authReducers from "./reducers/authReducers";

const reducer = combineReducers({
  authReducers,
});

const store = configureStore({ reducer });
export default store;
