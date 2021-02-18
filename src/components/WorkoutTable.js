import React from "react";
import { Workout } from "./Workout";
import "../styles/WorkoutTable.css";

class WorkoutTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          name: "Bench Press",
          numSets: 5,
          numReps: 10
        },
        {
          name: "Dumbell Flys",
          numSets: 5,
          numReps: 15
        }
      ]
    }
  }

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
            this.state.exercises.map(exercise => 
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

export default WorkoutTable;