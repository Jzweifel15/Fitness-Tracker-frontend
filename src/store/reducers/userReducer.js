import { CREATE_ACCOUNT, FIND_ACCOUNT } from "../actions/actionTypes";

const initialState = {
  name: "Gabriella Glass",
  weight: 145,
  height: 68,
  gender: "Female",
  email: "gabriella.g@email.com"
}

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_ACCOUNT:
      // create a new user's account upon signing up
      return state;
    case FIND_ACCOUNT:
      // find a user's account upon signing in
      return state;
    default: 
      return state;
  }
}