import React from "react";
import { Line } from "react-chartjs-2";

export const LineChart = (props) => {
  return (
    <div className="chart">
      <Line height={ 325 }
        data={ props.data } 
        options={{
          maintainAspectRatio: false, 
          title: { 
            display: true,
            text: "Changes In Your BMI Over Time",
            fontSize: 20 
          },
          legend: {
            display: false
          }
        }} />
    </div>
  )
}
