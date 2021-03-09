import React from "react";
import { LineChart } from "./LineChart";
import "../styles/LineChartContainer.css";

class LineChartContainer extends React.Component {

  render() {

    const chartData = {
      labels: [...this.props.datesData],
      datasets: [{
        label: "Body Mass Index",
        data: [...this.props.bmiData],
        backgroundColor: ["#00c2ff"]
      }]
    }

    return (
      <div className="line-chart-container">
        <LineChart data={ chartData } />
      </div>
    )
  }
}

export default LineChartContainer;