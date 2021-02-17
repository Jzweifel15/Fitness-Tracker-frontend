import React from "react";
import "../styles/SignUpForm.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: "",
      height: "",
      gender: "",
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
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <h2>Sign Up</h2>
          <div className="form-control">
            <label className="input-label">Name</label>
            <input type="text" name="name" 
              value={ this.state.name } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Weight (in lbs.)</label>
            <input type="text" name="weight" 
              value={ this.state.weight } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Height (in ft.)</label>
            <input type="text" name="height" 
              value={ this.state.height } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Gender</label>
            <input type="text" name="gender" 
              value={ this.state.gender } onChange={ this.updateFormValue } />
          </div>
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
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default SignUpForm;