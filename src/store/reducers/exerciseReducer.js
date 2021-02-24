import { ADD_EXERCISE, EDIT_EXERCISE, REMOVE_EXERCISE } from "../actions/actionTypes";

const initialState = [
    {
      name: "Squats",
      numSets: 7,
      numReps: 20
    },
    {
      name: "Crunches",
      numSets: 7,
      numReps: 20
    }
  ]

export function exerciseReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_EXERCISE:
      // return the state with a new exercise added to the original state
      return state;
    case EDIT_EXERCISE:
      // return the original state with one of the exercises updated
      return state;
    case REMOVE_EXERCISE:
      // return the state where an exercise has been removed
      return state;
    default:
      return state;
  }
}