import React from "react";
import { Workout } from "./Workout";

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
            <th>Exercises</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.exercises.map(exercise => 
              <Workout exercise={ exercise.name } numSets={ exercise.numSets } numReps={ exercise.numReps } />   
            )
          }
        </tbody>
      </table>
    )
  }
}

export default WorkoutTable;