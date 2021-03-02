import { GET_SESSION } from "../session";
import { ADD_MEAL } from "../actions/actionTypes";

export function createMeal(mealObj) {
  return (dispatch) => {
    fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: mealObj.name,
        numServings: parseInt(mealObj.numServings),
        calories: parseInt(mealObj.calories),
        user_id: parseInt(GET_SESSION())
      })
    })
    .then(resp => {

      if(resp.ok) {
        return resp.json();
      }
      else {
        return resp.text().then(error => Promise.reject(error));
      }

    })
    .then(meal => {

      dispatch({ type: ADD_MEAL, payload: meal });
      
    })
  }
}