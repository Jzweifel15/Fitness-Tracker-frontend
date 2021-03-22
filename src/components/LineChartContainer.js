import React from "react";
import { LineChart } from "../components/LineChart";
import { extractBMIDates } from "../helpers/extractBMIDates";
import "../styles/LineChartContainer.css";

export const LineChartContainer = (props) => {

  const bmiData = props.bmis.map(bmiObj => bmiObj.bmi);
  const datesData = extractBMIDates(props.bmis);

  const chartData = {
    labels: [...datesData],
    datasets: [{
      label: "Body Mass Index",
      data: [...bmiData],
      backgroundColor: ["#00c2ff"]
    }]
  }

  return (
    <div className="line-chart-container">
      <LineChart data={ chartData } />
    </div>
  );

}