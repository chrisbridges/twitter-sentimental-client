import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import chartStreaming from 'chartjs-plugin-streaming';
import './Chart.css';

export class MyChart extends Component {

  constructor(props) {
    super(props);
    // this.retrieveScore = this.retrieveScore.bind(this);
  }

  componentDidMount () {
    let score = () => this.retrieveScore();
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
                  duration: 60000,    // data in the past 20000 ms will be displayed
                  refresh: 1000,      // onRefresh callback will be called every 1000 ms
                  delay: 1000,        // delay of 1000 ms, so upcoming values are known before plotting a line
                  frameRate: 30,      // chart is drawn 30 times every second
  
                  // a callback to update datasets
                  onRefresh: function(chart) {
                    // let score = this.retrieveScore();
                    chart.data.datasets[0].data.push({
                        x: Date.now(),
                        y: score()
                    });
                  }
              }
          }
      }
  }
    );
  }

  retrieveScore () {
    return this.props.sentimentScore;
  }

  render() {
    return (
      <div className="chart">
        <canvas id="myChart"></canvas>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sentimentScore: state.sentimentScore
});

MyChart.propTypes = {
  sentimentScore: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(MyChart);