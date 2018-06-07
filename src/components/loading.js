import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RingLoader } from 'react-spinners';


export class IsLoading extends Component {

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired
  };

  renderSpinner (loading) {
    if (loading) {
      return <RingLoader
        color={'#123abc'} 
        loading={loading}
      />
    }
    return this.props.children;
  }

  render() {
    return (
      <div className='sweet-loading'>
        {this.renderSpinner(this.props.loading)}
      </div>
    );
  }
}

/* <IsLoading props={loading: true, chil} */
// functional components
  // IsLoading.propTypes = {};

export default IsLoading;