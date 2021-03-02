import React from "react";
import { Link, Redirect } from "react-router-dom";
import { fetchUser } from "../store/actions/fetchUser";
import { connect } from "react-redux";
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
    if (this.state.email !== "") {
      this.props.fetchUser(this.state.email);
      return <Redirect to="/homepage" />
    }
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
          <input type="submit" value="Create Account" />
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
    fetchUser: (email) => dispatch(fetchUser(email))
  }
}

export default connect(null, mapDispatchToProps)(SignInForm);