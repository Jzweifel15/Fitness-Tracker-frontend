import React from "react";
import { connect } from "react-redux";
import { FIND_ACCOUNT } from "../store/actions/actionTypes";
import { Link } from "react-router-dom";
import "../styles/SignInForm.css";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" }
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.findAccount(this.state));
    this.props.findAccount(this.state);
  }

  render() {
    return (
      <div className="sign-in-form-container">
        <form className="sign-in-form" onSubmit={ this.handleSubmit }>
          <h2>Sign In</h2>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ this.state.email } onChange={ this.handleChange } />
          </div>
          <input type="submit" value="Sign In" />
          <div className="signup-link">
            Not Already a Member? <Link to="signup">Sign Up Here!</Link>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAccount: (formData) => dispatch({ type: FIND_ACCOUNT, payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(SignInForm);