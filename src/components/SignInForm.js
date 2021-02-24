import React from "react";
import { connect } from "react-redux";
import { FIND_ACCOUNT } from "../store/actions/actionTypes";
import "../styles/SignInForm.css";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("An email was submitted: " + this.state.email);
    this.props.findAccount();
  }

  render() {
    return (
      <div className="form-container">
        <form className="sign-in-form" onSubmit={ this.handleSubmit }>
          <h2>Sign In</h2>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ this.props.email } onChange={ this.handleChange } />
          </div>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAccount: (users) => dispatch({ type: FIND_ACCOUNT, payload: users })
  }
}

export default connect(null, mapDispatchToProps)(SignInForm);