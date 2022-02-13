import { createStore } from "redux";
import data from "./db.json";
import { CHANGE_CONTACT, ADD_MESSAGE } from "./types";

const initialState = {
  ...data,
  activeContactId: 2,
};

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const reducer = (state = initialState, action) => {
  if (!action) return state;
  switch (action.type) {
    case CHANGE_CONTACT:
      return { ...state, activeContactId: action.id };
    case ADD_MESSAGE:
      const message = {
        text: action.text,
        timestamp: formatAMPM(new Date()),
        side: "right",
      };
      return {
        ...state,
        friends: state.friends.map((person) => {
          if (person.id === state.activeContactId) {
            const chatlog = [
              ...person.chatlog,
              { ...message, message_id: person.chatlog.length + 1 },
            ];
            console.log({ chatlog });
            return { ...person, chatlog };
          }
          return person;
        }),
      };
    default:
      return state;
  }
};

export default createStore(reducer);
