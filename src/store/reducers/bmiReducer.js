import { EDIT_BMI } from "../actions/actionTypes";

const initialState = {
  weight: 145,
  height: 68
}

export function bmiReducer(state = initialState, action) {
  switch(action.type) {
    case EDIT_BMI:
      return state;
    default: 
      return state;
  }
}