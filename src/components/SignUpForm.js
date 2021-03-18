import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../store/actions/createUser";
import "../styles/SignUpForm.css";

export const SignUpForm = (props) => {

  const [state, setState] = useState({
    name: "",
    weight: "",
    height: "",
    gender: "",
    email: ""
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: [event.target.value] })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = {
      name: state.name[0],
      weight: state.weight[0],
      height: state.height[0],
      gender: state.gender[0],
      email: state.email[0]
    };
    
    dispatch(createUser(newUser));
    props.history.push("/homepage");
  }

  return (
    <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={ handleSubmit }>
          <h2>Sign Up</h2>
          <div className="form-control">
            <label className="input-label">Name</label>
            <input type="text" name="name" 
              value={ state.name } onChange={ handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Weight (lbs.)</label>
            <input type="text" name="weight" 
              value={ state.weight } onChange={ handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Height (in.)</label>
            <input type="text" name="height" 
              value={ state.height } onChange={ handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Gender</label>
            <input type="text" name="gender" 
              value={ state.gender } onChange={ handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ state.email } onChange={ handleChange } />
          </div>
          <input type="submit" value="Create Account" />
          <div className="signin-link">
            Already a Member? <Link to="/signin">Sign In Here!</Link>
          </div>
        </form>
      </div>
  );
}