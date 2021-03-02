import { ADD_EXERCISE, ADD_MEAL, FIND_ACCOUNT } from "./actionTypes";
import { SET_SESSION } from "../session";

export function fetchUser(email) {
  return (dispatch) => {
    fetch("http://localhost:3000/users")
    .then(resp => {

      if (resp.ok) {
        return resp.json();
      }
      else {
        return resp.text().then(error => Promise.reject(error));
      }

    })
    .then(users => {

      let user;

      for (let i = 0; i < users.data.length; i ++) {
        if (users.data[i].attributes.email === email) {
          user = {
            id: users.data[i].id,
            name: users.data[i].attributes.name,
            weight: users.data[i].attributes.weight,
            height: users.data[i].attributes.height,
            gender: users.data[i].attributes.gender,
            email: users.data[i].attributes.email,
            exercises: [...users.data[i].attributes.exercises],
            meals: [...users.data[i].attributes.meals]
          }
        }
      }

      SET_SESSION(user.id)

      dispatch({ type: FIND_ACCOUNT, payload: user });

      for (let i = 0; i < user.exercises.length; i++) {
        dispatch({ type: ADD_EXERCISE, payload: user.exercises[i] });
      }

      for (let i = 0; i < user.meals.length; i++) {
        dispatch({ type: ADD_MEAL, payload: user.meals[i] });
      }

    })
  }
}