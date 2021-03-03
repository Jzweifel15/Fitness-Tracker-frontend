import React from "react";
import { connect } from "react-redux";
import { EDIT_BMI } from "../store/actions/actionTypes";
import "../styles/BMIForm.css";

class BMIForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: this.props.height,
      weight: this.props.weight
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editBMI(this.state);
  }

  render() {
    return (
      <div>
        <form className="bmi-form" onSubmit={ this.handleSubmit }>
          <div className="bmi-form-control">
            <label>Height (in.)</label>
            <input type="text" name="height" 
              value={ this.state.height }
              onChange={ this.handleChange } />
          </div>
          <div className="bmi-form-control">
            <label>Weight (lbs.)</label>
            <input type="text" name="weight" 
              value={ this.state.weight } 
              onChange={ this.handleChange } />
          </div>
          <input type="submit" value="Calculate" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBMI: (formData) => dispatch({ type: EDIT_BMI, payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(BMIForm);