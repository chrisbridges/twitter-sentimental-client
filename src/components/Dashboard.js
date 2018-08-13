import React, { Component } from 'react';
import Tweets from './Tweets';
import SentimentWords from './SentimentWords';
import SentimentScore from './SentimentScore';
import MyChart from './MyChart';

export class Dashboard extends Component {

  componentDidMount () {
    this.loaded.scrollIntoView({behavior: 'smooth'})
  }

  render () {
    return (
      <div className="dashboard" ref={ref => this.loaded = ref}>
        <div className="analysis">
          <Tweets />
          <SentimentWords />
          <SentimentScore />
        </div>
        <MyChart />
      </div>
    );
  }
}

export default Dashboard;