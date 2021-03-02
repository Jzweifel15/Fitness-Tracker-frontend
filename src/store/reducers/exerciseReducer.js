import { ADD_EXERCISE, REMOVE_EXERCISE } from "../actions/actionTypes";

const initialState = {
  exercises: []
}

export function exerciseReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_EXERCISE:
      // return the state with a new exercise added to the original state
      const exercise = { ...action.payload }
      return {
        // exercises: [...state.exercises, action.payload]
        exercises: state.exercises.concat(exercise)
      }
    case REMOVE_EXERCISE:
      // return the state where an exercise has been removed
      return {
        exercises: state.exercises.filter(exercise => exercise.id !== action.payload.id)
      }
    default:
      return state;
  }
}