import React from "react";
import { connect } from "react-redux";
import "../styles/SignUpForm.css";

class SignUpForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleNameChange = (event) => {
    // this.props.name = event.target.value;
  }

  handleWeightChange = (event) => {
    // this.props.weight = event.target.value;
  }

  handleHeightChange = (event) => {
    // this.props.height = event.target.value;
  }

  handleGenderChange = (event) => {
    // this.props.gender = event.target.value;
  }

  handleEmailChange = (event) => {
    // this.props.email = event.target.value;
  }

  render() {
    return (
      <div className="form-container">
        <form className="sign-up-form" onSubmit={ this.handleSubmit }>
          <h2>Sign Up</h2>
          <div className="form-control">
            <label className="input-label">Name</label>
            <input type="text" name="name" 
              value={ this.props.name } onChange={ this.handleNameChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Weight (in lbs.)</label>
            <input type="text" name="weight" 
              value={ this.props.weight } onChange={ this.handleWeightChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Height (in ft.)</label>
            <input type="text" name="height" 
              value={ this.props.height } onChange={ this.handleHeightChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Gender</label>
            <input type="text" name="gender" 
              value={ this.props.gender } onChange={ this.handleGenderChange } />
          </div>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ this.props.email } onChange={ this.handleEmailChange } />
          </div>
          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (name, weight, height, gender, email) => {
      dispatch({ 
        type: "CREATE_ACCOUNT",
        payload: {
          name: name,
          weight: weight,
          height: height,
          gender: gender,
          email: email
        }
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);