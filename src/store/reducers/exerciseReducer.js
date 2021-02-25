import { ADD_EXERCISE, EDIT_EXERCISE, REMOVE_EXERCISE } from "../actions/actionTypes";

const initialState = {
  exercises: [
    {
      id: 1,
      name: "Squats",
      numSets: "7",
      numReps: "20"
    },
    {
      id: 2,
      name: "Crunches",
      numSets: "7",
      numReps: "20"
    }
  ]
}

let ids = 3;

export function exerciseReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_EXERCISE:
      // return the state with a new exercise added to the original state
      const exercise = { id: ids, ...action.payload }
      ids++;
      return {
        // exercises: [...state.exercises, action.payload]
        exercises: state.exercises.concat(exercise)
      }
    case EDIT_EXERCISE:
      // return the original state with one of the exercises updated
      return state;
    case REMOVE_EXERCISE:
      // return the state where an exercise has been removed
      return {
        exercises: state.exercises.filter(exercise => exercise.id !== action.payload.id)
      }
    default:
      return state;
  }
}