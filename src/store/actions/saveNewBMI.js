import { SAVE_BMI } from "./actionTypes";
import { GET_SESSION } from "../session";

export function saveNewBMI(newWeight, newHeight) {
  return (dispatch) => {
    fetch("http://localhost:3000/body_mass_indices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        weight: parseInt(newWeight),
        height: parseInt(newHeight),
        bmi: Math.round((parseInt(newWeight) * 0.454) / ((parseInt(newHeight) * 0.0254) ** 2)),
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
    .then(data => {
      console.log(data);
      dispatch({ type: SAVE_BMI, payload: data });
    })
  }
}