import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createExercise } from "../store/actions/createExercise";
import "../styles/ExerciseForm.css";

export const ExerciseForm = (props) => {

  const [state, setState] = useState({
    name: "",
    numSets: "",
    numReps: ""
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createExercise(state));
    props.history.push("/homepage");
  }

  return (
    <div className="exercise-form-container">
    <h2>Add New Exercise</h2>
    <form className="exercise-form" onSubmit={ handleSubmit }>
      <div className="exercise-form-control">
        <label>Exercise</label>
        <input type="text" name="name"
          value={ state.name } 
          onChange={ handleChange } />
      </div>
      <div className="exercise-form-control">
        <label>Number of Sets</label>
        <input type="text" name="numSets"
          value={ state.numSets } 
          onChange={ handleChange } />
      </div>
      <div className="exercise-form-control">
        <label>Number of Reps</label>
        <input type="text" name="numReps"
          value={ state.numReps } 
          onChange={ handleChange } />
      </div>
      <input className="exercise-form-submit" type="submit" value="Add Exercise" />
      <Link to="/homepage"><button className="exercise-form-cancel">Cancel</button></Link>
    </form>
  </div>
  );
}