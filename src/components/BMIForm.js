import React from "react";
import "../styles/BMIForm.css";

class BMIForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      weight: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
  }

  render() {
    return (
      <div>
        <form className="bmi-form">
          <div className="bmi-form-control">
            <label>Height (in.)</label>
            <input type="text" name="height" 
              value={ this.props.height }
              onChange={ this.handleChange } />
          </div>
          <div className="bmi-form-control">
            <label>Weight (lbs.)</label>
            <input type="text" name="height" 
              value={ this.props.weight } 
              onChange={ this.handleChange } />
          </div>
          <input type="submit" value="Calculate" />
        </form>
      </div>
    )
  }
}

export default BMIForm;