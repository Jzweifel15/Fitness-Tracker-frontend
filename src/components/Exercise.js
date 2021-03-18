import React from "react";
import { useDispatch } from "react-redux";
import { removeExercise } from "../store/actions/removeExercise";
import { GET_SESSION } from "../store/session";

export const Exercise = (props) => {

  const { id, exercise, numSets, numReps } = props;
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="cell" data-title={ exercise }>
        { exercise }
      </div>
      <div className="cell" data-title={ numSets }>
        { numSets }
      </div>
      <div className="cell" data-title={ numReps }>
        { numReps }
      </div>
      <div className="cell">
        <input type="checkbox" />
      </div>
      <div className="cell">
        <div className="delete-btn" 
          onClick={ () => dispatch(removeExercise({ 
            id: id, exercise: exercise, 
            numSets: numSets, numReps: numReps, 
            user_id: parseInt(GET_SESSION()) })) }>
              Delete
        </div>
      </div>
    </div>
  )
}