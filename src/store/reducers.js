export const rootReducer = () => {
  // Main reducer for combining multiple reducers together
}

function createStore(reducer) {
  let state;

  function dispatch(action) {
    // if (action.type === "ADD_EXERCISE" || 
    //     action.type === "EDIT_EXERCISE" || 
    //     action.type === "DELETE_EXERCISE") {
    //   state = exercisesReducer(state, action);
    // }
    // else {
    //   state = mealsReducer(state, action);
    // }
    state = reducer(state, action);
  
    return state;
  }

  function getState() {
    return state;
  }

  return { dispatch, getState };
}

// let store = createStore();
// store.dispatch({ type: "..." });

function exercisesReducer(state = {
  name: "",
  weight: 0,
  height: 0,
  gender: "",
  exercises: [],
  meals: []
}, action) {
  switch(action.type) {
    case "ADD_EXERCISE":
      // return a state object with a new exercise added
    case "EDIT_EXERCISE":
      // return a state object with the same number of exercises, but one exercise has been changed
    case "DELETE_EXERCISE":
      // return a state object with an exercise deleted
    default:
      return state;
  }
}

function mealsReducer(state = {
  name: "",
  weight: 0,
  height: 0,
  gender: "",
  exercises: [],
  meals: []
}, action) {
  switch(action.type) {
    case "ADD_MEAL":
      // return a state object with a new meal added
    case "EDIT_MEAL":
      // return a state object with the same number of meals, but one meal has been changed
    case "DELETE_MEAL":
      // return a state object with a meal deleted
    default:
      return state;
  }
}

function bmiReducer(state = {
  name: "",
  weight: 0,
  height: 0,
  gender: "",
  exercises: [],
  meals: []
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