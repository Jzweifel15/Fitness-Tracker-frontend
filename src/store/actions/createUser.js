import { FIND_ACCOUNT } from "./actionTypes";
import { SET_SESSION } from "../session";

export function createUser(userObj) {
  return (dispatch) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: userObj.name,
        weight: parseInt(userObj.weight),
        height: parseInt(userObj.height),
        gender: userObj.gender,
        email: userObj.email
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
    .then(user => {

      console.log(user);

      SET_SESSION(user.data.id);

      dispatch({
        type: FIND_ACCOUNT,
        payload: {
          id: user.data.id,
          name: user.data.attributes.name,
          weight: user.data.attributes.weight.toString(),
          height: user.data.attributes.height.toString(),
          gender: user.data.attributes.gender,
          email: user.data.attributes.email
        }
      })

    })
  }
}
