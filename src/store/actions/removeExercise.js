import { REMOVE_EXERCISE } from "./actionTypes";

export function removeExercise(exerciseObj) {
  return (dispatch) => {
    console.log(exerciseObj)
    fetch(`http://localhost:3000/exercises/${exerciseObj.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(() => {

      dispatch({ type: REMOVE_EXERCISE, payload: exerciseObj });

    })
  }
}