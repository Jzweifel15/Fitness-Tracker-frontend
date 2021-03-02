import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_MEAL } from "../store/actions/actionTypes";
import { createMeal } from "../store/actions/createMeal";
import { GET_SESSION } from "../store/session";
import "../styles/MealForm.css";

class MealForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numServings: "0",
      calories: "0"
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addMeal(this.state);
    this.props.createMeal(this.state);
  }

  render() {

    console.log(GET_SESSION());

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
          <input className="meal-form-submit" type="submit" value="Add Meal" />
          <Link to="/homepage"><button className="meal-form-cancel">Cancel</button></Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMeal: (formData) => dispatch({ type: ADD_MEAL, payload: formData }),
    createMeal: (mealData) => dispatch(createMeal(mealData))
  }
}

export default connect(null, mapDispatchToProps)(MealForm);