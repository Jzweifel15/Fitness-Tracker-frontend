import React from "react";
import { Workout } from "./Workout";
import { connect } from "react-redux";
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
              <Workout exercise={ exercise.name }
                numSets={ exercise.numSets } 
                numReps={ exercise.numReps } />
            )
          }
          <div className="btn">+ Add</div>
        </div>
      </div>
    )
  }

  // render() {
  //   return (
  //     <table className="exercises-table">
  //       <thead>
  //         <tr>
  //           <td><strong>Exercises</strong></td>
  //           <td><strong>Sets</strong></td>
  //           <td><strong>Reps</strong></td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           this.props.exercises.map(exercise => 
  //             <Workout exercise={ exercise.name } numSets={ exercise.numSets } numReps={ exercise.numReps } />   
  //           )
  //         }
  //       </tbody>
  //       <tr>
  //         <td>
  //           <button className="btn">+ Add</button>
  //         </td>
  //       </tr>
  //     </table>
  //   )
  // }
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
    removeExercise: () => dispatch({ type: "REMOVE_EXERCISE" })
  }
}

export default WorkoutTable;
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WorkoutTable);