import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/fetchActions";
import "../styles/SignInForm.css";

class SignInForm extends React.Component {

  componentDidMount() {
    fetchUsers();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form className="sign-in-form" onSubmit={ this.handleSubmit }>
          <h2>Sign In</h2>
          <div className="form-control">
            <label className="input-label">Email</label>
            <input type="email" name="email" 
              value={ this.props.email } onChange={ this.updateFormValue } />
          </div>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findAccount: () => dispatch({ type: "FIND_ACCOUNT" })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);