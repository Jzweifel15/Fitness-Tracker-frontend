import React from "react";
import Exercise from "./Exercise";
import { Link } from "react-router-dom";
import "../styles/WorkoutTable.css";

export const ExerciseTable = (props) => {
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
          props.exercises.map(exercise => 
            <Exercise key={ exercise.id } id={ exercise.id }
              exercise={ exercise.name }
              numSets={ exercise.numSets } 
              numReps={ exercise.numReps } />
          )
        }
        <div className="btn">
          <Link to="/new/exercise">+ Add</Link>
        </div>
      </div>
    </div>
  )
}