import { ADD_MEAL, REMOVE_MEAL } from "../actions/actionTypes";

const initialState = {
  meals: []
}

export function mealReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_MEAL:
      // return the state with a new meal added
      const meal = { ...action.payload }
      return {
        meals: state.meals.concat(meal)
      }
    case REMOVE_MEAL:
      // return the state where a meal has been removed
      return {
        meals: state.meals.filter(meal => meal.id !== action.payload.id)
      }
    default:
      return state;
  }
}