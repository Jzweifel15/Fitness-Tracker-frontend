import React from "react";

export const Meal = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td>{ props.meal }</td>
        <td>{ props.numServings }</td>
        <td>{ props.calories }</td>
      </tr>
    </React.Fragment>
  )
}