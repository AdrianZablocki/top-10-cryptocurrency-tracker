import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './Chart.css';

class Chart extends Component {
  state = {
    chartData: {
      labels: this.props.labels,
      datasets: [ 
        {
          label: 'Price USD',
          data: this.props.prices
        }
      ]
    }
  }

  render() {
    return (
      <div className="chart">
        <Line
          data = {this.state.chartData}
          options = {
            {
              //maintainAspectRatio: false,
              title: {
                display: true,
                text: 'Some currency',
                fontSize: 12
              },
              legend: {
                display: true,
                position: this.props.legendPosition
              }
            }
          }
        />
      </div>
    )
  }
}

export default Chart;