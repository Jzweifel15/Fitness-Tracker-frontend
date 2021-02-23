import React from "react";
import { Workout } from "./Workout";
import { connect } from "react-redux";
import "../styles/WorkoutTable.css";

class WorkoutTable extends React.Component {
  render() {
    return (
      <table className="exercises-table">
        <thead>
          <tr>
            <td><strong>Exercises</strong></td>
            <td><strong>Sets</strong></td>
            <td><strong>Reps</strong></td>
          </tr>
        </thead>
        <tbody>
          {
            this.props.exercises.map(exercise => 
              <Workout exercise={ exercise.name } numSets={ exercise.numSets } numReps={ exercise.numReps } />   
            )
          }
        </tbody>
        <tr>
          <td>
            <button className="btn">+ Add</button>
          </td>
        </tr>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    exercises: [...state.exercises]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: () => dispatch({ type: "ADD_EXERCISE" }),
    editExercise: () => dispatch({ type: "EDIT_EXERCISE" }),
    deleteExercise: () => dispatch({ type: "DELETE_EXERCISE" })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutTable);