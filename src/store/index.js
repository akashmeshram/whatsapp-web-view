import { createStore } from "redux";
import data from "./db.json";
import { CHANGE_CONTACT, ADD_MESSAGE } from "./types";

const initialState = {
  ...data,
  activeContactId: 2,
};

const reducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case CHANGE_CONTACT:
      return { ...state, activeContactId: action.id };
    case ADD_MESSAGE:
      return state;
    default:
      return state;
  }
};

export default createStore(reducer);
