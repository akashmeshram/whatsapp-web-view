import { CHANGE_CONTACT, ADD_MESSAGE } from "./types";

export const changeActiveContact = (id) => ({
  type: CHANGE_CONTACT,
  id,
});

export const addMessageToContact = (text) => ({
  type: ADD_MESSAGE,
  text,
});
