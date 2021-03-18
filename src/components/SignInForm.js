import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../store/actions/fetchUser";
import "../styles/SignInForm.css";

export const SignInForm = (props) => {

  const [state, setState] = useState({ email: "" });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ [event.target.name]: [event.target.value] });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.email[0] !== "") {
      dispatch(fetchUser(state.email[0]));
      props.history.push("/homepage");
    }
  }

  return (
    <div className="sign-in-form-container">
    <form className="sign-in-form" onSubmit={ handleSubmit }>
      <h2>Sign In</h2>
      <div className="form-control">
        <label className="input-label">Email</label>
        <input type="email" name="email" 
          value={ state.email } onChange={ handleChange } />
      </div>
      <input type="submit" value="Login" />
      <div className="signup-link">
        Not Already a Member? <Link to="signup">Sign Up Here!</Link>
      </div>
    </form>
  </div>
  )
}