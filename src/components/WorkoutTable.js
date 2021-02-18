import React from "react";
import { Workout } from "./Workout";
import "../styles/WorkoutTable.css";

export const WorkoutTable = (props) => {
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
          props.exercises.map(exercise => 
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