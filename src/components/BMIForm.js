import React from "react";
import { connect } from "react-redux";
import { CALCULATE_BMI } from "../store/actions/actionTypes";
import { saveNewBMI } from "../store/actions/saveNewBMI";

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
    this.props.calculateBMI(this.state);
  }

  handleSaveButtonClick = () => {
    this.props.saveBMI(this.state.weight, this.state.height)
  }

  render() {
    return (
      <div>
        <form className="bmi-form" onSubmit={ this.handleSubmit }>
          <h3>Calculator</h3>
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
          <button className="save-btn"
            onClick={this.handleSaveButtonClick}>
              Save
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    calculateBMI: (formData) => dispatch({ type: CALCULATE_BMI, payload: formData }),
    saveBMI: (newWeight, newHeight) => dispatch(saveNewBMI(newWeight, newHeight)) 
  }
}

export default connect(null, mapDispatchToProps)(BMIForm);