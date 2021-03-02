import { REMOVE_MEAL } from "./actionTypes";

export function removeMeal(mealObj) {
  return (dispatch) => {
    console.log(mealObj)
    fetch(`http://localhost:3000/meals/${mealObj.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(() => {

      dispatch({ type: REMOVE_MEAL, payload: mealObj });

    })
  }
}