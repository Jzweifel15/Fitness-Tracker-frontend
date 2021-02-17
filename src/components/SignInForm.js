import React from "react";
import "../styles/SignInForm.css";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  updateFormValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="form-container">
        <form className="sign-in-form" onSubmit={ this.handleSubmit }>
          <h2>Sign In</h2>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ this.state.email } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Password</label>
            <input type="password" name="password" 
              value={ this.state.password } onChange={ this.updateFormValue } />
          </div>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

export default SignInForm;