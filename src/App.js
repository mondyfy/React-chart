import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
//import "chartjs-plugin-lineheight-annotation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "graph",
      data: {
        labels: [
          "Janaury",
          "Freburery",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Video Mades",
            backgroundColor: "rgba(255,0,255,0.75)",
            data: [44, 54, 61, 60, 32, 29]
          } /* ,
          {
            label: "Subscriptions",
            backgroundColor: "rgba(0,255,0,0.75)",
            data: [14, 15, 21, 0, 12, 4, 2]
          } */
        ]
      }
    };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133,122,144,0.5)");
    return gradient;
  };

  /*  getChartData = canvas => {
    const data = this.state.data;

    if (data.datasets) {
      let colors = ["rgba(255,0,255,0.75)", "rgba(0,255,0,0.75)"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  }; */

  render() {
    return (
      <div style={{ position: "relative", width: 800, height: 750 }}>
        <h3> Chart Samples</h3>
        <h4>Line</h4>
        <Line
        /* options={{
            responsive: true,
            lineHeightAnnotation: {
              always: false,
              hover: true,
              color: "white",
              noDash: true
            }
          }}
          data={this.getChartData} */
        />

        <h4>Bar</h4>
        <Bar data={this.state.data} />
      </div>
    );
  }
}
