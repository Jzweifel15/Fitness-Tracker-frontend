import React from "react";
import { Link } from "react-router-dom";
import "../styles/MealForm.css";

class MealForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numServings: 0,
      calories: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="meal-form-container">
        <h2>Add New Meal</h2>
        <form className="meal-form" onSubmit={ this.handleSubmit }>
          <div className="meal-form-control">
            <label>Meal</label>
            <input type="text" name="name"
              value={ this.state.name } 
              onChange={ this.handleChange } />
          </div>
          <div className="meal-form-control">
            <label>Number of Servings</label>
            <input type="text" name="numServings"
              value={ this.state.numServings } 
              onChange={ this.handleChange } />
          </div>
          <div className="meal-form-control">
            <label>Number of Calories</label>
            <input type="text" name="calories"
              value={ this.state.calories } 
              onChange={ this.handleChange } />
          </div>
          <Link to="/"><input className="meal-form-submit" type="submit" value="Add Meal" /></Link>
          <Link to="/"><button className="meal-form-cancel">Cancel</button></Link>
        </form>
      </div>
    )
  }
}

export default MealForm;