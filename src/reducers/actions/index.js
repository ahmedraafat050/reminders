import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER } from "../types";

export const addReminder = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date
  }
  return action
}

export const removeReminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    id
  }
  return action
}

export const clearReminder = () => {
  const action = {
    type: CLEAR_REMINDER,
  }
  return action
}