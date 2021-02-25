import React from "react";
import { connect } from "react-redux";
import { EDIT_EXERCISE, REMOVE_EXERCISE } from "../store/actions/actionTypes";

class Workout extends React.Component {

  render() {
    const id = this.props.id;
    const exercise = this.props.exercise;
    const numSets = this.props.numSets;
    const numReps = this.props.numReps;

    return (
      <div className="row">
        <div className="cell" data-title={ exercise }>
          { exercise }
        </div>
        <div className="cell" data-title={ numSets }>
          { numSets }
        </div>
        <div className="cell" data-title={ numReps }>
          { numReps }
        </div>
        <div className="cell">
          <input type="checkbox" />
        </div>
        <div className="cell">
          <div className="edit-btn">Edit</div>
        </div>
        <div className="cell">
          <div className="delete-btn" 
            onClick={ () => this.props.removeExercise({ id: id, exercise: exercise, numSets: numSets, numReps: numReps }) }>
              Delete
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExercise: (exercise) => dispatch({ type: EDIT_EXERCISE, payload: exercise }),
    removeExercise: (exercise) => dispatch({ type: REMOVE_EXERCISE, payload: exercise })
  }
}

export default connect(null, mapDispatchToProps)(Workout);