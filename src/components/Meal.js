import React from "react";
import { useDispatch } from "react-redux";
import { removeMeal } from "../store/actions/removeMeal";
import { GET_SESSION } from "../store/session";

export const Meal = (props) => {

  const { id, name, numServings, calories } = props;
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="cell" data-title={ name }>
        { name }
      </div>
      <div className="cell" data-title={ numServings }>
        { numServings }
      </div>
      <div className="cell" data-title={ calories }>
        { calories }
      </div>
      <div className="cell">
        <div className="delete-btn"
          onClick={ () => dispatch(removeMeal({ 
            id: id, name: name, 
            numServings: numServings, calories: calories,
            user_id: parseInt(GET_SESSION()) })) }>
              Delete
        </div>
      </div>
    </div>
  );
}