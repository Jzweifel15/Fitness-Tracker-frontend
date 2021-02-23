import React from "react";
import { connect } from "react-redux";
import "../styles/SignUpForm.css";

class SignUpForm extends React.Component {
  updateFormValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <h2>Sign Up</h2>
          <div className="form-control">
            <label className="input-label">Name</label>
            <input type="text" name="name" 
              value={ this.props.name } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Weight (in lbs.)</label>
            <input type="text" name="weight" 
              value={ this.props.weight } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Height (in ft.)</label>
            <input type="text" name="height" 
              value={ this.props.height } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Gender</label>
            <input type="text" name="gender" 
              value={ this.props.gender } onChange={ this.updateFormValue } />
          </div>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ this.props.email } onChange={ this.updateFormValue } />
          </div>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: () => dispatch({ type: "CREATE_ACCOUNT" })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);