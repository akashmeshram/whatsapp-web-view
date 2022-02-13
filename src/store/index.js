import { createStore } from "redux";
import data from "./db.json";

const initialState = data;

const reducer = (state = initialState, action) => {
  console.log({ state });
  // switch (action.type) {
  //   default:
  //     return state;
  // }
  return state;
};

export default createStore(reducer);
