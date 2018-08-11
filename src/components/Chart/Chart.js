import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './Chart.css';

class Chart extends Component {
  state = {
    chartData: {
      labels: ['boston', 'new york'],
      datasets: [ 
        {
          label: 'Population',
          data: [2, 4]
        }
      ]
    }
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default Chart;
