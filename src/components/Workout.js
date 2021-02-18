import React from "react";

export const Workout = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td><strong>{ props.exercise }</strong></td>
        <td>{ props.numSets }</td>
        <td>{ props.numReps }</td>
      </tr>
    </React.Fragment>
  )
}