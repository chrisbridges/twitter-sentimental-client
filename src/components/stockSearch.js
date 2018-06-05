import React, { Component } from 'react';
import {connect} from 'react-redux';
import {subscribeToStock} from '../actions/actions';

export class stockSearch extends Component {

  search(e) {
    e.preventDefault();
    const symbol = this.input.value;
    // console.log(symbol);
    if (symbol.trim() === '') {
      alert('Please enter a valid ticker - (eg. AAPL, MSFT, TSLA)');
      return;
    }
    this.props.dispatch(subscribeToStock(symbol));
  }

  render() {
    return (
      <div className="stock-search">
        <form onSubmit={(e) => this.search(e)}>
          <input type="search" ref={input => this.input = input} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stock: state.stock
});

export default connect(mapStateToProps)(stockSearch);
