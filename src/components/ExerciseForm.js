import React from "react";
import "../styles/ExerciseForm.css";
import { Link } from "react-router-dom";

class ExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numSets: 0,
      numReps: 0
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
          <Link to="/">
            <input className="exercise-form-submit" type="submit" value="Add Exercise" />
          </Link>
        </form>
      </div>
    )
  }
}

export default ExerciseForm;