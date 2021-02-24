import { ADD_MEAL, EDIT_MEAL, REMOVE_MEAL } from "../actions/actionTypes";

const initialState = [
    {
      name: "Fish and Rice",
      numServings: 1,
      calories: 375
    },
    {
      name: "Three Cheese Lasagna",
      numServings: 1,
      calories: 525
    }
]

export function mealReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_MEAL:
      // return the state with a new meal added
      return state;
    case EDIT_MEAL:
      // return the original state with an updated meal
      return state;
    case REMOVE_MEAL:
      // return the state where a meal has been removed
      return state;
    default:
      return state;
  }
}