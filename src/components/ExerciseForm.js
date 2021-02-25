import React from "react";
import { Link } from "react-router-dom";
import { ADD_EXERCISE } from "../store/actions/actionTypes";
import { connect } from "react-redux";
import "../styles/ExerciseForm.css";

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numSets: "0",
      numReps: "0"
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addExercise(this.state);
  }

  render() {
    return (
      <div className="exercise-form-container">
        <h2>Add New Exercise</h2>
        <form className="exercise-form" onSubmit={ this.handleSubmit }>
          <div className="exercise-form-control">
            <label>Exercise</label>
            <input type="text" name="name"
              value={ this.state.name } 
              onChange={ this.handleChange } />
          </div>
          <div className="exercise-form-control">
            <label>Number of Sets</label>
            <input type="text" name="numSets"
              value={ this.state.numSets } 
              onChange={ this.handleChange } />
          </div>
          <div className="exercise-form-control">
            <label>Number of Reps</label>
            <input type="text" name="numReps"
              value={ this.state.numReps } 
              onChange={ this.handleChange } />
          </div>
          <input className="exercise-form-submit" type="submit" value="Add Exercise" />
          <Link to="/homepage"><button className="exercise-form-cancel">Cancel</button></Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: (formData) => dispatch({ type: ADD_EXERCISE, payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(ExerciseForm);