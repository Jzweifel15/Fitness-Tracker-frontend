import { combineReducers } from "redux";
import { exerciseReducer } from "./exerciseReducer";
import { mealReducer } from "./mealReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  exercises: exerciseReducer,
  meals: mealReducer,
  user: userReducer
})
