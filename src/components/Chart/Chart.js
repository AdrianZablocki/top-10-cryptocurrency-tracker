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
          //backgroundColor: 'rgb(255, 99, 132)',
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
              //maintainAspectRatio: false,
              title: {
                text: this.props.id + ' currency',
                fontSize: 24,
                fontColor: '#FFF',
                display: true,
                lineHeight: 0,
                padding: 40,
              },
              legend: {
                display: false,
                //position: this.props.legendPosition
              },
              elements: {
                point: {
                  radius: 4,
                  hoverRadius: 6,
                  borderWidth: 1,
                  hoverBorderWidth: 2,
                  backgroundColor: 'rgba(255, 255, 255, .8)',
                  borderColor: 'rgb(255, 255, 255)'
                },
                line: {
                  tension: 0.4,
                  borderWidth: 2,
                  backgroundColor: 'rgba(255, 255, 255, .2)',
                  borderColor: 'rgb(255, 255, 255)',
                  borderCapStyle: 'round'
                },

              },
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: true,
                    color: "#FFF"
                  },
                  ticks: {
                    display: true,
                    fontColor: "#FFF"
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false,
                    drawBorder: true,
                    color: "#FFF"
                  },
                  ticks: {
                    display: false,
                    fontColor: "#FFF"
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