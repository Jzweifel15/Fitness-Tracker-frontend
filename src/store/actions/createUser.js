import { FIND_ACCOUNT } from "./actionTypes";

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

      dispatch({
        type: FIND_ACCOUNT,
        payload: {
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
