import React from "react";

export const Meal = (props) => {
  return (
    <div className="row">
      <div className="cell" data-title={ props.meal }>
        { props.meal }
      </div>
      <div className="cell" data-title={ props.numServings }>
        { props.numServings }
      </div>
      <div className="cell" data-title={ props.calories }>
        { props.calories }
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