import React from "react";
import { LineChart } from "./LineChart";
import "../styles/LineChartContainer.css";

class LineChartContainer extends React.Component {

  render() {

    const bmiData = this.props.bmis.map(bmiObj => bmiObj.bmi);
    const datesData = this.props.bmis.map(bmiObj => {
      let day = bmiObj.created_at.slice(8, 10);
      let month;
      switch(bmiObj.created_at.slice(5, 7)) {
        case "01":
          month = "Jan";
          break;
        case "02":
          month = "Feb";
          break;
        case "03":
          month = "Mar";
          break;
        case "04":
          month = "Apr";
          break;
        case "05":
          month = "May";
          break;
        case "06":
          month = "June";
          break;
        case "07":
          month = "July";
          break;
        case "08":
          month = "Aug";
          break;
        case "09":
          month = "Sept";
          break;
        case "10":
          month = "Oct";
          break;
        case "11":
          month = "Nov";
          break;
        case "12":
          month = "Dec";
          break;
        default:
          let today = new Date();
          month = today.toString().slice(4, 7);
      }

      return `${month} ${day}`
    });

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
    )
  }
}

export default LineChartContainer;