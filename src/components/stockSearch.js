import React, { Component } from 'react';
import {connect} from 'react-redux';
import {subscribeToStock, returnToDefaultState} from '../actions/stockSearchActions';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import {withRouter} from 'react-router';
import './stockSearch.css';

export class stockSearch extends Component {
// TODO: if another stock is searched for after initial search, disconnect previous socket
  // also do whenever anyone routes back to index route '/'
  search(e) {
    e.preventDefault();
    const symbol = `$${this.input.value.toUpperCase()}`;
    if (symbol.trim() === '$') {
      alert('Please enter a valid ticker - (eg. AAPL, MSFT, TSLA)');
      return;
    }

    this.props.dispatch(returnToDefaultState());
    this.props.dispatch(subscribeToStock(symbol));
    // only go to this once first tweet comes in
    // if (this.props.receivedTweets) {
    //   this.props.history.push('/analysis');
    // }
  }

  // renderAnalysis () {
  //   if (this.props.receivedTweets) {
  //     this.props.history.push('/analysis');
  //   }
  // }

// should I use Redux Forms?
  render() {
    return (
      <div className="stock-search">
        <form onSubmit={(e) => this.search(e)}>
          <input type="text" ref={input => this.input = input} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // receivedTweets: state.tweets.length > 0
});

// export default withRouter(connect(mapStateToProps)(stockSearch));

export default connect()(stockSearch);