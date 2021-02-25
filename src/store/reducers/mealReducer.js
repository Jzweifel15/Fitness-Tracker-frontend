import { ADD_MEAL, EDIT_MEAL, REMOVE_MEAL } from "../actions/actionTypes";

const initialState = {
  meals: [
    {
      id: 1,
      name: "Fish and Rice",
      numServings: "1",
      calories: "375"
    },
    {
      id: 2,
      name: "Three Cheese Lasagna",
      numServings: "1",
      calories: "525"
    }
  ]
}

let ids = 3;

export function mealReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_MEAL:
      // return the state with a new meal added
      const meal = { id: ids, ...action.payload }
      ids++;
      return {
        meals: state.meals.concat(meal)
      }
    case EDIT_MEAL:
      // return the original state with an updated meal
      return state;
    case REMOVE_MEAL:
      // return the state where a meal has been removed
      return {
        meals: state.meals.filter(meal => meal.id !== action.payload.id)
      }
    default:
      return state;
  }
}