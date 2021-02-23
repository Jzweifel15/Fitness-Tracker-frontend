import React from "react";

export const Workout = (props) => {
  return (
    <div className="row">
      <div className="cell" data-title={ props.exercise }>
        { props.exercise }
      </div>
      <div className="cell" data-title={ props.numSets }>
        { props.numSets }
      </div>
      <div className="cell" data-title={ props.numReps }>
        { props.numReps }
      </div>
      <div className="cell">
        <input type="checkbox" />
      </div>
      <div className="cell">
        <div className="edit-btn">Edit</div>
      </div>
      <div className="cell">
        <div className="delete-btn">Delete</div>
      </div>
    </div>
  )
}