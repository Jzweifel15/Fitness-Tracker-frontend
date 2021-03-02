import { ADD_EXERCISE } from "./actionTypes";
import { GET_SESSION } from "../session";

export function createExercise(exerciseObj) {
  return (dispatch) => {
    fetch("http://localhost:3000/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: exerciseObj.name,
        numSets: parseInt(exerciseObj.numSets),
        numReps: parseInt(exerciseObj.numReps),
        user_id: parseInt(GET_SESSION())
      })
    })
    .then(resp => {

      if (resp.ok) {
        return resp.json();
      }
      else {
        return resp.text().then(error => Promise.reject(error));
      }

    })
    .then(exercise => {
      
      dispatch({ type: ADD_EXERCISE, payload: exercise });

    })
  }
}