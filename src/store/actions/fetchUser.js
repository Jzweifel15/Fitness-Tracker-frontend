// import { dataStore } from "../data";
import { ADD_EXERCISE, ADD_MEAL, FIND_ACCOUNT } from "./actionTypes";

export function fetchUser(email) {
  return (dispatch) => {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(users => {
      let user;

      for (let i = 0; i < users.data.length; i ++) {
        if (users.data[i].attributes.email === email) {
          user = users.data[i].attributes;
        }
      }

      console.log(user);

      dispatch({ 
        type: FIND_ACCOUNT, 
        payload: {
          name: user.name,
          weight: user.weight.toString(),
          height: user.height.toString(),
          gender: user.gender,
          email: user.email
        }
      })

      for (let i = 0; i < user.exercises.length; i++) {
        dispatch({ type: ADD_EXERCISE, payload: user.exercises[i] })
      }

      for (let i = 0; i < user.meals.length; i++) {
        dispatch({ type: ADD_MEAL, payload: user.meals[i] })
      }
    })
  }
}

// export function fetchUser(email) {
//   return fetch("http://localhost:3000/users")
//     .then(resp => resp.json())
//     .then(users => {
//       let user;

//       for (let i = 0; i < users.data.length; i ++) {
//         if (users.data[i].attributes.email === email) {
//           user = users.data[i].attributes;
//         }
//       }

//       console.log(user);

//     })
// }