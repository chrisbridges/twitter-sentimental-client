import React, { Component } from 'react';
import Chart from 'chart.js';
import chartStreaming from 'chartjs-plugin-streaming';
import './Chart.css';

export class MyChart extends Component {

//   componentDidMount () {
//     const ctx = document.getElementById('myChart').getContext('2d');

//     let chart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Red', 'Blue'],
//         datasets: [{
//           data: []
//         },{
//           data: []
//         }]
//       },
//       options: {
//         scales: {
//           xAxes: [{
//             type: 'realtime'
//           }]
//         },
//         plugins: {
//           streaming: {
//             // onRefresh: function (chart) {
//             //   chart.data.datasets.forEach(function(dataSet) {
//             //     dataset.data.push({
//             //       x: Date.now(),
//             //       y: Math.random()
//             //     });
//             //   });
//             // }
//           }
//         }
//       }
//     });
//   }

  componentDidMount () {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',               // 'line', 'bar', 'bubble' and 'scatter' types are supported
      data: {
          datasets: [{
              data: []            // empty at the beggining
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  type: 'realtime'    // x axis will auto-scroll from right to left
              }]
          },
          plugins: {
              streaming: {            // enabled by default
                  duration: 20000,    // data in the past 20000 ms will be displayed
                  refresh: 1000,      // onRefresh callback will be called every 1000 ms
                  delay: 1000,        // delay of 1000 ms, so upcoming values are known before plotting a line
                  frameRate: 30,      // chart is drawn 30 times every second
  
                  // a callback to update datasets
                  onRefresh: function(chart) {
                      chart.data.datasets[0].data.push({
                          x: Date.now(),
                          y: Math.random() * 100
                      });
                  }
              }
          }
      }
  }
    );
  }

  render() {
    return (
      <div className="chart">
        <canvas id="myChart"></canvas>
      </div>
    )
  }
}

export default MyChart;