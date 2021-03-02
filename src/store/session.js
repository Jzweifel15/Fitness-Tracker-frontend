let SESSION;

export const SET_SESSION = (userId) => {
  SESSION = userId;
}

export const GET_SESSION = () => {
  return SESSION;
}