import { createStore } from "redux";
import reducer from "./reducers";

export const defaultState = {
  isSideBarOpen: false,
};

export const store = createStore(reducer, defaultState);
