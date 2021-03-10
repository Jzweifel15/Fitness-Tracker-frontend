import { FIND_ACCOUNT, CALCULATE_BMI, SAVE_BMI } from "../actions/actionTypes";

const initialState = {
  id: 0,
  name: "",
  weight: "",
  height: "",
  gender: "",
  email: "",
  bmis: []
}

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case FIND_ACCOUNT:
      // find a user's account upon signing in
      return {
        ...action.payload
      }
    case SAVE_BMI:
      // Saves the newly calculated bmi to the backend and updates the linegraph
      return {
        ...state,
        weight: action.payload.weight,
        height: action.payload.height,
        bmis: state.bmis.concat(action.payload)
      }
    case CALCULATE_BMI:
      // Calculates the new bmi, but does not save it to the backend
      return {
        ...state,
        weight: action.payload.weight,
        height: action.payload.height
      }
    default: 
      return state;
  }
}