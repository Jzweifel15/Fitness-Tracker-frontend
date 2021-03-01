import React from "react";
import { connect } from "react-redux";
import { CREATE_ACCOUNT } from "../store/actions/actionTypes";
import { Link } from "react-router-dom";
import "../styles/SignUpForm.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: "",
      height: "",
      gender: "",
      email: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Your account has successfully been created");
    console.log(this.props.createAccount(this.state));
    this.props.createAccount(this.state);
  }

  render() {
    return (
      <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <h2>Sign Up</h2>
          <div className="form-control">
            <label className="input-label">Name</label>
            <input type="text" name="name" 
              value={ this.state.name } onChange={ this.handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Weight (in lbs.)</label>
            <input type="text" name="weight" 
              value={ this.state.weight } onChange={ this.handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Height (in ft.)</label>
            <input type="text" name="height" 
              value={ this.state.height } onChange={ this.handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Gender</label>
            <input type="text" name="gender" 
              value={ this.state.gender } onChange={ this.handleChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ this.state.email } onChange={ this.handleChange } />
          </div>
          <input type="submit" value="Create Account" />
          <div className="signin-link">
            Already a Member? <Link to="/signin">Sign In Here!</Link>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (formData) => dispatch({ type: CREATE_ACCOUNT, payload: formData })
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);