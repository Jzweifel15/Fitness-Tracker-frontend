import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: usersReducer,
  exercises: exercisesReducer,
  meals: mealsReducer,
  bmi: bmiReducer
});

function usersReducer(state = {
  name: "",
  weight: 0,
  height: 0,
  gender: "",
  email: "" 
}, action) {
  switch(action.type) {
    case "CREATE_ACCOUNT":
      // create the new user's account for signing up
    case "FIND_ACCOUNT":
      // find the user's account for signing in
    default: 
      return state;
  }
}

function exercisesReducer(state = [], action) {
  switch(action.type) {
    case "ADD_EXERCISE":
      return [...state, action.exercise];
    case "EDIT_EXERCISE":
      // return a state object with the same number of exercises, but one exercise has been changed
    case "REMOVE_EXERCISE":
      let idx = state.exercises.findIndex(exercise => exercise.id === action.id);
      return [...state.exercises.slice(0, idx), ...state.exercises.slice(idx + 1)];
    default:
      return state;
  }
}

function mealsReducer(state = [], action) {
  switch(action.type) {
    case "ADD_MEAL":
      return [...state.meals, action.meal];
    case "EDIT_MEAL":
      // return a state object with the same number of meals, but one meal has been changed
    case "REMOVE_MEAL":
      let idx = state.meals.findIndex(meal => meal.id === action.id);
      return [...state.meals.slice(0, idx), ...state.meals.slice(idx + 1)];
    default:
      return state;
  }
}

function bmiReducer(state = {
  weight: 0,
  height: 0,
}, action) {
  switch(action.type) {
    case "EDIT_BMI":
      // return a state object with the bmi edited
    default: 
      return state;
  }
}

/**
 * We can use the spread operator (...) to copy enumerable properties from one object to another in a more succinct way
 * 
 * let dog = { id: 1, name: "Scooby", color: "brown", age: 4 };
 * // if Scooby has a birthday, we could write
 * let olderDog = { ...dog, age: dog.age + 1 };
 * 
 * Translating this to English would be something like, "Return a new object that contains all the key-value pairs from 
 * `dog` copied over with the `age` key overwritten with a new value."
 */