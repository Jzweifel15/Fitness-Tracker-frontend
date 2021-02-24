import { combineReducers } from "redux";
import { exerciseReducer } from "./exerciseReducer";
import { mealReducer } from "./mealReducer";
import { bmiReducer } from "./bmiReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  exercises: exerciseReducer,
  meals: mealReducer,
  bmi: bmiReducer,
  user: userReducer
})

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