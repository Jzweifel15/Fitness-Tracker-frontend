import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createMeal } from "../store/actions/createMeal";
import "../styles/MealForm.css";

export const MealForm = (props) => {

  const [state, setState] = useState({
    name: "",
    numServings: "",
    calories: ""
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createMeal(state));
    props.history.push("/homepage");
  }

  return (
    <div className="meal-form-container">
      <h2>Add New Meal</h2>
      <form className="meal-form" onSubmit={ handleSubmit }>
        <div className="meal-form-control">
          <label>Meal</label>
          <input type="text" name="name"
            value={ state.name } 
            onChange={ handleChange } />
        </div>
        <div className="meal-form-control">
          <label>Number of Servings</label>
          <input type="text" name="numServings"
            value={ state.numServings } 
            onChange={ handleChange } />
        </div>
        <div className="meal-form-control">
          <label>Number of Calories</label>
          <input type="text" name="calories"
            value={ state.calories } 
            onChange={ handleChange } />
        </div>
        <input className="meal-form-submit" type="submit" value="Add Meal" />
        <Link to="/homepage"><button className="meal-form-cancel">Cancel</button></Link>
      </form>
    </div>
  )
}