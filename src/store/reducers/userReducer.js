import { FIND_ACCOUNT, EDIT_BMI } from "../actions/actionTypes";

const initialState = {
  id: 0,
  name: "",
  weight: "",
  height: "",
  gender: "",
  email: ""
}

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case FIND_ACCOUNT:
      // find a user's account upon signing in
      return {
        ...action.payload
      }
    case EDIT_BMI:
      return {
        ...state,
        weight: action.payload.weight,
        height: action.payload.height
      }
    default: 
      return state;
  }
}