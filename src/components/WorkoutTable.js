import React from "react";
import { Workout } from "./Workout";
import "../styles/WorkoutTable.css";

class WorkoutTable extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="table">
          <div className="row-header">
            <div className="cell">
              Exercises
            </div>
            <div className="cell">
              Sets
            </div>
            <div className="cell">
              Reps
            </div>
            <div className="cell">
              Done
            </div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          {
            this.props.exercises.map(exercise => 
              <Workout key={ exercise.name } exercise={ exercise.name }
                numSets={ exercise.numSets } 
                numReps={ exercise.numReps } />
            )
          }
          <div className="btn">+ Add</div>
        </div>
      </div>
    )
  }
}

export default WorkoutTable;