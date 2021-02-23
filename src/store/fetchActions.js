export const fetchUsers = (email) => {
  return (dispatch) => {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(user => {
      dispatch({ type: "FIND_ACCOUNT", user: user })
    })
  }
}