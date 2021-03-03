import React from "react";
import { connect } from "react-redux";
import { removeExercise } from "../store/actions/removeExercise";
import { GET_SESSION } from "../store/session";

class Exercise extends React.Component {

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
          <div className="delete-btn" 
            onClick={ () => this.props.removeExercise({ 
              id: id, exercise: exercise, 
              numSets: numSets, numReps: numReps, 
              user_id: parseInt(GET_SESSION()) }) }>
                Delete
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeExercise: (exercise) => dispatch(removeExercise(exercise))
  }
}

export default connect(null, mapDispatchToProps)(Exercise);