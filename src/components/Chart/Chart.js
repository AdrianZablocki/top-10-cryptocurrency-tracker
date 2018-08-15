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
          data: this.props.prices,
        }
      ]
    }
    // chartData: {
    //   labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    //   datasets: [ 
    //     {
    //       label: 'Price USD',
    //       data: [0, 100, 300, 400, 500, 550, 550, 600, 400, 300, 300, 400, 600, 100]
    //     }
    //   ]
    // }
  }

  render() {
    return (
      <div id="chart">
        <Line
          data = {this.state.chartData}
	        height={this.props.height}
          options = {
            {
              title: {
                text: this.props.id + ' CURRENCY',
                fontSize: 24,
                fontColor: 'rgb(3, 29, 53)',
                fontStyle: 'normal',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                display: true,
                lineHeight: 0,
                padding: 40,
              },
              legend: {
                display: false,
              },
              elements: {
                point: {
                  radius: 5,
                  hoverRadius: 6,
                  borderWidth: 1,
                  hoverBorderWidth: 2,
                  backgroundColor: 'rgb(3, 29, 53, 0.5)',
                  borderColor: 'rgb(3, 29, 53)'
                },
                line: {
                  tension: 0.4,
                  borderWidth: 2,
                  backgroundColor: 'rgb(3, 29, 53, .5)',
                  borderColor: 'rgb(3, 29, 53)',
                  borderCapStyle: 'round'
                },

              },
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: true,
                    color: "rgb(3, 29, 53)"
                  },
                  ticks: {
                    display: true,
                    fontColor: "rgb(3, 29, 53)"
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: true,
                    color: "rgb(3, 29, 53)"
                  },
                  ticks: {
                    display: true,
                    fontColor: "rgb(3, 29, 53)"
                  }
                }],
              }
            }
          }
        />
      </div>
    )
  }
}

export default Chart;